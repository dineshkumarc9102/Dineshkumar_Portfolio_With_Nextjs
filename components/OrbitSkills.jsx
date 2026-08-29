"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/assets/assets";

const OrbitSkills = ({ isDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  // Screen detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split skills
  const layer1 = skills.slice(0, 8);
  const layer2 = skills.slice(8, 16);
  const layer3 = skills.slice(16);

  // Dynamic radius
  const radius1 = isMobile ? 55 : 150;
  const radius2 = isMobile ? 95 : 240;
  const radius3 = isMobile ? 135 : 330;

  const renderLayer = (items, radius, scale = 1) => {
    return items.map((skill, index) => {
      const angle = (index / items.length) * 2 * Math.PI;

      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      return (
        <motion.div
          key={index}
          className={`
            absolute flex items-center justify-center
            w-9 h-9 sm:w-20 sm:h-20 rounded-full
            backdrop-blur-lg
            border shadow-md cursor-pointer
            ${isDarkMode
              ? "bg-white/10 border-white/10"
              : "bg-white border-purple-200"
            }
          `}
          initial={{ x, y, scale }}
          animate={{ x, y, scale }}
          whileHover={{
            scale: scale * 1.25,
            y: y - 10,
            rotate: [0, -8, 8, 0],
            borderColor: "#a855f7",
            backgroundColor: "rgba(168,85,247,0.12)",
            boxShadow: [
              "0 0 0px rgba(168,85,247,0)",
              "0 0 40px rgba(168,85,247,.8)",
              "0 0 70px rgba(99,102,241,.7)",
            ],
            transition: {
              duration: 0.45,
              ease: "easeOut",
            },
          }}
          onHoverStart={() => setActiveSkill(skill)}
          onHoverEnd={() => setActiveSkill(null)}
          onTap={() =>
            setActiveSkill(
              activeSkill?.name === skill.name ? null : skill
            )
          }
        >
          <Image
            src={isDarkMode ? skill.iconDark : skill.iconLight}
            alt={skill.name}
            width={24}
            height={24}
            className="w-5 h-5 sm:w-7 sm:h-7"
          />
        </motion.div>
      );
    });
  };

  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        min-h-[360px]
        sm:min-h-[700px]
        overflow-visible
        px-2
        sm:px-4
      "
    >
      {/* Rings */}
      <div className="absolute w-[110px] h-[110px] sm:w-[300px] sm:h-[300px] border border-white/100 rounded-full" />
      <div className="absolute w-[190px] h-[190px] sm:w-[480px] sm:h-[480px] border border-white/100 rounded-full" />
      <div className="absolute w-[270px] h-[270px] sm:w-[650px] sm:h-[650px] border border-white/100 rounded-full" />

      {/* Center Circle */}
      <motion.div
        className={`
    w-[70px] h-[70px] sm:w-[140px] sm:h-[140px]
    rounded-full
    flex items-center justify-center
    backdrop-blur-xl
    border
    text-center
    px-2
    ${isDarkMode
            ? "bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-fuchsia-500/20 border-purple-400/30"
            : "bg-white border-purple-300 shadow-xl"
          }
  `}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: activeSkill
            ? [
              "0 0 10px rgba(168,85,247,0.2)",
              "0 0 30px rgba(168,85,247,0.5)",
              "0 0 10px rgba(168,85,247,0.2)",
            ]
            : undefined,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <motion.div
          key={activeSkill?.name || "TECH STACK"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col items-center justify-center leading-tight"
        >
          {!activeSkill ? (
            <>
              <p
                className={`font-bold text-[10px] sm:text-lg leading-tight ${isDarkMode ? "text-purple-300" : "text-purple-700"
                  }`}
              >
                TECH STACK
              </p>
            </>
          ) : (
            <>
              <p
                className={`font-bold text-[9px] sm:text-base text-center leading-tight break-words max-w-[80px] sm:max-w-none ${isDarkMode ? "text-white" : "text-gray-800"
                  }`}
              >
                {activeSkill.name}
              </p>

              <p className="text-[7px] sm:text-xs text-purple-400 font-medium">
                {activeSkill.category}
              </p>

              <span
                className={`
            mt-1 px-2 py-0.5 rounded-full
            text-[6px] sm:text-[10px]
            font-semibold
            ${activeSkill.level === "Advanced"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-green-500/20 text-green-400"
                  }
          `}
              >
                {activeSkill.level}
              </span>
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Skill Layers */}
      {renderLayer(layer1, radius1, 1)}
      {renderLayer(layer2, radius2, 0.95)}
      {renderLayer(layer3, radius3, 0.88)}
    </div>
  );
};

export default OrbitSkills;
