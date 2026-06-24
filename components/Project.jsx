import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from "lucide-react"

import { projectData } from '@/assets/assets'


const Project = () => {
  return (
    <motion.div
      id='project'
      className='w-full px-[6%] sm:px-[10%] md:px-[12%] py-16 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >

      {/* ✅ Heading */}
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Work & Experience
      </h4>

      <h2 className='text-center text-3xl sm:text-5xl font-Ovo'>
        My Projects
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70'>
        Explore my projects showcasing real-world applications and UI design.
      </p>


      {/* ✅ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {projectData.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl overflow-hidden
            border border-gray-200 dark:border-white/10
            backdrop-blur-xl bg-white/50 dark:bg-white/5
            shadow-lg hover:shadow-xl transition duration-300"
          >

            {/* ✅ Image */}
            <div className="relative w-full h-48">
              <Image
                src={item.bgImage}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>


            {/* ✅ Content */}
            <div className="p-4">

              <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-white/70 mt-1">
                {item.domain}
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </div>

            </div>


            {/* ✅ Hover Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 
              bg-white/90 dark:bg-black/85
              transition duration-300 p-5 flex flex-col"
            >

              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-700 dark:text-white/80">
                {item.description}
              </p>

              {/* ✅ Button */}
              <div className="mt-auto">
                <Link
                  target="_blank"
                  href={item.link || "#"}
                  className="inline-block text-sm px-4 py-2 rounded-lg
                  bg-black text-white dark:bg-white dark:text-black"
                >
                  View →
                </Link>
              </div>

            </div>

          </motion.div>

        ))}

      </div>


      {/* ✅ GitHub Button */}
      <div className="text-center mt-16">
        <a
          href="https://github.com/dineshkumarc9102"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full
          bg-gray-200 dark:bg-white/10 
          border border-gray-200 dark:border-white/10
          text-gray-800 dark:text-white
          hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10
          transition duration-300"
        >
          View More Projects →
        </a>
      </div>

    </motion.div>
  )
}

export default Project
