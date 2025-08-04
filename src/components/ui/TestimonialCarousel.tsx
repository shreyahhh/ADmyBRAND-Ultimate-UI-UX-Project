"use client"

import React, { useEffect, useState } from 'react';
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
  autoPlayInterval = 4000,
  className = ""
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [testimonials.length, autoPlayInterval]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({
        ...testimonials[index],
        index,
        position: i // 0: left, 1: center, 2: right
      });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className={`relative w-full max-w-7xl mx-auto px-4 ${className}`}>
      <div className="flex items-center justify-center space-x-6 overflow-hidden">
        {visibleTestimonials.map((testimonial, i) => (
          <motion.div
            key={`${testimonial.index}-${currentIndex}`}
            initial={{ x: 300, opacity: 0 }}
            animate={{ 
              x: 0,
              opacity: testimonial.position === 1 ? 1 : 0.7,
              scale: testimonial.position === 1 ? 1.05 : 0.95,
              y: testimonial.position === 1 ? -10 : 0,
            }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut",
              delay: i * 0.1
            }}
            className={`flex-1 max-w-md ${
              testimonial.position === 1 ? 'z-10' : 'z-0'
            }`}
          >
            <Card className={`transition-all duration-500 bg-gray-900 border-gray-700 ${
              testimonial.position === 1 
                ? 'border-gray-600 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900' 
                : 'border-gray-800 shadow-lg'
            }`}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg 
                    className={`w-8 h-8 mb-4 ${
                      testimonial.position === 1 ? 'text-white' : 'text-gray-400'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.762-3.022.662-1.065 1.515-1.867 2.558-2.403L9.373 5.175C8.17 5.82 7.143 6.75 6.291 7.966c-.852 1.215-1.279 2.619-1.279 4.212 0 .748.199 1.434.597 2.062.398.628.945 1.127 1.641 1.497.695.369 1.434.553 2.217.553.783 0 1.482-.184 2.097-.553.615-.369 1.08-.818 1.394-1.347.315-.529.472-1.108.472-1.738zM21.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.762-3.022.662-1.065 1.515-1.867 2.558-2.403L19.373 5.175c-1.203.645-2.23 1.575-3.082 2.791-.852 1.215-1.279 2.619-1.279 4.212 0 .748.199 1.434.597 2.062.398.628.945 1.127 1.641 1.497.695.369 1.434.553 2.217.553.783 0 1.482-.184 2.097-.553.615-.369 1.08-.818 1.394-1.347.315-.529.472-1.108.472-1.738z"/>
                  </svg>
                  <p className={`leading-relaxed mb-6 ${
                    testimonial.position === 1 
                      ? 'text-white text-lg font-medium' 
                      : 'text-gray-300 text-base'
                  }`}>
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`rounded-full flex items-center justify-center ${
                    testimonial.position === 1 
                      ? 'w-14 h-14 bg-gray-700 text-2xl' 
                      : 'w-12 h-12 bg-gray-800 text-xl'
                  }`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className={`font-semibold ${
                      testimonial.position === 1 
                        ? 'text-white text-lg' 
                        : 'text-gray-200'
                    }`}>
                      {testimonial.author}
                    </div>
                    <div className={`text-sm ${
                      testimonial.position === 1 
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
