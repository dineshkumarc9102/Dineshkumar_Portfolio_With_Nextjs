import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8fa54656-9168-4177-8357-818fbf971437");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <motion.div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/bg_img.jpg")] bg-no-repeat bg-center bg-[length:%_auto] dark:bg-none'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay: 0.9, duration: 0.6 }}
    >
    <motion.h4 className='text-center mb-2 text-lg font-Ovo'
    initial={{y:-20,  opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{delay: 0.3, duration: 0.5 }}
    >
      Connect with me
    </motion.h4>

    <motion.h2 className='text-center text-5xl font-Ovo'
    initial={{y:-20,  opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{delay: 0.5, duration: 0.5 }}
    >
      Get In Touch
    </motion.h2>
    
    <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay: 0.7, duration: 0.5 }}
    >
        It you have any questions, comments, or feedback, Please use the form below. 
    </motion.p>

    <motion.form className='max-w-2xl mx-auto' onSubmit={onSubmit}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay: 0.9, duration: 0.5 }}
    >
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'> 
            <motion.input 
            name='name'
            type="text" 
            placeholder="Enter your name" 
            required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
            
            initial={{x: -50,  opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay: 1.1, duration: 0.6 }}
            />

            <motion.input 
            name='email'
            type="email" 
            placeholder="Enter your email" 
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
            initial={{x: 50,  opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay: 1.2, duration: 0.6 }}
            />

        </div>

        <motion.textarea 
        name='message'
        rows={6} 
        placeholder='Enter your message' 
        required 
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-mg bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'
        
        initial={{y: 100,  opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 1.3, duration: 0.6 }}
        >
        </motion.textarea>

        <motion.button 
        type='submit'
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
        whileHover={{scale: 1.05}}
        transition={{ duration: 0.3 }}
        >
            Submit Now
            <Image src={assets.rigth_arrow_white} alt='' className='w-4'/>
        </motion.button>

        <p className='mt-4 '>{result}</p>
    </motion.form>
    </motion.div>
  )
}

export default Contact