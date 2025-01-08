import { educationData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Education = () => {
  return (
    <motion.div id='education' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1 }}
    >
         <motion.h4 className='text-center mb-2 text-lg font-Ovo'
         initial={{y:-20,  opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{delay: 0.3, duration: 0.5 }}
         >
          Background
        </motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{y:-20,  opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5 }}
        >
          My Academic
        </motion.h2>

        <motion.div className='grid grid-cols-auto gap-6 my-10'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6 }}
        >
             {educationData.map(({icon, title, university, duration, score}, index) => (
              <motion.div className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer  hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white' 
              key={index}
              whileHover={{scale: 1.05}}
              >
                <Image src={icon} alt='' className='w-10 rounded-lg' />
                <h1 className='text-lg my-4 text-gray dark:text-white'>{title}</h1>
                <h2 className='text-lg my-4 text-gray-700 dark:text-white/80'>{university}</h2>
                <h4 className='text-lg my-4 text-gray-500 dark:text-white/80'>{duration}</h4>
                <p className='text-sm text-gray leading-5 dark:text-white'>{score}</p>
              </motion.div>
             ))}
        </motion.div>

    </motion.div>
  )
}

export default Education