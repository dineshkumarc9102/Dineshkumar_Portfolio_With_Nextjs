import { experienceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Experience = () => {
    return (
        <motion.div
            id='experience'
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

            {/* Heading */}
            <motion.h4
                className='text-center mb-2 text-lg font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Career Path
            </motion.h4>

            <motion.h2
                className='text-center text-5xl font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                My Experience
            </motion.h2>

            {/* Timeline */}
            <div className="relative my-16">

                {/* Center Vertical Line */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

                {experienceData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-center mb-12"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="relative w-full max-w-5xl flex">

                            {/* LEFT SIDE CARD */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="group relative w-[45%] rounded-2xl cursor-pointer border border-gray-400 overflow-hidden duration-500 hover:bg-lightHover hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white"
                            >

                                {/* Animated circles */}
                                <div className="absolute w-24 h-24 rounded-full bottom-32 right-16 duration-500 group-hover:translate-x-24 group-hover:w-12 group-hover:h-12"></div>
                                <div className="absolute w-20 h-20 rounded-full top-20 right-16 duration-500 group-hover:translate-y-12 group-hover:-translate-x-32 group-hover:w-12 group-hover:h-12"></div>
                                <div className="px-8 py-10 flex flex-col items-start">

                                    <Image
                                        src={item.icon}
                                        alt="company logo"
                                        width={50}
                                        height={50}
                                        className="mb-3"
                                    />

                                    <h1 className="text-lg font-semibold text-gray dark:text-white">
                                        {item.title}
                                    </h1>

                                    <h2 className="text-gray-700 dark:text-white/80">
                                        {item.company}
                                    </h2>

                                    <h4 className="text-sm text-gray-500 my-2">
                                        {item.duration}
                                    </h4>

                                    <p className="text-sm text-gray dark:text-white text-justify leading-6">
                                        {item.description}
                                    </p>

                                </div>
                            </motion.div>

                            {/* CENTER DOT */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 z-10">
                                <div className="w-6 h-6 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black"></div>
                            </div>

                            {/* EMPTY RIGHT SPACE */}
                            <div className="w-[55%]"></div>

                        </div>

                    </motion.div>
                ))}

            </div>
        </motion.div>
    )
}

export default Experience