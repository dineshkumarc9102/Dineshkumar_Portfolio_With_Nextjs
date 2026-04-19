// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import { motion } from "motion/react"

// const Header = () => {
//   return (
//     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
//         <motion.div
//         initial={{ scale: 0}}
//         whileInView={{ scale: 1}}
//         transition={{duration: 0.8, type: 'spring', stiffness: 100 }}
//         >
//             <Image src={assets.new_profile} alt='' className='rounded-full w-32' />
//         </motion.div>

//         <motion.h3 
//         initial={{y: -20, opacity: 0}}
//         whileInView={{y: 0, opacity: 1}}
//         transition={{duration: 0.6, delay:0.3 }}
//         className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
//         Hi! I'm Dinesh Kumar
//         {/* <Image src={assets.hand_icon} alt='' className='w-6' /> */}
//         </motion.h3> 

//         <motion.h1 
//         initial={{y: -30, opacity: 0}}
//         whileInView={{y: 0, opacity: 1}}
//         transition={{duration: 0.8, delay:0.5 }}
//         className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
//         Web Designer & Developer
//         </motion.h1>

//         <p className='max-w-2xl mx-auto font-Ovo'>

//         </p>

//         <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
//             {/* <motion.a 
//             initial={{y: 30, opacity: 0}}
//             whileInView={{y: 0, opacity: 1}}
//             transition={{duration: 0.6, delay:1 }}
//             href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent '>
//             Contect Me 
//             <Image src={assets.rigth_arrow_white} alt='' className='w-4' />
//             </motion.a> */}

//             <motion.a 
//             initial={{y: 30, opacity: 0}}
//             whileInView={{y: 0, opacity: 1}}
//             transition={{duration: 0.6, delay:1.2 }}
//             href="/DineshKumar_Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white dark:bg-transparent'>
//             My Resume  
//             <Image src={assets.download_icon} alt='' className=' w-5 h-5 motion-safe:animate-bounce'  />
//             </motion.a>

//         </div>

//     </div>
//   )
// }

// export default Header


import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";
import ShinyText from './ShinyText';
import Particles from './Particles';

const Header = ({ isDarkMode }) => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>

      {/* === Particle Background === */}
      {isDarkMode && (
        <div className='absolute inset-0 z-0'>
          <Particles
            particleColors={['#ffffff']}
            particleCount={800}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      )}

      {/* === Header Content === */}
      <div className='relative z-10 w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4'>

        {/* Profile image */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image src={assets.new_profile} alt='' className='rounded-full w-32' />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-xl md:text-2xl font-Ovo'
        >
          Hi! I'm
        </motion.h3>

        <motion.h2
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-2xl sm:text-xl md:text-5xl font-Ovo'
        >
          <ShinyText text="Dinesh Kumar" speed={4} isDarkMode={isDarkMode} />
        </motion.h2>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='text-2xl sm:text-4xl lg:text-5xl font-Ovo'
        >
          <ShinyText text="Web Designer & Developer" speed={4} isDarkMode={isDarkMode} />

        </motion.h1>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/DineshKumar_Resume19426.pdf"
            download
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white dark:bg-transparent'
          >
            My Resume
            <Image src={assets.download_icon} alt='' className='w-5 h-5 motion-safe:animate-bounce' />
          </motion.a>
        </div>

      </div>
    </div>
  );
};

export default Header;
