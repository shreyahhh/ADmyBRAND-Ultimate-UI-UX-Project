"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from "@radix-ui/react-label";
import {
  animate,
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useVelocity,
  useAnimationFrame,
  Variants
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from '@/lib/utils';

//================================================================//
// 1. BUTTON COMPONENT (from src/components/ui/Button.tsx)
//================================================================//

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

//================================================================//
// 2. CARD COMPONENTS (from src/components/ui/card.tsx)
//================================================================//

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

//================================================================//
// 3. TEXTAREA COMPONENT (from src/components/ui/textarea.tsx)
//================================================================//

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
);
Textarea.displayName = "Textarea";

//================================================================//
// 4. TESTIMONIAL CAROUSEL (from src/components/ui/TestimonialCarousel.tsx)
//================================================================//

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
  autoPlayInterval = 4000,
  className = ""
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [testimonials.length, autoPlayInterval]);

  const getVisibleTestimonials = () => {
    if (testimonials.length === 0) return [];
    if (testimonials.length < 3) return testimonials.map((t, i) => ({...t, index: i, position: 1}));

    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({
        ...testimonials[index],
        index,
        position: i // -1: left, 0: center, 1: right
      });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className={`relative w-full max-w-7xl mx-auto px-4 ${className}`}>
      <div className="flex items-center justify-center h-[450px] overflow-hidden">
        {visibleTestimonials.map((testimonial) => (
          <motion.div
            key={`${testimonial.index}`}
            initial={{ x: testimonial.position * 300, opacity: 0, scale: 0.8 }}
            animate={{ 
              x: testimonial.position * 250,
              opacity: testimonial.position === 0 ? 1 : 0.5,
              scale: testimonial.position === 0 ? 1.05 : 0.9,
              zIndex: testimonial.position === 0 ? 10 : 0,
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut",
            }}
            className={`absolute max-w-md w-full`}
          >
            <Card className={`transition-all duration-500 bg-gray-900 border-gray-700 ${
              testimonial.position === 0 
                ? 'border-gray-600 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900' 
                : 'border-gray-800 shadow-lg'
            }`}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className={`leading-relaxed mb-6 ${
                    testimonial.position === 0 
                      ? 'text-white text-lg font-medium' 
                      : 'text-gray-300 text-base'
                  }`}>
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`rounded-full flex items-center justify-center ${
                    testimonial.position === 0 
                      ? 'w-14 h-14 bg-gray-700 text-2xl' 
                      : 'w-12 h-12 bg-gray-800 text-xl'
                  }`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className={`font-semibold ${
                      testimonial.position === 0 
                        ? 'text-white text-lg' 
                        : 'text-gray-200'
                    }`}>
                      {testimonial.author}
                    </div>
                    <div className={`text-sm ${
                      testimonial.position === 0 
                        ? 'text-gray-300 font-medium' 
                        : 'text-gray-400'
                    }`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "w-8 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

//================================================================//
// 5. SCROLL TRIGGERED COMPONENT (from src/components/ui/ScrollTriggered.tsx)
//================================================================//

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const scrollTriggeredFeatures: [string, string, string, number, number][] = [
    ["📊", "Advanced Analytics", "Get deep insights into your marketing performance with AI-powered analytics.", 340, 10],
    ["🤖", "Campaign Automation", "Automate your marketing campaigns with intelligent workflows that adapt.", 20, 40],
    ["💡", "Smart Optimization", "Let AI optimize your campaigns in real-time for maximum performance and ROI.", 60, 90],
    ["🎯", "Audience Targeting", "Reach the right people at the right time with AI-powered audience segmentation.", 80, 120],
    ["🧪", "A/B Testing", "Test and optimize your campaigns with intelligent A/B testing and analysis.", 100, 140],
    ["📈", "Performance Tracking", "Track your marketing performance in real-time with comprehensive dashboards.", 205, 245],
];

const cardVariants: Variants = {
    offscreen: {
        y: 150,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

function FeatureCard({ icon, title, description, hueA, hueB }: { icon: string; title: string; description: string; hueA: number; hueB: number; }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
    return (
        <motion.div
            className="flex flex-col p-6 bg-gray-800 rounded-2xl border border-gray-700"
            variants={cardVariants}
        >
            <div style={{ background }} className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </motion.div>
    );
}

export function ScrollTriggered() {
    return (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
            {scrollTriggeredFeatures.map(([icon, title, description, hueA, hueB]) => (
                <FeatureCard icon={icon} title={title} description={description} hueA={hueA} hueB={hueB} key={title} />
            ))}
        </motion.div>
    );
}
