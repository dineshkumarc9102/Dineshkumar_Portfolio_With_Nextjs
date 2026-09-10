import React from 'react'
import { motion } from "motion/react"
import { services } from '@/assets/assets'

import dynamic from "next/dynamic";
const OrbitSkills = dynamic(() => import("./OrbitSkills"), {
  ssr: false,
});

const ParticleVoid = dynamic(() => import("./ParticleVoid"), {
  ssr: false,
});

const WhatDo = () => {
    return (
        <motion.div
            id='whatdo'
            className='w-full px-5 sm:px-8 md:px-[12%] py-12 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

            {/* ✅ Heading */}
            {/* <motion.h4
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Background
      </motion.h4> */}

            <motion.h2
                className='text-center text-3xl sm:text-5xl font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                What I Do
            </motion.h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70">
                Turning ideas into impactful digital solutions through technology, analytics, and innovation.
            </p>


            {/* ✅ Cards */}
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-12'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
            >

                {services.map(({ icon: Icon, title, description }, index) => (

                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.04,
                            y: -10,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                        }}
                        className=" group relative rounded-3xl p-5 sm:p-6 md:p-7 bg-white/50 dark:bg-white/5
                                        border border-gray-200 dark:border-purple-500/20
                                        shadow-lg
                                        hover:shadow-2xl
                                        hover:border-purple-400/50
                                        dark:hover:border-purple-500/40
                                        transition-all duration-500
                                        hover:bg-lightHover
                                        dark:hover:bg-darkHover
                                        overflow-hidden "
                    >
                        {/* Number */}
                        <span className="absolute top-4 right-4 text-3xl md:text-4xl font-bold text-black/10 dark:text-white/10">
                            0{index + 1}
                        </span>

                        {/* Icon */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-600 dark:text-white/70">
                            {description}
                        </p>

                    </motion.div>

                ))}

            </motion.div>
            {/* Skills Section */}
            < div className="text-center mt-16" >
                <motion.h3
                    className="text-2xl font-Ovo mb-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    Skills & Tools
                </motion.h3>

                {/* ORBIT WRAPPER FIX */}
                <motion.div
                    className="relative flex justify-center items-center h-[450px] sm:h-[850px] overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.5,
                        }}
                    >
                        <ParticleVoid
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            x={50}
                            y={50}
                            radius={40}
                            density={30}
                            gap={40}
                            particleSize={4}
                            colors={["#ffffff"]}
                            direction="inside"
                            speed={2}
                        />
                    </motion.div>

                    <motion.div
                        className="relative z-10"
                        initial={{
                            opacity: 0,
                            scale: 0.7,
                            rotate: -10,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                    >
                        <OrbitSkills />
                    </motion.div>
                </motion.div>
            </div >

        </motion.div>
    )
}

export default WhatDo
