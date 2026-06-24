import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Folder,
  Award,
  Mail,
  Menu,
  X
} from "lucide-react"

import { assets } from '@/assets/assets'


const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef(null)

  // ✅ Open Menu
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  // ✅ Close Menu
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  // ✅ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
          }`}
      >

        {/* ✅ Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_white : assets.logo_black}
            alt="Logo"
            className="w-20 h-16 cursor-pointer rounded-full"
          />
        </a>


        {/* ✅ Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
          ${isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
            }`}
        >
          <li><a className="font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition" href="#about">About</a></li>
          <li><a className="font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition" href="#experience">Experience</a></li>
          <li><a className="font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition" href="#education">Education</a></li>
          <li><a className="font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition" href="#project">Project</a></li>
          <li><a className="font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition" href="#achivements">Certification</a></li>
          <li><a className="font-Ovo hover:border-b-2 border-darkHover dark:hover:text-purple-300 transition" href="#contact">Contact</a></li>
        </ul>


        {/* ✅ Right Section */}
        <div className='flex items-center gap-4'>

          {/* ✅ Theme Toggle */}
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


          {/* ✅ Contact Button */}
          <a
            href="#contact"
            className='hidden lg:flex items-center gap-1 px-5 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'
          >
            <button className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Contact
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Contact
                </p>
              </div>
            </button>

            <Image
              src={isDarkMode ? assets.arrow_up_dark : assets.arrow_up}
              alt=""
              className="w-5"
            />
          </a>


          {/* ✅ Mobile Menu Button */}
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Menu className="w-6 h-6" />
          </button>

        </div>


        {/* ✅ Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
          bg-white dark:bg-black/90 backdrop-blur-xl
          text-gray-800 dark:text-white transition duration-500'
        >

          {/* Close */}
          <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
            <X className="w-6 h-6" />
          </div>


          {/* Links */}
          {[
            { id: 'top', label: 'Home', icon: <Home className="w-5 h-5" /> },
            { id: 'about', label: 'About', icon: <User className="w-5 h-5" /> },
            { id: 'experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
            { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
            { id: 'project', label: 'Project', icon: <Folder className="w-5 h-5" /> },
            { id: 'achivements', label: 'Certification', icon: <Award className="w-5 h-5" /> },
            { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
          ].map(({ id, label, icon }) => (

            <li
              key={id}
              className="flex items-center gap-4 p-4 font-semibold rounded-xl cursor-pointer
              bg-transparent hover:bg-gray-100 dark:hover:bg-white/10
              hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-300
            text-gray-800 dark:text-white"
            >
              <a
                href={`#${id}`}
                onClick={closeMenu}
                className="flex items-center gap-3 w-full"
              >
                <span className="text-purple-500">{icon}</span>
                {label}
              </a>
            </li>

          ))}

        </ul>

      </nav>
    </>
  )
}

export default Navbar
