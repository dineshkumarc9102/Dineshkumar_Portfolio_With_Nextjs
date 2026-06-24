import { experienceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { Building2, Calendar, FileText } from "lucide-react"
import { motion } from "motion/react"

const Experience = () => {
    return (
        <motion.div
            id='experience'
            className='w-full px-[6%] sm:px-[8%] md:px-[12%] py-16 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >

            {/* Heading */}
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Career Path
            </h4>

            <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo'>
                My Experience
            </h2>

            <p className='text-center text-gray-500 dark:text-white/60 mt-2'>
                My professional journey so far
            </p>

            {/* Timeline */}
            <div className="relative mt-16">

                {/* Vertical Line */}
                <div className="absolute left-2 sm:left-4 md:left-1/2 top-0 w-[2px] h-full bg-gray-300 dark:bg-gray-600 md:-translate-x-1/2"></div>

                {experienceData.map((item, index) => {

                    const isCurrent = index === 0

                    return (
                        <motion.div
                            key={index}
                            className="relative mb-16"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >

                            {/* Node */}
                            <div className="absolute left-2 sm:left-4 md:left-1/2 top-6 w-3 h-3 md:w-5 md:h-5 bg-gray-400 dark:bg-gray-500 rounded-full md:-translate-x-1/2 border-4 border-white dark:border-black"></div>

                            {/* Branch */}
                            <div
                                className={`
                                absolute top-8 h-[2px] bg-gray-400 dark:bg-gray-500
                                ${index % 2 === 0
                                        ? "left-2 sm:left-4 md:left-1/2 md:w-20"
                                        : "left-2 sm:left-4 md:right-1/2 md:w-20"
                                    }
                                `}
                            ></div>

                            {/* Card Wrapper */}
                            <div
                                className={`
                                ml-10 sm:ml-16 w-[85%] sm:w-full md:w-1/2
                                ${index % 2 === 0
                                        ? "md:ml-auto md:pl-10"
                                        : "md:mr-auto md:pr-10"
                                    }
                                `}
                            >

                                {/* Card */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`
                                        relative group w-full rounded-2xl
                                        backdrop-blur-xl bg-white/50 dark:bg-white/5
                                        border border-gray-200 dark:border-white/10
                                        shadow-lg hover:shadow-xl
                                        transition duration-300 hover:bg-lightHover hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white
                                        ${isCurrent ? "ring-2 ring-gray-200" : ""}
                                    `}
                                >

                                    {/* Current Dot */}
                                    {isCurrent && (
                                        <span className="absolute top-2 right-2 md:top-4 md:right-4 flex w-2 h-2 md:w-3 md:h-3">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                            <span className="relative inline-flex rounded-full w-full h-full bg-green-500 shadow-sm shadow-green-500/40"></span>
                                        </span>
                                    )}

                                    <div className="px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 flex flex-col items-start">

                                        {/* Company Logo */}
                                        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl 
                                            bg-white dark:bg-white p-2 mb-4 shadow-sm">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={36}
                                                height={36}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
                                            {item.title}
                                        </h3>

                                        {/* Company */}
                                        <div className="flex items-center gap-2 text-sm md:text-base text-gray-700 dark:text-white/80">
                                            {item.company}
                                        </div>

                                        {/* Duration */}
                                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 my-1">
                                            <Calendar className="w-3.5 h-3.5 group-hover:scale-110 transition" />
                                            {item.duration}
                                        </div>

                                        {/* Description */}
                                        <p className="text-xs md:text-sm text-gray-700 dark:text-white/80 leading-5 md:leading-6">
                                            {item.description}
                                        </p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {item.skills?.map((skill, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-1 px-1.5 py-1 rounded-md 
                                                    bg-gray-100 dark:bg-white/10 
                                                    text-[9px] md:text-xs text-gray-700 dark:text-white/80
                                                    border border-gray-200 dark:border-white/10  backdrop-blur-sm"
                                                >
                                                    <Image
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        width={16}
                                                        height={16}
                                                        className="object-contain"
                                                    />
                                                    <span>{skill.name}</span>
                                                </div>
                                            ))}
                                        </div>

                                    </div>

                                </motion.div>

                            </div>

                        </motion.div>
                    )
                })}

            </div>

        </motion.div>
    )
}

export default Experience
