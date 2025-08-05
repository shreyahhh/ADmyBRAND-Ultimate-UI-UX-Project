"use client"

import React from 'react';
import { motion } from 'framer-motion';

const CircularLayout = () => {
  const targetGroups = [
    { text: "CRM Data" },
    { text: "Social Media Trends" },
    { text: "Ad Performance Metrics" },
    { text: "Competitor Benchmarks" },
    { text: "SEO & Keyword Data" },
    { text: "Customer Behavior Signals" },
    { text: "Market Analytics" },
    { text: "Sales Funnel Data" },
    { text: "Customer Feedback" }
  ];

  // Calculate positions for circles around the center
  const getCirclePosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const centerRadius = 200; // Increased distance from center

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Center Circle */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="absolute z-10 w-48 h-48 bg-black rounded-full flex items-center justify-center shadow-2xl border-4 border-green-500"
      >
        <div className="text-center text-white p-4">
          <p className="text-lg font-extrabold mt-1">AI-Suite</p>
        </div>
      </motion.div>

      {/* Surrounding Circles */}
      {targetGroups.map((group, index) => {
        const position = getCirclePosition(index, targetGroups.length, centerRadius);
        return (
          <motion.div
            key={group.text}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: 'spring' }}
            className="absolute w-28 h-28 bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer border-2 border-gray-200"
            style={{
              // Using motion values for positioning
              x: position.x,
              y: position.y,
            }}
          >
            <div className="text-sm font-bold text-center leading-tight px-2">
              {group.text}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CircularLayout;
