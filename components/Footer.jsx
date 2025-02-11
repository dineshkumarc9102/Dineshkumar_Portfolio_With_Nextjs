import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <div className='mt-20'>

      {/* <div className='text-center'>
            <Image src={assets.icon} alt='' className='w-20 mx-auto mb-2 rounded-full'/>
            <div className='w-max flex items-center gap-2 mx-auto'>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <Image src={assets.gmail} alt='' className='w-6'/>
            <li><a target='_blank' href="dineshkumarc9102@gmail.com">dineshkumarc9102@gmail.com</a></li>
            </ul>
            </div>
        </div> */}
        
        {/* Footer Content */}
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>
            <p>© 2025 Dinesh Kumar. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>


            <div className="overflow-x-visible relative w-14 h-14 overflow-y-clip group text-center">
                <li className='flex justify-center items-center w-14 h-14 rounded-full bg-[#CEB3DB] transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white'>
                  <a target='_blank' href="mailto:dineshkumarc9102@gmail.com"><Image src={assets.gmail} alt='' className='w-6'/></a>
                </li>
                <div className="absolute dark:text-white font-bold -bottom-10 left-1/2 text-sm text-center text-black whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
                  Gmail
                </div>
            </div>

            <div className="overflow-x-visible relative w-14 h-14 overflow-y-clip group text-center">
                <li className='flex justify-center items-center w-14 h-14 rounded-full bg-[#0077b5] transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white'>
                  <a target='_blank' href="https://www.linkedin.com/in/dinesh-kumarc/"><Image src={assets.linkedin} alt='' className='w-6'/></a>
                </li>
                <div className="absolute dark:text-white font-bold -bottom-10 left-1/2 text-sm text-center text-black whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
                  LinkedIn
                </div>
            </div>

            <div className="overflow-x-visible relative w-14 h-14 overflow-y-clip group text-center">
                <li className='flex justify-center items-center w-14 h-14 rounded-full  bg-gradient-to-r from-gray-800 to-black transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white'>
                  <a target='_blank' href="https://github.com/dineshkumarc9102"><Image src={assets.github_white} alt='' className='w-6'/></a>
                </li>
                <div className="absolute dark:text-white font-bold -bottom-10 left-1/2 text-sm text-center text-black whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
                  Github
                </div>
            </div>

            </ul>
        </div>


        {/* Scroll to Top Button */}
        {/* <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-0 cursor-pointer relative after:content-['Scroll_to_top'] 
            after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 
            after:duration-200 w-16 h-16 rounded-full border border-4 border-sky-200 bg-black 
            flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 
            group/button overflow-hidden active:scale-90 shadow-lg"
        >
            <svg
                className="w-5 fill-white delay-50 duration-200 group-hover/button:-translate-y-12"
                viewBox="0 0 384 512"
            >
                <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                ></path>
            </svg>
        </button> */}

    </div>
  );
};

export default Footer;
