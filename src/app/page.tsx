'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// NOTE: You will need to import your actual components.
// These are example paths - please adjust them to match your project structure.
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

// This is your main page component
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

  const logos = [
    'Microsoft', 'Apple', 'Netflix', 'Spotify', 'Amazon', 'Tesla', 'Adobe', 'Slack', 'Airbnb', 'Uber'
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
            {/* Badge - UPDATED */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-green-900/30 text-green-300 text-sm font-semibold mb-8 backdrop-blur-sm border border-green-500/30"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              Your AI Co-Pilot for Effortless Marketing
            </motion.div>

            {/* Main Heading - UPDATED */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Stop Guessing.{' '}
              <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                Start Growing.
              </span>
            </motion.h1>

            {/* Subtitle - UPDATED */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              The ADmyBRAND AI Suite writes your copy, predicts your next customer, and automates your campaigns. <span className="text-white font-semibold">Effortlessly.</span>
            </motion.p>

            {/* Interactive Demo Input */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto mb-10"
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

            {/* CTA Buttons - UPDATED */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button variant="secondary" size="lg">
                Start Your Free Trial
              </Button>
              <Button 
                size="lg"
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

      {/* Social Proof Bar - UPDATED */}
      <section className="py-12 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Trusted by Industry Leaders</p>
          </div>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
              {logos.map((logo, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-medium">
                  {logo}
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
               {logos.map((logo, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-medium">
                  {logo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Pillars Section - Bento Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Three Pillars of <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">AI Marketing</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our AI doesn't just assist—it revolutionizes how you approach marketing
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Generate */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Generate</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Creates compelling content and creatives from a simple prompt. Write ads, blogs, and social posts that convert.
                </p>
              </div>
            </motion.div>

            {/* Predict */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Predict</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Uncovers future trends and audience behavior before they happen. Stay ahead of your competition.
                </p>
              </div>
            </motion.div>

            {/* Automate */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Automate</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Manages and optimizes entire campaigns across channels, so you don't have to. Set it and forget it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Powerful AI Tools at Your <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Fingertips</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Each tool is designed to work seamlessly together, creating a unified marketing ecosystem
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Feature Grid - 3 rows, 2 columns side by side */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group ${
                    activeFeature === index
                      ? 'border-gray-500 bg-gray-800/50 shadow-lg'
                      : 'border-gray-700 bg-gray-800 hover:border-gray-600 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex flex-col space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-white text-black scale-110'
                        : 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col space-y-2 mb-2">
                        <h3 className={`text-lg font-bold transition-colors ${
                          activeFeature === index ? 'text-white' : 'text-gray-200'
                        }`}>
                          {feature.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-all self-start ${
                          feature.category === 'Generate' 
                            ? 'bg-gray-700 text-gray-300'
                            : feature.category === 'Predict'
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-700 text-gray-300'
                        }`}>
                          {feature.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Feature Visual - Now below the grid */}
            <div className="mt-12 max-w-4xl mx-auto">
              <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 h-96 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-6">{features[activeFeature].icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {features[activeFeature].name}
                    </h3>
                    <p className="text-gray-300 text-lg max-w-md">
                      {features[activeFeature].description}
                    </p>
                    <div className="mt-8">
                      <Button variant="gradient" className="px-6 py-3 rounded-xl bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300">
                        Try {features[activeFeature].name}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
      </section>

      {/* AI Transformations Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Dynamic AI Transformations
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
              Experience the fluid, intelligent animations that power our AI-driven platform
            </p>
            <div className="flex justify-center items-center">
              <Keyframes />
            </div>
          </div>
        </div>
      </section>

      {/* Target Demographics Circular Layout Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Target Your Perfect Audience
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Reach the right people with precision targeting across diverse demographics and locations
            </p>
          </div>
          <div className="flex justify-center">
            <CircularLayout />
          </div>
        </div>
      </section>

      {/* AI-Powered Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              AI-Powered <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Features</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Discover our intelligent marketing tools that adapt and learn from your data
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Row 1 */}
              {/* Smart Analytics */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Analytics</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    AI-powered insights that track customer behavior and predict future trends with 95% accuracy.
                  </p>
                </div>
              </motion.div>

              {/* Automated Campaigns */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Automated Campaigns</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Set up campaigns once and let AI optimize targeting, budgets, and creative content automatically.
                  </p>
                </div>
              </motion.div>

              {/* Row 2 */}
              {/* Content Generation */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Content Generation</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Generate compelling copy, images, and videos that resonate with your target audience instantly.
                  </p>
                </div>
              </motion.div>

              {/* Predictive Modeling */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Predictive Modeling</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Forecast market trends and customer lifetime value to make data-driven strategic decisions.
                  </p>
                </div>
              </motion.div>

              {/* Row 3 */}
              {/* Real-time Optimization */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Real-time Optimization</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Continuously adjust campaigns in real-time based on performance data and market changes.
                  </p>
                </div>
              </motion.div>

              {/* Customer Intelligence */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Customer Intelligence</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Deep learning algorithms that understand customer psychology and buying patterns.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Scroll Section */}
      <section className="py-16 px-0 bg-black">
        <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Scroll to Experience the Power
          </h2>
          <p className="text-gray-300">
            Watch how our AI adapts to your scroll velocity
          </p>
        </div>
        <ParallaxText baseVelocity={-2}>AI-Powered Marketing</ParallaxText>
        <ParallaxText baseVelocity={2}>Scroll Velocity Detection</ParallaxText>
      </section>

      {/* Interactive Scroll Component Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From campaign automation to advanced analytics, we've got you covered with our comprehensive suite of AI-powered tools.
            </p>
          </div>

          {/* Interactive Scroll Component */}
          <div className="flex justify-center mb-12">
            <ScrollLinked />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Simple, <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Transparent</span> Pricing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Choose the plan that fits your business needs. All plans include our core AI features.
            </motion.p>
            
            {/* Pricing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center space-x-4 mb-12"
            >
              <span className={`text-lg font-medium transition-colors ${!yearlyPricing ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setYearlyPricing(!yearlyPricing)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 ${
                  yearlyPricing ? 'bg-white' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-black rounded-full transition-transform duration-300 ${
                    yearlyPricing ? 'translate-x-8' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium transition-colors ${yearlyPricing ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {yearlyPricing && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold"
                >
                  Save 20%
                </motion.span>
              )}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    ${yearlyPricing ? '23' : '29'}
                  </span>
                  <span className="text-gray-300 ml-2">
                    /{yearlyPricing ? 'month' : 'month'}
                  </span>
                </div>
                {yearlyPricing && (
                  <div className="text-sm text-gray-400 line-through">$348/year</div>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 10,000 contacts', 'Basic AI insights', 'Email support', '5 campaigns/month'].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full py-3 rounded-2xl border-2 border-gray-600 text-white hover:bg-gray-700 transition-all group-hover:border-gray-500">
                Get Started
              </Button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-gradient-to-b from-gray-700 to-gray-800 rounded-3xl p-8 border-2 border-white shadow-xl scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-white to-gray-200 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    ${yearlyPricing ? '79' : '99'}
                  </span>
                  <span className="text-gray-300 ml-2">
                    /{yearlyPricing ? 'month' : 'month'}
                  </span>
                </div>
                {yearlyPricing && (
                  <div className="text-sm text-gray-400 line-through">$1,188/year</div>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 100,000 contacts', 'Advanced AI features', 'Priority support', 'Unlimited campaigns', 'Custom integrations'].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="gradient" className="w-full py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300">
                Get Started
              </Button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">Custom</span>
                </div>
                <div className="text-gray-300">Contact sales</div>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unlimited contacts', 'Custom AI models', 'Dedicated support', 'SLA guarantee', 'White-label options'].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full py-3 rounded-2xl border-2 border-gray-600 text-white hover:bg-gray-700 transition-all group-hover:border-gray-500">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Loved by <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Thousands</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              See how companies are transforming their marketing with ADmyBRAND AI Suite
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TestimonialCarousel 
              testimonials={testimonials}
              autoPlayInterval={4000}
              className="py-8"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Built by Marketers, for Marketers
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                ADmyBRAND was founded by a team of marketing professionals who were frustrated with the complexity and inefficiency of existing marketing tools. We set out to create a solution that leverages the power of AI to make marketing simpler, more effective, and more accessible.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Today, we serve thousands of businesses worldwide, helping them achieve remarkable results through intelligent automation and data-driven insights.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-white mb-2">10K+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">50+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Mission</h3>
                    <p className="text-sm text-gray-300">Empower marketers with AI-driven tools</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Vision</h3>
                    <p className="text-sm text-gray-300">The future of marketing is intelligent</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Values</h3>
                    <p className="text-sm text-gray-300">Innovation, transparency, results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to transform your marketing? Let's talk about how ADmyBRAND can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-gray-300">hello@admybrand.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">Address</div>
                    <div className="text-gray-300">123 AI Street, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="John"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="Doe"
                      suppressHydrationWarning
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="john@example.com"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Tell us about your project..."
                    suppressHydrationWarning
                  ></textarea>
                </div>
                <Button variant="gradient" className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300" suppressHydrationWarning>
                  Send Message
                </Button>
              </form>
            </div>
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