"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FolderKanban, Briefcase, Code } from "lucide-react";

import dynamic from "next/dynamic";

const OrbitSkills = dynamic(() => import("./OrbitSkills"), {
  ssr: false,
});


// ✅ Counter Component
const Count = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const step = 16;
    const increment = end / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [visible, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-6 sm:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >

      {/* ✅ Title */}
      <motion.h4 className="text-center mb-2 text-lg font-Ovo">
        Introduction
      </motion.h4>

      <motion.h2 className="text-center text-3xl sm:text-5xl font-Ovo">
        About Me
      </motion.h2>


      {/* ✅ MAIN LAYOUT */}
      <motion.div
        className="flex flex-col lg:flex-row gap-12 items-start my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >

        {/* ✅ LEFT → IMAGE */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <div className="relative group max-w-xs sm:max-w-sm">

            <Image
              src={assets.new_profile_image}
              alt="Profile"
              width={400}
              height={400}
              className="w-full rounded-3xl transition-all duration-300 group-hover:scale-105"
            />


            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl 
            bg-gradient-to-tr from-blue-500/30 via-transparent to-purple-500/30
            opacity-0 group-hover:opacity-100 transition blur-xl" />
          </div>
        </div>


        {/* ✅ RIGHT → TEXT + QUICK OVERVIEW */}
        <div className="flex-1">

          {/* ✅ About Text */}
          <p className="mb-6 text-sm sm:text-base text-justify font-Ovo leading-relaxed text-gray-700 dark:text-white/80">
            I'm Dinesh Kumar, a Front-End Developer and UI/UX enthusiast passionate about
            building scalable, high-performance web applications with modern design principles.
            Currently at TVS Motor Company, I contribute to digital transformation initiatives
            involving SAP systems, enterprise dashboards, and data-driven solutions.

            <br /><br />

            I specialize in React, Tailwind CSS, and full-stack dashboard development, with
            hands-on experience integrating Power BI and optimizing user workflows. I focus on
            transforming complex business requirements into intuitive, impactful user experiences.
          </p>


          {/* ✅ Quick Overview */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mt-6 justify-center">
            <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-xs sm:text-sm">
              <FolderKanban className="w-4 h-4 text-purple-500" />
              <span><Count end={5} />+ Projects</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-xs sm:text-sm">
              <Briefcase className="w-4 h-4 text-pink-500" />
              <span><Count end={7} />+ Months of Experience</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-xs sm:text-sm">
              <Code className="w-4 h-4 text-emerald-500" />
              <span><Count end={15} />+ Tech</span>
            </div>

          </div>

        </div>

      </motion.div>


      {/* ✅ Skills Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-Ovo mb-10">
          Skills & Tools
        </h3>

        {/* ✅ ORBIT WRAPPER FIX */}
        <div className="relative flex justify-center items-center h-[450px] sm:h-[850px] overflow-visible">
          <OrbitSkills />

        </div>
      </div>

    </motion.div>
  );
};

export default About;
