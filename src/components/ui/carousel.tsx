"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

interface CarouselProps {
  children: React.ReactNode
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showIndicators?: boolean
  showControls?: boolean
}

interface CarouselContextProps {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  totalItems: number
  setTotalItems: (total: number) => void
  goToNext: () => void
  goToPrevious: () => void
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ 
    children, 
    className, 
    autoPlay = false, 
    autoPlayInterval = 4000,
    showIndicators = true,
    showControls = true,
    ...props 
  }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [totalItems, setTotalItems] = React.useState(0)
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

    const goToNext = React.useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems)
    }, [totalItems])

    const goToPrevious = React.useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
    }, [totalItems])

    React.useEffect(() => {
      if (autoPlay && totalItems > 1) {
        intervalRef.current = setInterval(goToNext, autoPlayInterval)
        return () => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
        }
      }
    }, [autoPlay, autoPlayInterval, goToNext, totalItems])

    const contextValue = React.useMemo(() => ({
      currentIndex,
      setCurrentIndex,
      totalItems,
      setTotalItems,
      goToNext,
      goToPrevious,
    }), [currentIndex, totalItems, goToNext, goToPrevious])

    return (
      <CarouselContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn("relative w-full", className)}
          {...props}
        >
          {children}
          {showControls && totalItems > 1 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
          {showIndicators && totalItems > 1 && (
            <div className="flex justify-center space-x-2 mt-4">
              {Array.from({ length: totalItems }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-blue-500 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { itemsToShow?: number }
>(({ className, children, itemsToShow = 1, ...props }, ref) => {
  const { setTotalItems } = useCarousel()
  
  React.useEffect(() => {
    const childrenArray = React.Children.toArray(children)
    setTotalItems(Math.ceil(childrenArray.length / itemsToShow))
  }, [children, itemsToShow, setTotalItems])

  return (
    <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
      <div className="relative">
        {children}
      </div>
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index?: number; itemsToShow?: number }
>(({ className, children, index = 0, itemsToShow = 1, ...restProps }, ref) => {
  const { currentIndex } = useCarousel()
  
  const groupIndex = Math.floor(index / itemsToShow)
  const isVisible = groupIndex === currentIndex

  // Separate motion props from HTML props
  const { onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...htmlProps } = restProps;

  return (
    <motion.div
      ref={ref}
      className={cn("w-full", className)}
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 100,
      }}
      style={{
        display: isVisible ? "block" : "none"
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      {...htmlProps}
    >
      {children}
    </motion.div>
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { goToPrevious } = useCarousel()

  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-md z-10",
        className
      )}
      onClick={goToPrevious}
      {...props}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { goToNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-md z-10",
        className
      )}
      onClick={goToNext}
      {...props}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
