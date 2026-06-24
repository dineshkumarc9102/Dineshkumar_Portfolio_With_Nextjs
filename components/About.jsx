import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { assets, languageData, toolsData } from '@/assets/assets'
import GlassSkillsIcons from './GlassSkillsIcons'
import { Briefcase, FolderKanban, Building2 } from "lucide-react"
import {
  frontendData,
  backendData,
  dataData,
  designData,
  platformData
} from '@/assets/assets'
import { useEffect, useRef, useState } from "react";

const Count = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about'
      className='w-full px-6 sm:px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* ✅ Heading */}
      <motion.h4
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className='text-center text-3xl sm:text-5xl font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About Me
      </motion.h2>


      {/* ✅ Main Section */}
      <motion.div
        className='flex flex-col lg:flex-row gap-10 sm:gap-20 items-start my-20 w-full'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* ✅ Profile Image */}
        <motion.div
          className='w-full lg:w-[40%] max-w-xs sm:max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden'
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">

            <Image
              src={assets.new_profile_image}
              alt='Profile'
              className='w-full rounded-3xl transition-all duration-300 group-hover:scale-105'
            />

            {/* Glow Effect */}
            <div className='absolute inset-0 rounded-3xl 
            bg-gradient-to-tr from-blue-500/30 via-transparent to-purple-500/30
            opacity-0 group-hover:opacity-100 transition duration-500 blur-xl' />
          </div>

          {/* ✅ DESKTOP COUNTER */}

          <div className="hidden md:flex flex-col items-center gap-8 mt-20 w-full">

            {/* Projects */}
            <div className="w-full p-10 rounded-2xl 
          bg-gray-100 dark:bg-white/10 
            border border-gray-200 dark:border-white/10 
            backdrop-blur-md text-center shadow-sm">

              <p className="text-8xl font-bold 
               bg-gradient-to-r from-indigo-500 to-purple-500 
               bg-clip-text text-transparent">
                <Count end={5} />+
              </p>

              <p className="text-sm text-gray-500 dark:text-white/60 mt-1">
                Projects Completed
              </p>
            </div>


            {/* Experience */}
            <div className="w-full p-10 rounded-2xl 
           bg-gray-100 dark:bg-white/10 
             border border-gray-200 dark:border-white/10 
             backdrop-blur-md text-center shadow-sm">

              <p className="text-8xl font-bold 
               bg-gradient-to-r from-purple-500 to-pink-500 
               bg-clip-text text-transparent">
                <Count end={7} />+
              </p>

              <p className="text-sm text-gray-500 dark:text-white/60 mt-1">
                Months of Experience
              </p>
            </div>


            {/* Technologies */}
            <div className="w-full p-10 rounded-2xl 
            bg-gray-100 dark:bg-white/10 
              border border-gray-200 dark:border-white/10 
              backdrop-blur-md text-center shadow-sm">

              <p className="text-8xl font-bold 
              bg-gradient-to-r from-green-500 to-emerald-500 
              bg-clip-text text-transparent">
                <Count end={15} />+
              </p>

              <p className="text-sm text-gray-500 dark:text-white/60 mt-1">
                Technologies
              </p>
            </div>
          </div>

        </motion.div>


        {/* ✅ Text Section */}
        <motion.div
          className='flex-1 text-justify'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >

          {/* ✅ Paragraph */}
          <p className='mb-6 sm:mb-10 text-sm sm:text-base font-Ovo leading-relaxed text-gray-700 dark:text-white/80'>
            I'm Dinesh Kumar, a Front-End Developer and UI/UX enthusiast passionate about
            building scalable, high-performance web applications with modern design principles.
            Currently at TVS Motor Company, I contribute to digital transformation initiatives
            involving SAP systems, enterprise dashboards, and data-driven solutions.

            <br /><br />

            I specialize in React, Tailwind CSS, and full-stack dashboard development, with
            hands-on experience integrating Power BI and optimizing user workflows. I focus on
            transforming complex business requirements into intuitive, impactful user experiences.
          </p>

          {/* ✅ Overview (MOBILE ONLY) */}
          <motion.h4
            className='md:hidden mt-6 mb-4 text-gray-700 font-Ovo dark:text-white/80'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Quick Overview
          </motion.h4>


          {/* ✅ Highlights (MOBILE ONLY) */}
          {/* ✅ Highlights (MOBILE ONLY) */}
          <motion.div
            className="md:hidden flex flex-wrap gap-3 mb-6 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >


            {/* Projects */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl 
    bg-gray-100 dark:bg-white/10 text-xs sm:text-sm 
    border border-gray-200 dark:border-white/10"
            >
              <FolderKanban className="w-4 h-4 text-purple-500" />
              <span>
                <Count end={5} />+ Projects
              </span>
            </div>
            {/* Experience */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl 
    bg-gray-100 dark:bg-white/10 text-xs sm:text-sm 
    border border-gray-200 dark:border-white/10"
            >
              <Briefcase className="w-4 h-4 text-blue-500" />
              <span>
                <Count end={7} /> Months Experience
              </span>
            </div>

            {/* Company (no change needed) */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl 
    bg-gray-100 dark:bg-white/10 text-xs sm:text-sm 
    border border-gray-200 dark:border-white/10"
            >
              <Building2 className="w-4 h-4 text-green-500" />
              <span>TVS Motor</span>
            </div>


          </motion.div>
          <div className="space-y-4">

            {/* ✅ Frontend */}
            <motion.h4
              className='mt-6 mb-2 text-gray-700 font-Ovo dark:text-white/80'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Frontend Engineering
            </motion.h4>

            <GlassSkillsIcons
              items={frontendData.map(item => ({
                icon: isDarkMode ? item.iconDark : item.iconLight,
                name: item.name
              }))}
              isDarkMode={isDarkMode}
            />


            {/* ✅ Backend */}
            <motion.h4 className='mt-6 mb-2 text-gray-700 font-Ovo dark:text-white/80'>
              Backend & Programming
            </motion.h4>

            <GlassSkillsIcons
              items={backendData.map(item => ({
                icon: isDarkMode ? item.iconDark : item.iconLight,
                name: item.name
              }))}
              isDarkMode={isDarkMode}
            />


            {/* ✅ Data */}
            <motion.h4 className='mt-6 mb-2 text-gray-700 font-Ovo dark:text-white/80'>
              Data & Analytics
            </motion.h4>

            <GlassSkillsIcons
              items={dataData.map(item => ({
                icon: isDarkMode ? item.iconDark : item.iconLight,
                name: item.name
              }))}
              isDarkMode={isDarkMode}
            />


            {/* ✅ Design */}
            <motion.h4 className='mt-6 mb-2 text-gray-700 font-Ovo dark:text-white/80'>
              Design & UI Tools
            </motion.h4>

            <GlassSkillsIcons
              items={designData.map(item => ({
                icon: isDarkMode ? item.iconDark : item.iconLight,
                name: item.name
              }))}
              isDarkMode={isDarkMode}
            />


            {/* ✅ Platform */}
            <motion.h4 className='mt-6 mb-2 text-gray-700 font-Ovo dark:text-white/80'>
              Platforms & DevOps
            </motion.h4>

            <GlassSkillsIcons
              items={platformData.map(item => ({
                icon: isDarkMode ? item.iconDark : item.iconLight,
                name: item.name
              }))}
              isDarkMode={isDarkMode}
            />

          </div>

        </motion.div>

      </motion.div>

    </motion.div>
  )
}

export default About
