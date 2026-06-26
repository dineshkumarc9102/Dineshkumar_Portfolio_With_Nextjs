import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {

  return (
    <div className='mt-20'>

      {/* ✅ Footer Content */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-300 mx-[10%] mt-12 py-6'>

        <p className="text-gray-600 dark:text-white/70">
          © 2026 Dinesh Kumar. All rights reserved.
        </p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>

          {/* ✅ Gmail */}
          <div className="relative w-14 h-14 group text-center overflow-hidden">

            <li className='flex justify-center items-center w-14 h-14 rounded-full bg-[#CEB3DB] 
            transition-all duration-300 absolute top-0 
            group-hover:scale-[0.7] group-hover:origin-top'>

              <a href="mailto:dineshkumarc9102@gmail.com">
                <Image src={assets.gmail} alt="Gmail" className='w-6' />
              </a>

            </li>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm font-medium
            text-gray-800 dark:text-white whitespace-nowrap
            transition-all duration-300 group-hover:bottom-0">
              Gmail
            </div>

          </div>


          {/* ✅ LinkedIn */}
          <div className="relative w-14 h-14 group text-center overflow-hidden">

            <li className='flex justify-center items-center w-14 h-14 rounded-full bg-[#0077b5] 
            transition-all duration-300 absolute top-0 
            group-hover:scale-[0.7] group-hover:origin-top text-white'>

              <a
                href="https://www.linkedin.com/in/dinesh-kumarc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={assets.linkedin} alt="LinkedIn" className='w-6' />
              </a>

            </li>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm font-medium
            text-gray-800 dark:text-white whitespace-nowrap
            transition-all duration-300 group-hover:bottom-0">
              LinkedIn
            </div>

          </div>


          {/* ✅ GitHub */}
          <div className="relative w-14 h-14 group text-center overflow-hidden">

            <li className='flex justify-center items-center w-14 h-14 rounded-full 
            bg-gradient-to-r from-gray-800 to-black text-white
            transition-all duration-300 absolute top-0 
            group-hover:scale-[0.7] group-hover:origin-top'>

              <a
                href="https://github.com/dineshkumarc9102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={assets.github} alt="GitHub" className='w-6' />
              </a>

            </li>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm font-medium
            text-gray-800 dark:text-white whitespace-nowrap
            transition-all duration-300 group-hover:bottom-0">
              GitHub
            </div>

          </div>

        </ul>

      </div>

    </div>
  )
}

export default Footer
