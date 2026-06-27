"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/assets/assets";
import { RotateCcw } from "lucide-react";


const OrbitSkills = ({ isDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // ✅ Safe screen detection (client only)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Split skills
  const layer1 = skills.slice(0, 8);
  const layer2 = skills.slice(8, 16);
  const layer3 = skills.slice(16);

  // ✅ Dynamic radius
  const radius1 = isMobile ? 60 : 150;
  const radius2 = isMobile ? 110 : 240;
  const radius3 = isMobile ? 160 : 330;

  const renderLayer = (items, radius, scale = 1) => {
    return items.map((skill, index) => {
      const angle = (index / items.length) * 2 * Math.PI;
      const x = Number((radius * Math.cos(angle)).toFixed(2));
      const y = Number((radius * Math.sin(angle)).toFixed(2));

      return (
        <motion.div
          key={index}
          className="absolute flex flex-col items-center justify-center
          w-10 h-10 sm:w-20 sm:h-20 rounded-full
          bg-white/5 dark:bg-white/20 backdrop-blur-lg
          border border-white/10 shadow-md"
          style={{
            transform: `translate(${x}px, ${y}px) scale(${scale})`
          }}
          whileHover={{ scale: 1.2 }}
        >
          <Image
            src={isDarkMode ? skill.iconDark : skill.iconLight}
            alt={skill.name}
            width={18}
            height={18}
            className="sm:w-7 sm:h-7"
          />

          {/* ✅ Hide text on mobile */}
          <span className="hidden sm:block text-[10px] mt-1 text-center">
            {skill.name}
          </span>
        </motion.div>
      );
    });
  };

  return (
    <div
      key={resetKey}
      className="relative flex items-center justify-center w-full h-full overflow-visible px-4"
    >

      {/* ✅ Responsive rings */}
      <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] border border-white/10 rounded-full" />
      <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] border border-white/10 rounded-full" />
      <div className="absolute w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] border border-white/10 rounded-full" />
      {/* ✅ Center */}
      <motion.div
        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center
        bg-purple-500/20 border border-purple-400/30 backdrop-blur
        shadow-[0_0_40px_rgba(168,85,247,0.6)]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-purple-300 text-sm sm:text-xl font-bold">
          Skills
        </span>
      </motion.div>

      {/* ✅ Layers */}
      {renderLayer(layer1, radius1, 1)}
      {renderLayer(layer2, radius2, 0.95)}
      {renderLayer(layer3, radius3, 0.88)}
      <div className="absolute -bottom-10 sm:bottom-4 z-50">
        <button
          onClick={() => setResetKey(prev => prev + 1)}
          className="group flex items-center gap-2 p-3 sm:p-2 rounded-full
        bg-gray-200 dark:bg-white/10
          border border-gray-200 dark:border-white/10
        text-gray-800 dark:text-white
          backdrop-blur-md
          hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10
          transition duration-300 hover:scale-105"
        >
          <RotateCcw className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>
      </div>
    </div>
  );
};

export default OrbitSkills;