import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { Download } from "lucide-react"
import { assets } from '@/assets/assets'
import ShinyText from './ShinyText'
import Particles from './Particles'


const Header = ({ isDarkMode }) => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>

      {/* ✅ Particle Background */}
      {isDarkMode && (
        <div className='absolute inset-0 z-0'>
          <Particles
            particleColors={['#ffffff']}
            particleCount={800}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      )}


      {/* ✅ Header Content */}
      <div className='relative z-10 w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4'>

        {/* ✅ Profile Image */}
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


        {/* ✅ Intro */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-xl md:text-2xl font-Ovo'
        >
          Hi! I'm
        </motion.h3>


        {/* ✅ Name */}
        <motion.h2
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-2xl sm:text-3xl md:text-5xl font-Ovo'
        >
          <ShinyText text="Dinesh Kumar" speed={4} isDarkMode={isDarkMode} />
        </motion.h2>


        {/* ✅ Role */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='text-xl sm:text-3xl lg:text-5xl font-Ovo'
        >
          <ShinyText
            text="Product Engineer"
            className="text-xl sm:text-3xl lg:text-5xl"
          />
        </motion.h1>

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
        </motion.h1>


        {/* ✅ Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/DineshKumar_Resume.pdf"
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

      </div>

    </div>
  )
}

export default Header
