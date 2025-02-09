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
            {/* <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="mailto:dineshkumarc9102@gmail.com"><Image src={assets.gmail} alt='' className='w-6'/></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/dinesh-kumarc/"><Image src={assets.linkedin} alt='' className='w-6'/></a></li>
                <li><a target='_blank' href="https://github.com/dineshkumarc9102"><Image src={isDarkMode ? assets.github_white : assets.github_black} alt='' className='w-6'/></a></li>
            </ul> */}
            <div className="flex items-center gap-4">
            <div className="social-button">
              <button className="relative w-12 h-12 rounded-full group">
                <div className="floater w-full h-full absolute top-0 left-0 bg-red-200  rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full">
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="mailto:dineshkumarc9102@gmail.com"><Image src={assets.gmail} alt='' className='w-6'/></a></li>
                </ul>
                </div>
              </button>
            </div>
  
            <div className="social-button">
              <button className="relative w-12 h-12 rounded-full group">
                <div className="floater w-full h-full absolute top-0 left-0 bg-blue-200  rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://www.linkedin.com/in/dinesh-kumarc/"><Image src={assets.linkedin} alt='' className='w-6'/></a></li>
                </ul>
                </div>
              </button>
            </div>
  
            <div className="social-button">
              <button className="relative w-12 h-12 rounded-full group">
                <div className="floater w-full h-full absolute top-0 left-0 bg-violet-200  rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400  rounded-full">
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/dineshkumarc9102"><Image src={assets.github_black} alt='' className='w-6'/></a></li>
                </ul>
                </div>
              </button>
            </div>
          </div>
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
