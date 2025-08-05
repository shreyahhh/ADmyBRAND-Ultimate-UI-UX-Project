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
import LayoutGrid from '@/components/ui/LayoutGrid';
import CircularLayout from '@/components/ui/CircularLayout';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import AIFeaturesGrid from '@/components/ui/AIFeaturesGrid';
// import PricingCalculator from '@/components/PricingCalculator'; // Added PricingCalculator
// import BlogCard from '@/components/BlogCard'; // Added BlogCard

// This is your main page component
export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [yearlyPricing, setYearlyPricing] = useState(false);
  
  // Pricing Calculator State
  const [teamSize, setTeamSize] = useState(5);
  const [audienceSizeIndex, setAudienceSizeIndex] = useState(1);
  const [creativeStudio, setCreativeStudio] = useState(false);
  const [predictiveAnalytics, setPredictiveAnalytics] = useState(false);
  const [automatedChannels, setAutomatedChannels] = useState([
    { id: 'google', name: 'Google Ads', price: 15, enabled: false },
    { id: 'meta', name: 'Meta (Facebook & Instagram)', price: 15, enabled: false },
    { id: 'tiktok', name: 'TikTok', price: 20, enabled: false },
    { id: 'linkedin', name: 'LinkedIn', price: 20, enabled: false },
  ]);

  // Pricing Calculator Logic
  const audienceSizes = ['1K', '10K', '50K', '250K', '1M+'];
  const audienceMultipliers = [1, 1.1, 1.2, 1.5, 2];

  const getBasePrice = (seats: number) => {
    if (seats <= 5) return seats * 10;
    if (seats <= 25) return seats * 9;
    return seats * 8;
  };

  const basePrice = getBasePrice(teamSize);
  const audienceMultiplier = audienceMultipliers[audienceSizeIndex];
  const audienceCost = Math.round(basePrice * (audienceMultiplier - 1));

  const getRecommendedPlan = () => {
    if (teamSize > 25 || audienceSizeIndex >= 3) return 'Enterprise';
    if (teamSize > 5 || predictiveAnalytics) return 'Pro';
    return 'Starter';
  };

  const recommendedPlan = getRecommendedPlan();

  const totalPrice = basePrice + audienceCost + 
    (creativeStudio ? 20 : 0) + 
    (predictiveAnalytics ? 45 : 0) + 
    automatedChannels.filter(ch => ch.enabled).reduce((sum, ch) => sum + ch.price, 0);

  const toggleChannel = (channelId: string) => {
    setAutomatedChannels(prev => 
      prev.map(ch => 
        ch.id === channelId ? { ...ch, enabled: !ch.enabled } : ch
      )
    );
  };

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

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Transforming Content Creation",
      date: "May 15, 2023",
      image: "/images/blog1.jpg",
      excerpt: "Discover the latest trends in AI-powered content generation and how they're changing the marketing landscape.",
      link: "/blog/ai-content-creation"
    },
    {
      id: 2,
      title: "The Future of Social Media Marketing",
      date: "May 10, 2023",
      image: "/images/blog2.jpg",
      excerpt: "Learn how AI is revolutionizing social media strategy and engagement.",
      link: "/blog/social-media-marketing"
    },
    {
      id: 3,
      title: "Unlocking the Power of Predictive Analytics",
      date: "May 5, 2023",
      image: "/images/blog3.jpg",
      excerpt: "Discover how ADmyBRAND's AI insights are helping businesses make data-driven decisions.",
      link: "/blog/predictive-analytics"
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
              className="text-4xl font-bold text-white mb-6 leading-tight"
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
              className="text-base text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
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
                <li key={index} className="text-gray-400 hover:text-white transition-colors duration-300 text-base font-medium">
                  {logo}
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
               {logos.map((logo, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors duration-300 text-base font-medium">
                  {logo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Pillars Section - Bento Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-4"
            >
              Three Pillars of <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">AI Marketing</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* Generate */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-black rounded-lg p-4 border-2 border-green-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </div>
              <h3 className="text-sm font-bold text-green-500 mb-2 text-center">Generate</h3>
              <p className="text-gray-300 text-sm text-center">Creates compelling content from simple prompts.</p>
            </motion.div>
            {/* Predict */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-black rounded-lg p-4 border-2 border-green-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                </div>
              <h3 className="text-sm font-bold text-green-500 mb-2 text-center">Predict</h3>
              <p className="text-gray-300 text-sm text-center">Forecasts trends and customer behavior.</p>
            </motion.div>
            {/* Automate */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-black rounded-lg p-4 border-2 border-green-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4"/>
                  <path d="M8 12h8"/>
                </svg>
                </div>
              <h3 className="text-sm font-bold text-green-500 mb-2 text-center">Automate</h3>
              <p className="text-gray-300 text-sm text-center">Manages campaigns across all channels.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold text-white mb-4">Custom Pricing Calculator</h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Build your perfect plan with our value-based pricing. Pay only for what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Controls - Left Side */}
            <div className="space-y-12">
              {/* Team Size Slider */}
              <div>
                <label className="block text-white font-semibold text-base mb-6">
                  How many team members need access?
                </label>
                <div className="mb-4">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                    <span>100+</span>
                  </div>
                </div>
                <div className="text-xl font-bold text-white">{teamSize === 100 ? '100+' : teamSize} team members</div>
              </div>

              {/* Audience Size Slider */}
              <div>
                <label className="block text-white font-semibold text-base mb-6">
                  How many customers do you reach per month?
                </label>
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max="4"
                    value={audienceSizeIndex}
                    onChange={(e) => setAudienceSizeIndex(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span>1K</span>
                    <span>10K</span>
                    <span>50K</span>
                    <span>250K</span>
                    <span>1M+</span>
                  </div>
                </div>
                <div className="text-xl font-bold text-white">{audienceSizes[audienceSizeIndex]}</div>
              </div>

              {/* Feature Modules */}
              <div className="space-y-8">
                {/* Pillar 1: Generate Content */}
                <div className="border-b border-gray-800 pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-base">✨ Generate Content</h3>
                      <p className="text-gray-400 text-sm">Advanced Creative Studio</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={creativeStudio}
                        onChange={(e) => setCreativeStudio(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-base">
                    Generate content in 25+ languages, clone your brand's unique voice, and create AI-powered video scripts.
                  </p>
                </div>

                {/* Pillar 2: Predict Trends */}
                <div className="border-b border-gray-800 pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-base">🔮 Predict Trends</h3>
                      <p className="text-gray-400 text-sm">Predictive Analytics Suite</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={predictiveAnalytics}
                        onChange={(e) => setPredictiveAnalytics(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-base">
                    Unlock audience forecasting, competitor SEO tracking (Brand Sentinel), and market trend analysis.
                  </p>
                </div>

                {/* Pillar 3: Automate Campaigns */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-white font-semibold text-base">🚀 Automate Campaigns</h3>
                    <p className="text-gray-400 text-sm">Automated Ad Channels</p>
                  </div>
                  <p className="text-gray-300 text-base mb-6">
                    Select the channels you want our AI to manage and optimize automatically.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {automatedChannels.map((channel) => (
                      <label key={channel.id} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-900/50 transition-colors">
                        <input
                          type="checkbox"
                          checked={channel.enabled}
                          onChange={(e) => toggleChannel(channel.id)}
                          className="w-5 h-5 text-green-500 bg-gray-800 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                        />
                        <div className="flex-1">
                          <span className="text-white font-medium text-base">{channel.name}</span>
                          <div className="text-green-500 text-sm">+${channel.price}/mo</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Price Summary - Right Side */}
            <div className="lg:sticky lg:top-8 h-fit">
              {/* Recommended Plan */}
              <div className="mb-8">
                <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold">
                  Recommended Plan: {recommendedPlan}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Base Plan ({teamSize === 100 ? '100+' : teamSize} Seats)</span>
                  <span className="text-white font-semibold">${basePrice}/mo</span>
                </div>
                
                {audienceMultiplier > 1 && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Audience Scale ({audienceSizes[audienceSizeIndex]})</span>
                    <span className="text-white font-semibold">+${audienceCost}/mo</span>
                  </div>
                )}

                {creativeStudio && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Advanced Creative Studio</span>
                    <span className="text-white font-semibold">+$20/mo</span>
                  </div>
                )}

                {predictiveAnalytics && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Predictive Analytics Suite</span>
                    <span className="text-white font-semibold">+$45/mo</span>
                  </div>
                )}

                {automatedChannels.filter(ch => ch.enabled).map((channel) => (
                  <div key={channel.id} className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Automated {channel.name}</span>
                    <span className="text-white font-semibold">+${channel.price}/mo</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-gray-800 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-white text-base font-semibold">Total Monthly Cost</span>
                  <span className="text-xl font-bold text-white">${totalPrice}/mo</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full text-base py-4 ${
                  recommendedPlan === 'Enterprise' || totalPrice > 500
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {recommendedPlan === 'Enterprise' || totalPrice > 500 
                  ? 'Book a Demo' 
                  : 'Start Your 14-Day Trial'
                }
              </Button>

              <p className="text-gray-400 text-sm text-center mt-6">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Studio Section with Scroll Design */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <Keyframes />
            </div>
              <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-xl font-bold text-white mb-4">Creative Studio</h2>
              <p className="text-base text-gray-300 mb-6">AI that writes ad copy, blog posts, and social media updates in any tone.</p>
              <Button variant="gradient" className="bg-gray-900 text-white hover:bg-gray-800 border-2 border-white">
                Try Creative Studio
                      </Button>
                </motion.div>
            </div>
          </div>
      </section>

      {/* AI-Powered Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-white mb-4">AI-Powered Features</h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">Discover our intelligent marketing tools that adapt and learn from your data</p>
            </div>
          <AIFeaturesGrid />
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl font-bold text-green-500 mb-8 text-center">Resources & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Marketing Trends 2024",
                excerpt: "Discover the latest trends in AI-powered marketing and how they're reshaping the industry.",
                date: "March 15, 2024",
                category: "Trends"
              },
              {
                title: "How to Optimize Your Campaigns",
                excerpt: "Learn the best practices for optimizing your marketing campaigns with AI assistance.",
                date: "March 10, 2024",
                category: "Guide"
              },
              {
                title: "The Future of Content Creation",
                excerpt: "Explore how AI is revolutionizing content creation and what it means for marketers.",
                date: "March 5, 2024",
                category: "Insights"
              }
            ].map((post, idx) => (
              <motion.div
                key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors"
              >
                <div className="mb-4">
                  <span className="text-green-500 text-sm font-medium">{post.category}</span>
                  <span className="text-gray-400 text-sm ml-2">• {post.date}</span>
          </div>
                <h3 className="text-base font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white">
                  Read More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Demographics Circular Layout Section - updated layout */}
      <section className="py-16 px-2 sm:px-4 lg:px-8 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Circular layout on the left */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
            <CircularLayout />
          </div>
          {/* Feature cards on the right */}
          <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
              {/* Smart Analytics */}
            <div className="bg-black border border-green-500 rounded-lg p-4 flex items-start gap-3">
              <svg width="28" height="28" fill="none" stroke="green" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 17v-6M12 17v-2M17 17v-8"/></svg>
              <div>
                <div className="text-green-500 font-semibold text-sm">Smart Analytics</div>
                <div className="text-gray-200 text-sm">AI-powered insights that track customer behavior and predict future trends with 95% accuracy.</div>
                  </div>
                </div>
              {/* Automated Campaigns */}
            <div className="bg-black border border-green-500 rounded-lg p-4 flex items-start gap-3">
              <svg width="28" height="28" fill="none" stroke="green" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8"/></svg>
              <div>
                <div className="text-green-500 font-semibold text-sm">Automated Campaigns</div>
                <div className="text-gray-200 text-sm">Set up campaigns once and let AI optimize targeting, budgets, and creative content automatically.</div>
                  </div>
                </div>
              {/* Content Generation */}
            <div className="bg-black border border-green-500 rounded-lg p-4 flex items-start gap-3">
              <svg width="28" height="28" fill="none" stroke="green" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <div>
                <div className="text-green-500 font-semibold text-sm">Content Generation</div>
                <div className="text-gray-200 text-sm">Generate compelling copy, images, and videos that resonate with your target audience instantly.</div>
                  </div>
                </div>
              {/* Predictive Modeling */}
            <div className="bg-black border border-green-500 rounded-lg p-4 flex items-start gap-3">
              <svg width="28" height="28" fill="none" stroke="green" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
              <div>
                <div className="text-green-500 font-semibold text-sm">Predictive Modeling</div>
                <div className="text-gray-200 text-sm">Forecast market trends and customer lifetime value to make data-driven strategic decisions.</div>
                  </div>
                </div>
              {/* Real-time Optimization */}
            <div className="bg-black border border-green-500 rounded-lg p-4 flex items-start gap-3">
              <svg width="28" height="28" fill="none" stroke="green" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2v8h8"/><path d="M3 12a9 9 0 0015 6.7l3-3"/></svg>
              <div>
                <div className="text-green-500 font-semibold text-sm">Real-time Optimization</div>
                <div className="text-gray-200 text-sm">Continuously adjust campaigns in real-time based on performance data and market changes.</div>
                  </div>
                </div>
              {/* Customer Intelligence */}
            <div className="bg-black border border-green-500 rounded-lg p-4 flex items-start gap-3">
              <svg width="28" height="28" fill="none" stroke="green" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6"/><circle cx="12" cy="10" r="4"/><path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2"/></svg>
              <div>
                <div className="text-green-500 font-semibold text-sm">Customer Intelligence</div>
                <div className="text-gray-200 text-sm">Deep learning algorithms that understand customer psychology and buying patterns.</div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Scroll Section */}
      <section className="py-16 px-0 bg-black">
        <div className="text-center mb-8 px-4 sm:px-6 lg:px-8"></div>
        <ParallaxText baseVelocity={-2}>ADmyBRAND AI-Suite</ParallaxText>
        <ParallaxText baseVelocity={2}>AI-Powered Marketing</ParallaxText>
      </section>

      {/* AI-Powered Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-white mb-4">
              AI-Powered Features
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Discover our intelligent marketing tools that adapt and learn from your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Audience Forecaster */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-base font-bold text-white mb-3">Audience Forecaster</h3>
              <p className="text-gray-300 text-sm">
                Analyzes market data to predict which customer segments will be most valuable next quarter.
              </p>
            </div>

            {/* Campaign Autopilot */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-base font-bold text-white mb-3">Campaign Autopilot</h3>
              <p className="text-gray-300 text-sm">
                Manages and optimizes your ad spend across Google, Facebook, and TikTok automatically.
              </p>
            </div>

            {/* SEO Strategist */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-base font-bold text-white mb-3">SEO Strategist</h3>
              <p className="text-gray-300 text-sm">
                Uncovers competitor keywords and generates a content plan to rank #1.
              </p>
            </div>

            {/* Brand Sentinel */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-base font-bold text-white mb-3">Brand Sentinel</h3>
              <p className="text-gray-300 text-sm">
                Monitors social media for mentions of your brand and uses AI to analyze sentiment in real-time.
              </p>
            </div>

            {/* Insight Hub */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-base font-bold text-white mb-3">Insight Hub</h3>
              <p className="text-gray-300 text-sm">
                A central dashboard that uses AI to translate complex analytics into plain-English insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Redesigned */}
      {/* (Removed standalone Pricing section) */}

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-6"
            >
              Loved by <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Thousands</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-gray-300 max-w-3xl mx-auto"
            >
              See how companies are transforming their marketing with ADmyBRAND AI Suite
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Testimonial Carousel - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-start"
            >
              <TestimonialCarousel 
                testimonials={testimonials}
                autoPlayInterval={5000}
                className="py-8"
              />
            </motion.div>
            
            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col justify-center items-center lg:items-start space-y-6 h-full"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-white mb-4">What Our Clients Say</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Join thousands of businesses that have transformed their marketing with ADmyBRAND AI Suite. 
                  Our clients see real results - from increased leads to higher ROI.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 text-center lg:text-left">
                <div>
                  <div className="text-xl font-bold text-green-500 mb-2">40%</div>
                  <div className="text-sm text-gray-300">Increase in Leads</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-500 mb-2">30%</div>
                  <div className="text-sm text-gray-300">Reduction in Ad Spend</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-white mb-6"
              >
                Built by Marketers, for Marketers
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base text-gray-300 mb-6"
              >
                ADmyBRAND was founded by a team of marketing professionals who were frustrated with the complexity and inefficiency of existing marketing tools. We set out to create a solution that leverages the power of AI to make marketing simpler, more effective, and more accessible.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base text-gray-300"
              >
                Today, we serve thousands of businesses worldwide, helping them achieve remarkable results through intelligent automation and data-driven insights.
              </motion.p>
            </div>
            <div className="flex items-center justify-center">
              <LayoutGrid />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* (Removed standalone FAQ section) */}
    
      {/* Contact & FAQ Section - Two Column Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="rounded-xl border border-gray-700 p-6 bg-black">
              <h2 className="text-xl font-bold text-white mb-6">Contact Us</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                    placeholder="First Name"
                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    suppressHydrationWarning={true}
                  />
                    <input
                      type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    suppressHydrationWarning={true}
                    />
                  </div>
                  <input
                    type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  suppressHydrationWarning={true}
                />
                <textarea rows={4} placeholder="Message" className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white" suppressHydrationWarning={true}></textarea>
                <Button variant="gradient" className="w-full bg-green-500 text-white hover:bg-green-600">Send Message</Button>
              </form>
                </div>
            {/* FAQ */}
                <div>
              <h2 className="text-xl font-bold text-white mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {q: 'What is ADmyBRAND AI Suite?', a: 'ADmyBRAND AI Suite is a comprehensive AI-powered marketing platform that automates campaigns, creates content, and provides predictive analytics to help businesses scale their marketing efforts.'},
                  {q: 'Can I try the platform for free?', a: 'Yes, we offer a 14-day free trial for all new users. No credit card required to start your trial.'},
                  {q: 'Is my data secure and private?', a: 'Absolutely. We use industry-standard encryption (AES-256) and never share your data with third parties. All data is stored in secure, SOC 2 compliant servers.'},
                  {q: 'Can I cancel my subscription anytime?', a: 'Yes, you can cancel your subscription at any time with no penalty. You\'ll continue to have access until the end of your billing period.'},
                  {q: 'Do you offer customer support?', a: 'Yes, we provide email support for all plans, priority support for Pro plans, and dedicated support for Enterprise customers.'},
                  {q: 'Can I integrate with my existing tools?', a: 'Yes, we integrate with 200+ popular marketing tools including Google Ads, Facebook Ads, Mailchimp, HubSpot, and many more.'},
                  {q: 'How does the AI content generation work?', a: 'Our AI analyzes your brand voice, target audience, and campaign goals to generate personalized copy, images, and videos that resonate with your audience.'},
                  {q: 'What makes ADmyBRAND different from other tools?', a: 'Unlike other tools, we combine AI content creation, predictive analytics, and campaign automation in one platform, making it easier to scale your marketing efforts.'}
                ].map((item, idx) => (
                  <details key={idx} className="border-b border-gray-700 pb-4">
                    <summary className="cursor-pointer text-white font-medium select-none">{item.q}</summary>
                    <div className="mt-2 text-gray-400 text-sm">{item.a}</div>
                  </details>
                ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* (Remove section with Ready to build your future? and Start Your Free Trial/Explore Plans buttons) */}

      <Footer />
    </main>
    </>
  );
}