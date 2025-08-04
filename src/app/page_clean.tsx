"use client"

import React, { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/textarea';
import ParallaxText from '@/components/ui/ParallaxText';
import ScrollLinked from '@/components/ui/ScrollLinked';
import Keyframes from '@/components/ui/Keyframes';
import ScrollTriggered from '@/components/ui/ScrollTriggered';
import CircularLayout from '@/components/ui/CircularLayout';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [yearlyPricing, setYearlyPricing] = useState(false);

  const testimonials = [
    {
      quote: "ADmyBRAND's AI cut our ad spend by 30% while increasing leads by 40%. The ROI speaks for itself.",
      author: "Sarah Chen",
      role: "CMO at TechFlow",
      avatar: "👩‍💼"
    },
    {
      quote: "The Creative Studio generates better copy than our entire content team. It's like having 10 copywriters.",
      author: "Marcus Rodriguez",
      role: "Marketing Director at Innovate",
      avatar: "👨‍💼"
    },
    {
      quote: "Campaign Autopilot manages our $2M ad budget better than any human ever could. Incredible results.",
      author: "Emily Watson",
      role: "CEO at GrowthLab",
      avatar: "👩‍💻"
    },
    {
      quote: "The AI insights helped us discover new market opportunities we never knew existed. Revenue up 60%!",
      author: "David Kim",
      role: "Founder at StartupScale",
      avatar: "👨‍💻"
    },
    {
      quote: "From content creation to campaign optimization, ADmyBRAND handles everything. Our team can focus on strategy.",
      author: "Lisa Zhang",
      role: "VP Marketing at TechCorp",
      avatar: "👩‍🎯"
    },
    {
      quote: "The predictive analytics are phenomenal. We're always two steps ahead of our competition now.",
      author: "Michael Brown",
      role: "Head of Growth at InnovateLabs",
      avatar: "👨‍🔬"
    }
  ];

  const features = [
    {
      name: "Creative Studio",
      category: "Generate",
      description: "AI that writes ad copy, blog posts, and social media updates in any tone.",
      icon: "✨"
    },
    {
      name: "Audience Forecaster",
      category: "Predict", 
      description: "Analyzes market data to predict which customer segments will be most valuable next quarter.",
      icon: "🔮"
    },
    {
      name: "Campaign Autopilot",
      category: "Automate",
      description: "Manages and optimizes your ad spend across Google, Facebook, and TikTok automatically.",
      icon: "🚀"
    },
    {
      name: "SEO Strategist",
      category: "Predict",
      description: "Uncovers competitor keywords and generates a content plan to rank #1.",
      icon: "🎯"
    },
    {
      name: "Brand Sentinel",
      category: "Automate",
      description: "Monitors social media for mentions of your brand and uses AI to analyze sentiment in real-time.",
      icon: "🛡️"
    },
    {
      name: "Insight Hub",
      category: "Predict",
      description: "A central dashboard that uses AI to translate complex analytics into plain-English insights.",
      icon: "📊"
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-black">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/30 to-gray-800/50"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm font-semibold mb-8 backdrop-blur-sm border border-gray-600/50"
              >
                <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                Your AI Co-Pilot for Effortless Marketing
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              >
                Stop Guessing.{' '}
                <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                  Start Growing.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
              >
                The ADmyBRAND AI Suite writes your copy, predicts your next customer, and automates your campaigns. <span className="text-white font-semibold">Effortlessly.</span>
              </motion.p>

              {/* Interactive Demo Input */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl mx-auto mb-12"
              >
                <div className="bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-700/20">
                  <div className="flex flex-col space-y-4">
                    <Textarea
                      placeholder="e.g., 'Launch a campaign for a new vegan sneaker brand targeting environmentally conscious millennials...'"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent min-h-[100px]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Button variant="secondary" size="xl">
                  Start Your Free Trial
                </Button>
                <Button 
                  size="xl"
                  onClick={() => {
                    const element = document.querySelector('#pricing');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Explore Plans
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white mb-8"
              >
                Ready to build your <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">future?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Join thousands of marketers who've already transformed their campaigns with AI. Start your free trial today.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  variant="secondary" 
                  size="xl"
                >
                  Start Your Free Trial
                </Button>
                <Button 
                  size="xl"
                  onClick={() => {
                    const element = document.querySelector('#pricing');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Explore Plans
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
