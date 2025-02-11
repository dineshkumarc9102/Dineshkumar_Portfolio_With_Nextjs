import { assets, projectData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

const Project = ({ isDarkMode }) => {
  return (
    <motion.div id='project' className='w-full flex flex-col items-center px-[5%] md:px-[10%] lg:px-[15%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Work & Experience
      </motion.h4>

      <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Welcome to my portfolio! Explore a collection of projects showcasing my expertise in technology.
      </motion.p>

      <motion.div 
          className="flex flex-wrap justify-center gap-5 my-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
      >
        {projectData.map(({title, bgImage, domain, date, description, link}, index) => (
          <motion.div 
            key={index} 
            className="flex justify-center items-center aspect-square rounded-lg cursor-pointer group duration-300 h-96 w-full max-w-xs [perspective:1000px]"
            initial={{scale:0.8, opacity: 0}}
            whileInView={{scale:1, opacity: 1}}
            transition={{duration: 0.9, }}
          >
          {/* Front Side*/}
          <div className="absolute duration-1000 w-11/12 h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div 
                  className="border border-gray-500 rounded-md absolute  left-1/2 -translate-x-1/2 py-3 px-5 duration-500 absolute w-11/12 h-full rounded-xl bg-cover bg-center p-6 text-white [backface-visibility:hidden]" 
                  style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                  <div className="flex flex-col h-full ">
                      <div className="mt-10 text-3xl font-semibold text-center">{title}</div>
                      <p className="mt-auto text-sm opacity-75">Hover to know more!</p>
                  </div>
              </div>
      
              {/* Back Side */}
              <div className="absolute w-11/12 h-full rounded-xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-6 text-white shadow-[0_0_30px_rgba(79,70,229,0.15)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full">
                      {/* <div className="text-base font-bold mb-4 text-black"></div> */}
                      <p className="text-lg">{domain}</p>
                      <p className="text-sm text-gray-300">{date}</p>
                      <p className="mt-4 text-base text-start">{description}</p>
                      <div className="flex justify-between items-center mt-auto">
                          <Link 
                              target="_blank" 
                              href={link || "#"} 
                              className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition"
                          >
                              Visit
                          </Link>
                          <span className="text-3xl">✨</span>
                      </div>
                  </div>
              </div>
          </div>
      </motion.div>
      
        ))}
      </motion.div>

      <motion.a
        target="_blank"
        href="https://github.com/dineshkumarc9102"
        className="w-max flex items-center justify-center gap-2 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="relative inline-block group">
          <button className="text-sm font-semibold rounded-xl transition-all duration-300">
            <span className="flex justify-center items-center gap-2">
              More <Image src={isDarkMode ? assets.rigth_arrow_white : assets.right_arrow} alt="" className="w-4" />
            </span>
         </button>

          {/* Tooltip */}
          <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out w-72">
            <div className="relative p-4 bg-darkHover dark:bg-lightHover backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
              <p className="text-sm text-gray-300 text-center dark:text-black">This will redirect to my GitHub profile.</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50"></div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-darkHover dark:bg-lightHover rotate-45 border-r border-b border-white/10"></div>
            </div>
          </div>
        </div>

        {/* Show more  <Image src={isDarkMode ? assets.rigth_arrow_white : assets.right_arrow} alt='' className='w-4'/> */}
      </motion.a>
    </motion.div>
  );
};

export default Project;






















// import { assets, projectData } from '@/assets/assets'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { motion } from "motion/react"

// const Project = ({isDarkMode}) => {
//   return (
//     <motion.div id='project' className='w-full px-[15%] py-10 scroll-mt-20'
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{duration: 1 }}
//     >
//         <motion.h4 className='text-center mb-2 text-lg font-Ovo'
//         initial={{y:-20,  opacity: 0}}
//         whileInView={{y: 0, opacity: 1}}
//         transition={{delay: 0.3, duration: 0.5 }}
//         >
//             Work & Experience
//         </motion.h4>

//         <motion.h2 className='text-center text-5xl font-Ovo'
//         initial={{y:-20,  opacity: 0}}
//         whileInView={{y: 0, opacity: 1}}
//         transition={{delay: 0.5, duration: 0.5 }}
//         >
//             My Projects
//         </motion.h2>
        
//         <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
//         initial={{opacity: 0}}
//         whileInView={{opacity: 1}}
//         transition={{delay: 0.7, duration: 0.5 }}
//         >
//             Welcome to my portfolio! Explore a collection of projects showcasing my expertise in technology.
//         </motion.p>

//         <motion.div className='grid grid-cols-auto my-10 gap-5 dark:text-black'
//         initial={{opacity: 0}}
//         whileInView={{opacity: 1}}
//         transition={{delay: 0.9, duration: 0.6 }}
//         >
//             {projectData.map((project, index) => (
//                 <motion.div 
//                 className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border border-gray-500 relative duration-300'
//                 key={index} 
//                 style={{backgroundImage: `url(${project.bgImage})`,backgroundSize: 'cover', backgroundPosition: 'center',}}
//                 whileHover={{scale: 1.05}}
//                 transition={{ duration: 0.3}}
//                 >
//                     <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 duration-500 group-hover:bottom-7'>
//                     <div>
//                         <h2 className='font-semibold text-base'>{project.title}</h2>
//                         <p className='text-sm text-gray-700 mt-1'>{project.description}</p>
//                     </div>
//                     <Link
//                      target='_blank'
//                      href={project.link || "#"}
//                      className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition mt-2"
//                     >
//                        <Image src={assets.send_icon} alt="send" className="w-5" />
//                     </Link>
//                     </div>
//                 </motion.div>
//             ))}
//         </motion.div>
//         <motion.a target='_blank' href="https://github.com/dineshkumarc9102" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover '
//         initial={{opacity: 0}}
//         whileInView={{opacity: 1}}
//         transition={{delay: 1.1, duration: 0.5 }}
//         >
//             Show more <Image src={isDarkMode ? assets.rigth_arrow_white : assets.right_arrow} alt='' className='w-4'/></motion.a>
//     </motion.div>
//   )
// }

// export default Project