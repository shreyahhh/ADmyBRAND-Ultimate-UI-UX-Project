"use client"

import React from 'react';

const CircularLayout = () => {
  const targetGroups = [
    { id: 1, text: "Kids", icon: "👶" },
    { id: 2, text: "Homemakers", icon: "👩‍🍳" },
    { id: 3, text: "School Students", icon: "🎒" },
    { id: 4, text: "College Students", icon: "🎓" },
    { id: 5, text: "Working Women", icon: "👩‍💼" },
    { id: 6, text: "Family", icon: "👨‍👩‍👧‍👦" },
    { id: 7, text: "High Income", icon: "💰" },
    { id: 8, text: "Middle Class", icon: "🏠" },
    { id: 9, text: "Tier 2 & 3 Towns", icon: "🏘️" }
  ];

  // Calculate positions for circles around the center
  const getCirclePosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const centerRadius = 120; // Distance from center
  const circleSize = 80; // Size of each target group circle

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8">
      {/* Center Circle */}
      <div className="absolute z-10 w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
        <div className="text-center text-white p-4">
          <h3 className="text-sm font-bold leading-tight">
            Book Cost Effective Ads for Your
          </h3>
          <p className="text-lg font-extrabold mt-1">Target Group</p>
        </div>
      </div>

      {/* Surrounding Circles */}
      {targetGroups.map((group, index) => {
        const position = getCirclePosition(index, targetGroups.length, centerRadius);
        const colors = [
          'from-blue-500 to-blue-600',
          'from-cyan-500 to-cyan-600', 
          'from-purple-500 to-purple-600',
          'from-blue-600 to-purple-600',
          'from-indigo-500 to-indigo-600',
          'from-purple-600 to-pink-600',
          'from-cyan-400 to-blue-500',
          'from-blue-500 to-purple-500',
          'from-indigo-400 to-purple-500'
        ];

        return (
          <div
            key={group.id}
            className={`absolute w-20 h-20 bg-gradient-to-br ${colors[index]} rounded-full flex flex-col items-center justify-center text-white shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          >
            <div className="text-lg mb-1 group-hover:scale-125 transition-transform duration-300">
              {group.icon}
            </div>
            <div className="text-[10px] font-bold text-center leading-tight px-1">
              {group.text}
            </div>
            {/* Circle number */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-gray-800 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
              {String(group.id).padStart(2, '0')}
            </div>
          </div>
        );
      })}

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
      <div className="absolute top-8 right-8 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-6 left-8 w-4 h-4 bg-pink-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 bg-cyan-400 rounded-full opacity-60"></div>
    </div>
  );
};

export default CircularLayout;
