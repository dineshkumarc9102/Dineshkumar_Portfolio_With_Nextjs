import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { Download } from "lucide-react"
import { assets } from '@/assets/assets'
import ShinyText from './ShinyText'
import GlitterWrap from './GlitterWrap'

const Header = ({ isDarkMode }) => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>

      {/*Particle Background */}
      {/*Glitter Warp Background */}
      {isDarkMode && (
        <div className="absolute inset-0 z-0">
          <GlitterWrap
            particleCount={500}
            color1="#ffffff"
            color2="#ffffff"
            color3="#ffffff"
            speed={3}
            density={100}
            starSize={20}
            focalDepth={10}
            turbulence={0}
            brightness={100}
            glitterIntensity={3}
            trailAmount={50}
            reverse={false}
          />
        </div>
      )}


      {/* Header Content */}
      <div className='relative z-10 w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4'>

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image
            src={assets.new_profile}
            alt='Profile'
            className='rounded-full w-36 sm:w-40'
          />
        </motion.div>


        {/* Intro */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-xl md:text-2xl font-Ovo'
        >
          Hi! I'm
        </motion.h3>


        {/* Name */}
        <motion.h1
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-2xl sm:text-3xl md:text-5xl font-Ovo'
        >
          <ShinyText text="DINESH KUMAR" speed={5} isDarkMode={isDarkMode} />
        </motion.h1>


        {/* Role */}

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='text-xl sm:text-3xl lg:text-5xl font-Ovo'
        >
          <ShinyText
            text="Data Analyst | FrontEnd Developer | Digital Transformation | SAP Business Processes"
            className="text-sm sm:text-xl lg:text-xl"
            speed={5} isDarkMode={isDarkMode}
          />
        </motion.p>
        {/* 
        <motion.h1
          initial={{ y: -30, opacity: 0.6 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className='text-xs sm:text-base lg:text-lg text-gray-500 dark:text-white/60 leading-tight'
        >
          <ShinyText
            text="Building Data-Driven Web Applications"
            className="text-xs sm:text-base lg:text-lg text-gray-500 dark:text-white/60"
          />
        </motion.h1> */}


        {/* ================= Social Links ================= */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex justify-center items-center gap-8 sm:gap-10 flex-wrap mt-10"
        >

          {/* Gmail */}
          <div className="relative w-14 h-16 group overflow-hidden text-center">
            <div
              className="absolute top-0 left-0 w-14 h-14 rounded-full
                        bg-[#CEB3DB] flex items-center justify-center
                        transition-all duration-300
                        group-hover:scale-75 group-hover:origin-top"
            >
              <a href="mailto:dineshkumarc9102@gmail.com">
                <Image src={assets.gmail} alt="Gmail" className="w-6" />
              </a>
            </div>

            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                        text-xs font-medium whitespace-nowrap
                        text-gray-700 dark:text-white/70
                        transition-all duration-300
                        group-hover:bottom-0"
            >
              Gmail
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative w-14 h-16 group overflow-hidden text-center">
            <div
              className="absolute top-0 left-0 w-14 h-14 rounded-full
                        bg-[#0077B5] flex items-center justify-center
                        transition-all duration-300
                        group-hover:scale-75 group-hover:origin-top"
            >
              <a
                href="https://www.linkedin.com/in/dinesh-kumarc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={assets.linkedin} alt="LinkedIn" className="w-6" />
              </a>
            </div>

            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                        text-xs font-medium whitespace-nowrap
                        text-gray-700 dark:text-white/70
                        transition-all duration-300
                        group-hover:bottom-0"
            >
              LinkedIn
            </span>
          </div>

          {/* GitHub */}
          <div className="relative w-14 h-16 group overflow-hidden text-center">
            <div
              className="absolute top-0 left-0 w-14 h-14 rounded-full
                        bg-gray-200 dark:bg-gray-200 flex items-center justify-center
                        transition-all duration-300
                        group-hover:scale-75 group-hover:origin-top"
            >
              <a
                href="https://github.com/dineshkumarc9102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={assets.github} alt="GitHub" className="w-6" />
              </a>
            </div>

            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                        text-xs font-medium whitespace-nowrap
                        text-gray-700 dark:text-white/70
                        transition-all duration-300
                        group-hover:bottom-0"
            >
              GitHub
            </span>
          </div>
        </motion.div>

        

        {/* Resume Button */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Dinesh_Kumar_Resume.pdf"
          download
          className='group flex items-center gap-2 px-8 py-3 rounded-full
          bg-gray-200 dark:bg-white/10
          border border-gray-200 dark:border-white/10
          text-gray-800 dark:text-white
          backdrop-blur-md
          hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10
          transition duration-300 hover:scale-105 mt-6'
        >

          Resume
          <Download className="w-4 h-4 group-hover:translate-y-1 transition" />

        </motion.a>
      </div >

    </div >

  )
}

export default Header
