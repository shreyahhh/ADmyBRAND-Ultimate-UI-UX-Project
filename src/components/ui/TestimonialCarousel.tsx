"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

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
  autoPlayInterval = 3000,
  className = ""
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth horizontal slider effect
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoPlayInterval);
    return () => clearTimeout(timeoutRef.current!);
  }, [currentIndex, testimonials.length, autoPlayInterval]);

  // Show 3 cards at once with horizontal sliding
  return (
    <div className={`relative w-full max-w-4xl mx-auto px-4 overflow-hidden ${className}`}>
      <div className="flex items-center justify-center" style={{transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: `translateX(-${currentIndex * 33.33}%)`}}>
        {testimonials.map((testimonial, i) => (
          <div key={i} className="min-w-[33.33%] flex-shrink-0 px-2">
            <Card className={`transition-all duration-500 bg-gray-900 border-gray-700 border-2 shadow-2xl h-[320px] ${
              i === 1 ? 'scale-110 z-10' : 'scale-95 z-0'
            }`}>
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div className="mb-4">
                  <svg className="w-6 h-6 mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.762-3.022.662-1.065 1.515-1.867 2.558-2.403L9.373 5.175C8.17 5.82 7.143 6.75 6.291 7.966c-.852 1.215-1.279 2.619-1.279 4.212 0 .748.199 1.434.597 2.062.398.628.945 1.127 1.641 1.497.695.369 1.434.553 2.217.553.783 0 1.482-.184 2.097-.553.615-.369 1.08-.818 1.394-1.347.315-.529.472-1.108.472-1.738zM21.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.762-3.022.662-1.065 1.515-1.867 2.558-2.403L19.373 5.175c-1.203.645-2.23 1.575-3.082 2.791-.852 1.215-1.279 2.619-1.279 4.212 0 .748.199 1.434.597 2.062.398.628.945 1.127 1.641 1.497.695.369 1.434.553 2.217.553.783 0 1.482-.184 2.097-.553.615-.369 1.08-.818 1.394-1.347.315-.529.472-1.108.472-1.738z"/>
                  </svg>
                  <p className="leading-relaxed mb-4 text-white text-sm font-medium">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className="rounded-full flex items-center justify-center w-10 h-10 bg-gray-700 text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                    <div className="text-xs text-gray-300 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${index === currentIndex ? "w-8 h-2 bg-white rounded-full" : "w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-500"}`}
            aria-label={`Go to testimonial ${index + 1}`}
            suppressHydrationWarning={true}
          />
        ))}
      </div>
    </div>
  );
}
