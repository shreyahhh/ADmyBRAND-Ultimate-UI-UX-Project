"use client"

import React, { useEffect, useState } from "react"
import { motion, Transition } from "framer-motion"

// Define the type for our items
type LayoutItem = {
  id: number;
  title: string;
  description: string;
  isBrand?: boolean;
};

// Initial data for the grid
const initialItems: LayoutItem[] = [
  { id: 1, title: "ADmyBRAND", description: "The Future of Marketing", isBrand: true },
  { id: 2, title: "Mission", description: "Empower marketers with AI-driven tools" },
  { id: 3, title: "Vision", description: "The future of marketing is intelligent" },
  { id: 4, title: "Values", description: "Innovation, transparency, results" },
];

// Fisher-Yates shuffle algorithm
const shuffle = (array: LayoutItem[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const spring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

export default function LayoutGrid() {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setItems(shuffle([...items]));
    }, 3000); // Shuffle every 3 seconds

    return () => clearTimeout(timeout);
  }, [items]);

  return (
    <ul className="grid grid-cols-2 grid-rows-2 gap-4 w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
      {items.map((item) => (
        <motion.li
          key={item.id}
          layout
          transition={spring}
          className={`flex flex-col items-center justify-center p-4 rounded-2xl text-center ${
            item.isBrand 
              ? 'bg-green-500/20 border border-green-500/30' 
              : 'bg-black border-2 border-green-500 shadow-green-500/30'
          }`}
        >
          <h3 className={`font-bold ${
            item.isBrand 
              ? 'text-green-400 text-2xl md:text-3xl' 
              : 'text-green-400 text-xl md:text-2xl'
          }`}>
            {item.title}
          </h3>
          <p className={`mt-2 text-xs md:text-sm ${
            item.isBrand ? 'text-green-200' : 'text-gray-300'
          }`}>
            {item.description}
          </p>
        </motion.li>
      ))}
    </ul>
  );
}
