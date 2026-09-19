import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  Home,
  User,
  Briefcase,
  Milestone,
  Folder,
  Award,
  Mail,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react"

import { assets } from '@/assets/assets'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // * Open/Close Handlers
  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  // * Scroll Listener
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
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
        ${isScroll
            ? "bg-white/80 dark:bg-[#111111]/90 backdrop-blur-lg shadow-sm border-b border-gray-200/20 dark:border-white/5"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        {/* * Logo */}
        <a href="#top" className="transition-transform hover:scale-105 active:scale-95">
          <Image
            src={isDarkMode ? assets.logo_white : assets.logo_black}
            alt="Logo"
            className="w-16 h-12 sm:w-20 sm:h-16 cursor-pointer rounded-full object-contain"
          />
        </a>

        {/* * Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-2.5 transition-all duration-300 border ${
          isScroll 
            ? "bg-transparent border-transparent text-gray-900 dark:text-gray-100" 
            : "bg-white/60 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-md text-gray-700 dark:text-gray-300"
        }`}>
          {[
            { id: 'about', label: 'Who' },
            { id: 'whatdo', label: 'Do' },
            { id: 'journey', label: 'How' },
            { id: 'project', label: 'Build' },
            { id: 'achievements', label: 'Learn' },
            { id: 'contact', label: 'Where' },
          ].map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="font-Ovo text-sm font-medium relative block h-6 pt-0.5 overflow-hidden group tracking-wide"
              >
                {/* Original Text Layer sliding upward out of view */}
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  {label}
                </span>
                {/* Duplicate Accent Layer sliding up into position from below */}
                <span className="absolute top-0.5 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 text-purple-600 dark:text-purple-400 font-semibold">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* * Right Action Section */}
        <div className='flex items-center gap-2 sm:gap-4'>

          {/* * Modern Minimalist Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(prev => !prev)}
            className="p-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition active:scale-95 text-gray-700 dark:text-gray-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} className="animate-spin-slow" /> : <Moon size={18} />}
          </button>

          {/* * Mobile Menu Hamburger Toggle */}
          <button
            className='block md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-white transition cursor-pointer'
            onClick={openMenu}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* * Mobile Drawer Overlay */}
        <div
          className={`fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-xs transition-opacity duration-300 md:hidden z-40 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        />

        {/* * Mobile Sidebar Menu Panel */}
        <ul
          className={`flex md:hidden flex-col gap-2 py-24 px-6 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen
          bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Trigger Button */}
          <button
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-white transition cursor-pointer"
            onClick={closeMenu}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Mapping Fixed Section Anchors */}
          {[
            { id: 'top', label: 'Home', icon: <Home className="w-4 h-4" /> },
            { id: 'about', label: 'Who I Am', icon: <User className="w-4 h-4" /> },
            { id: 'whatdo', label: 'What I Do', icon: <Briefcase className="w-4 h-4" /> },
            { id: 'journey', label: 'How I Grew', icon: <Milestone className="w-4 h-4" /> },
            { id: 'project', label: 'What I Built', icon: <Folder className="w-4 h-4" /> },
            { id: 'achievements', label: 'What I Learn', icon: <Award className="w-4 h-4" /> },
            { id: 'contact', label: 'Where To Connect', icon: <Mail className="w-4 h-4" /> },
          ].map(({ id, label, icon }) => (
            <li key={id} className="w-full">
              <a
                href={`#${id}`}
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 font-medium rounded-xl
                           text-gray-700 dark:text-gray-200 bg-transparent 
                           hover:bg-purple-500/10 dark:hover:bg-purple-500/20 
                           hover:text-purple-600 dark:hover:text-purple-400
                           transition-all duration-200 w-full font-Ovo text-sm"
              >
                <span className="text-gray-400 dark:text-gray-500">{icon}</span>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </>
  )
}

export default Navbar
