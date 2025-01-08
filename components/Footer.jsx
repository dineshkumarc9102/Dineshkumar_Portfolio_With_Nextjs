import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
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

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>
            <p>© 2025 Dinesh Kumar. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="mailto:dineshkumarc9102@gmail.com"><Image src={assets.gmail} alt='' className='w-6'/></a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/dinesh-kumarc/"><Image src={assets.linkedin} alt='' className='w-6'/></a></li>
            <li><a target='_blank' href="https://github.com/dineshkumarc9102"><Image src={isDarkMode ? assets.github_white : assets.github_black} alt='' className='w-6'/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer