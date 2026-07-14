import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { ChevronUp } from "lucide-react"

const Footer = () => {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className='mt-20'>


      {/* ✅ Footer Content */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-300 mx-[10%] mt-12 py-6'>

        <p className="text-gray-600 dark:text-white/70">
          © {new Date().getFullYear()} Dinesh Kumar.
        </p>


        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-10">


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
            bg-gray-200 to-black text-white
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
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
      w-10 h-10
      rounded-full
      bg-black dark:bg-white
      text-white dark:text-black
      flex items-center justify-center
      shadow-md
      hover:scale-110
      transition-all duration-300
    "
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>

        </div>
      </div>
    </div >
  )
}

export default Footer
