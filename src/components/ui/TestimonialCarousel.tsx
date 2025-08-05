"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
  className?: string;
}

export function TestimonialCarousel({ 
  testimonials, 
  autoPlayInterval = 5000,
  className = ""
}: TestimonialCarouselProps) {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <Carousel
        className="w-full"
        autoPlay={true}
        autoPlayInterval={autoPlayInterval}
        showIndicators={false}
        showControls={false}
      >
        <CarouselContent itemsToShow={1}>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} index={index} itemsToShow={1}>
              <div className="p-1">
                <Card className="bg-gray-900 border-gray-700 border-2 shadow-2xl h-auto min-h-[320px] transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Quote section - centered */}
                    <div className="flex-1 flex flex-col justify-center mb-6">
                      <svg className="w-6 h-6 mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.762-3.022.662-1.065 1.515-1.867 2.558-2.403L9.373 5.175C8.17 5.82 7.143 6.75 6.291 7.966c-.852 1.215-1.279 2.619-1.279 4.212 0 .748.199 1.434.597 2.062.398.628.945 1.127 1.641 1.497.695.369 1.434.553 2.217.553.783 0 1.482-.184 2.097-.553.615-.369 1.08-.818 1.394-1.347.315-.529.472-1.108.472-1.738zM21.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.762-3.022.662-1.065 1.515-1.867 2.558-2.403L19.373 5.175c-1.203.645-2.23 1.575-3.082 2.791-.852 1.215-1.279 2.619-1.279 4.212 0 .748.199 1.434.597 2.062.398.628.945 1.127 1.641 1.497.695.369 1.434.553 2.217.553.783 0 1.482-.184 2.097-.553.615-.369 1.08-.818 1.394-1.347.315-.529.472-1.108.472-1.738z"/>
                      </svg>
                      <p className="leading-relaxed text-white text-base font-medium">"{testimonial.quote}"</p>
                    </div>
                    
                    {/* Author section - at bottom */}
                    <div className="flex items-center space-x-4 mt-auto">
                      <div className="rounded-full flex items-center justify-center w-12 h-12 bg-gray-700 text-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-base">{testimonial.author}</div>
                        <div className="text-sm text-gray-300 font-medium">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom positioned navigation buttons */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2">
          <CarouselPrevious className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2">
          <CarouselNext className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
        </div>
      </Carousel>
    </div>
  )
}
