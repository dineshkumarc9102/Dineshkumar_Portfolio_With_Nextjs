import { assets, infoList, languageData, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1 }}
    >

        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay:0.3 }}
        >
            Introduction
        </motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay:0.5 }}
        >
            About Me
        </motion.h2>

        <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, }}
        >
            <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
            initial={{scale:0.9, opacity: 0}}
            whileInView={{scale:1, opacity: 1}}
            transition={{duration: 0.6, }}
            >
                <Image src={assets.user_img} alt='' className='w-full rounded-3xl' />
            </motion.div>

            <motion.div className='flex-1'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay:0.6 }}
            >
                <p className='mb-10 max-w-2xl text-justify font-Ovo'>A composed and proactive professional with sharp work ethic, adept at prioritizing tasks and overcoming challenges swiftly. Strong in time management, problem-solving, etc... 
                    Thrives in collaboration and under pressure. Meticulous attention to detail ensures precision. Experienced leader driving innovation and achieving collective goals.</p>

                <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay:1 }}
                >
                    
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <motion.li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                        key={index} 
                        whileHover={{scale: 1.05}}
                        >
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay:1.3 }}
                >
                    Skills
                </motion.h4>

                <motion.ul className='flex items-center gap3 sm:gap-5'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay:1.5 }}
                >
                    {languageData.map((language, index) => (
                        <motion.li className='flex items-center justify-center w-12 sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                        key={index}
                        whileHover={{scale: 1.1}}
                            >
                            <Image src={language} alt='language' className='w-5 sm:w-7'/>
                        </motion.li>
                    ))}
                </motion.ul>
                
                <motion.h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay:1.3 }}
                >
                    Tools I Use
                </motion.h4>

                <motion.ul className='flex items-center gap3 sm:gap-5'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay:1.5 }}
                >
                    {toolsData.map(({black, white}, index) => (
                        <motion.li className='flex items-center justify-center w-12 sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                        key={index}
                        whileHover={{scale: 1.1}}
                        >
                            <Image src={isDarkMode ? white : black} alt='Tool' className='w-5 sm:w-7'/>
                        </motion.li>
                    ))}
                </motion.ul>

            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default About