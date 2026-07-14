import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

import { educationData } from '@/assets/assets'
import { Building, Calendar, Star } from "lucide-react"


const Education = () => {
  return (
    <motion.div
      id='education'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* ✅ Heading */}
      <motion.h4
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Background
      </motion.h4>

      <motion.h2
        className='text-center text-3xl sm:text-5xl font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My Academic
      </motion.h2>


      {/* ✅ Cards */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >

        {educationData.map(({ icon, title, university, duration, score }, index) => (

          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="group relative rounded-2xl p-6 cursor-pointer
            backdrop-blur-xl bg-white/50 dark:bg-white/5
            border border-gray-200 dark:border-white/10
            shadow-lg hover:shadow-xl
            transition duration-300
            hover:bg-lightHover hover:shadow-black
            dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            

            {/* ✅ Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl 
            bg-white dark:bg-white p-2 mb-4 shadow-sm">
              <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            


            {/* ✅ Title */}
            <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>


            {/* ✅ University */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/70 mt-1">
              {university}
            </div>


            {/* ✅ Duration */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <Calendar className="w-3.5 h-3.5 group-hover:scale-110 transition" />
              {duration}
            </div>


            {/* ✅ Score */}
            <div className="flex items-center gap-2 mt-3 text-sm text-gray-700 dark:text-white/80">
              <Star className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition" />
              {score}
            </div>

          </motion.div>

        ))}

      </motion.div>

    </motion.div>
  )
}

export default Education
