"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Data for the feature cards
const features: { title: string; description: string }[] = [
    { title: "Creative Studio", description: "AI that writes ad copy, blog posts, and social media updates in any tone." },
    { title: "Audience Forecaster", description: "Analyzes market data to predict which customer segments will be most valuable next quarter." },
    { title: "Campaign Autopilot", description: "Manages and optimizes your ad spend across Google, Facebook, and TikTok automatically." },
    { title: "SEO Strategist", description: "Uncovers competitor keywords and generates a content plan to rank #1." },
    { title: "Brand Sentinel", description: "Monitors social media for mentions of your brand and uses AI to analyze sentiment in real-time." },
    { title: "Insight Hub", description: "A central dashboard that uses AI to translate complex analytics into plain-English insights." },
];

const cardVariants: Variants = {
    offscreen: {
        y: 200,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        rotate: -5,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

function FeatureCard({ title, description }: { title: string; description: string; }) {
    return (
        <motion.div
            className="relative h-[400px] flex items-center justify-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{ clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`, background: 'linear-gradient(306deg, #ffffff, #f8f9fa)' }} />
            <motion.div 
                variants={cardVariants} 
                className="w-[280px] h-[380px] bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col justify-center items-center text-center p-6 border border-gray-200"
                style={{ transformOrigin: "10% 60%" }}
            >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
        </motion.div>
    );
}

export default function AIFeaturesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {features.map((feature) => (
                <FeatureCard {...feature} key={feature.title} />
            ))}
        </div>
    );
} 