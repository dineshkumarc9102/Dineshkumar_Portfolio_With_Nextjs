import { experienceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Experience = () => {
    return (
        <motion.div
            id='experience'
            className='w-full px-[8%] md:px-[12%] py-16 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >

            {/* Heading */}
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Career Path
            </h4>

            <h2 className='text-center text-4xl md:text-5xl font-Ovo'>
                My Experience
            </h2>

            {/* TREE */}
            <div className="relative mt-16">

                {/* TRUNK */}
                <div className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full bg-gray-300 dark:bg-gray-600 md:-translate-x-1/2"></div>

                {experienceData.map((item, index) => {

                    const isCurrent = index === 0

                    return (
                        <motion.div
                            key={index}
                            className="relative mb-16"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >

                            {/* NODE */}
                            <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 md:w-5 md:h-5 bg-black dark:bg-white rounded-full md:-translate-x-1/2 border-4 border-white dark:border-black"></div>

                            {/* BRANCH */}
                            <div className="absolute left-4 md:left-1/2 top-8 w-12 md:w-20 h-[2px] bg-gray-400 dark:bg-gray-500"></div>

                            {/* CARD */}
                            <div className="ml-16 md:ml-0 md:flex md:justify-end">

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`
                                        group relative
                                        w-[80%] md:w-[35%]
                                        rounded-2xl cursor-pointer
                                        border border-gray-400
                                        overflow-hidden duration-500
                                        hover:bg-lightHover hover:shadow-black
                                        dark:hover:bg-darkHover dark:hover:shadow-white
                                        ${isCurrent ? "ring-2 ring-black dark:ring-white" : ""}
                                    `}
                                >

                                    {/* Animated circles (from your old design) */}
                                    <div className="absolute w-24 h-24 rounded-full bottom-32 right-16 duration-500 group-hover:translate-x-24 group-hover:w-12 group-hover:h-12"></div>
                                    <div className="absolute w-20 h-20 rounded-full top-20 right-16 duration-500 group-hover:translate-y-12 group-hover:-translate-x-32 group-hover:w-12 group-hover:h-12"></div>

                                    <div className="px-6 py-8 md:px-8 md:py-10 flex flex-col items-start">

                                        <Image
                                            src={item.icon}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="mb-3"
                                        />

                                        <h3 className="text-base md:text-lg font-semibold text-gray dark:text-white">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm md:text-base text-gray-700 dark:text-white/80">
                                            {item.company}
                                        </p>

                                        <p className="text-xs md:text-sm text-gray-500 my-1">
                                            {item.duration}
                                        </p>

                                        <p className="text-xs md:text-sm text-gray dark:text-white leading-5 md:leading-6">
                                            {item.description}
                                        </p>

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