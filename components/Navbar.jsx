import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    })
  },[])

  return (
    <>
    {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.gradient_bg} alt='' className='w-full' />
    </div> */}

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`} >
        <a href="#top">
            <Image src={assets.icon} alt='' className='w-20 h-16 cursor-pointer mr-14 rounded-full ' />
        </a>
        
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll ? " " : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
            <li><a className='font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition' href="#top">Home</a></li>
            <li><a className='font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition' href="#about">About me</a></li>
            <li><a className='font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition' href="#education">Education</a></li>
            <li><a className='font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition' href="#project">Project</a></li>
            <li><a className='font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition' href="#contact">Contact</a></li>
        </ul>

        

        <div className='flex items-center gap-4'>

          {/* <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6'/>
          </button> */}

         
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              className="sr-only peer"
              type="checkbox"
              checked={isDarkMode}
              onChange={() => setIsDarkMode((prev) => !prev)}
            />
            <div className="w-12 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden 
              before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center 
              before:content-['🌑'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full 
              before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 
              peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full 
              shadow-gray-400 peer-checked:shadow-md  peer-checked:bg-[#383838] 
              after:content-['☀️'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[3px] after:right-1 
              after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 
              peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0">
            </div>
          </label>



          {/* <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
              Contact <Image src={isDarkMode ? assets.arrow_up_dark : assets.arrow_up} alt='' className='w-3' />
          </a> */}

        <a href="#contact" className='hidden lg:flex items-center gap-1 px-5 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
        <button className="cursor-pointer group">
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Contact 
            </p>
            <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Contact
            </p>
          </div>
        </button> <Image src={isDarkMode ? assets.arrow_up_dark : assets.arrow_up} alt='' className='w-5' />
        </a>


          <button className='block md:hidden ml-3' onClick={openMenu}>
          <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
          </button>
        </div>

  {/* Mobile Menu */}
         <ul
           ref={sideMenuRef}
           className= 'flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'
         >
            <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
               <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className="w-6" />
             </div>

            <div>
             {[
               { id: 'top', label: 'Home', icon: isDarkMode ? assets.home_white : assets.home },
               { id: 'about', label: 'About', icon: isDarkMode ? assets.about_white : assets.about },
               { id: 'education', label: 'Education', icon: isDarkMode ? assets.edu_icon_dark : assets.education },
               { id: 'project', label: 'Project', icon: isDarkMode ? assets.experience_white : assets.experience },
               { id: 'contact', label: 'Contact', icon: isDarkMode ? assets.contact_white : assets.contact },
             ].map(({ id, label, icon }) => (
               <li
                 key={id}
                 className="cursor-pointer flex flex-row items-center gap-4 p-4 group font-semibold rounded-full bg-cover 
                 hover:border-b-2 border-darkHover focus:text-white transition-all ease-linear 
                 dark:text-white/80 dark:hover:border-b-2 border-lightHover"
               >
                 <a className="font-Ovo flex items-center gap-2" onClick={closeMenu} href={`#${id}`}>
                   <Image src={icon} alt={label} className="w-5" />
                   {label}
                 </a>
               </li>
             ))}
           </div>

            {/* <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#education">Education</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#project">Project</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li> */}

        </ul>

    </nav>
    </>
  )
}

export default Navbar