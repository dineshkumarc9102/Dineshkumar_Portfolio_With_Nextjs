import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

import { assets, languageData, toolsData } from '@/assets/assets'
import GlassSkillsIcons from './GlassSkillsIcons'
import { Briefcase, FolderKanban, Building2 } from "lucide-react"


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


          {/* ✅ Overview */}
          <motion.h4
            className='mt-6 mb-4 sm:my-6 text-gray-700 font-Ovo dark:text-white/80'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Quick Overview
          </motion.h4>


          {/* ✅ Highlights */}
          <motion.div
            className="flex flex-wrap gap-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >

            {/* Experience */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl 
              bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white text-sm 
              backdrop-blur-md border border-gray-200 dark:border-white/10
              shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10
              transition duration-300"
            >
              <Briefcase className="w-4 h-4 text-blue-500" />
              <span>Less than 1 Year Experience</span>
            </motion.div>


            {/* Company */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl 
              bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white text-sm 
              backdrop-blur-md border border-gray-200 dark:border-white/10
              shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10
              transition duration-300"
            >
              <Building2 className="w-4 h-4 text-green-500" />
              <span>TVS Motor Company</span>
            </motion.div>


            {/* Projects */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl 
              bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white text-sm 
              backdrop-blur-md border border-gray-200 dark:border-white/10
              shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-blue-500/10
              transition duration-300"
            >
              <FolderKanban className="w-4 h-4 text-purple-500" />
              <span>5+ Projects Built</span>
            </motion.div>

          </motion.div>


          {/* ✅ Skills */}
          <motion.h4
            className='mt-6 mb-4 sm:my-6 text-gray-700 font-Ovo dark:text-white/80'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Skills
          </motion.h4>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <GlassSkillsIcons
              items={languageData.map(item => ({
                icon: item.icon,
                name: item.name
              }))}
              isDarkMode={isDarkMode}
            />
          </motion.div>


          {/* ✅ Tools */}
          <motion.h4
            className='mt-6 mb-4 sm:my-6 text-gray-700 font-Ovo dark:text-white/80'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Tools I Use
          </motion.h4>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <GlassSkillsIcons
              items={toolsData.map(item => ({
                icon: isDarkMode ? item.iconWhite : item.iconBlack,
                name: item.name
              }))}
              isDarkMode={isDarkMode}
            />
          </motion.div>

        </motion.div>

      </motion.div>

    </motion.div>
  )
}

export default About
