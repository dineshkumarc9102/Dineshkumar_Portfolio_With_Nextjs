import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image";
import { assets } from "@/assets/assets";
import { User, Mail, MessageSquare, Send } from "lucide-react"


const Contact = () => {

  const [result, setResult] = useState("")
  const [resultColor, setResultColor] = useState("text-gray-700")


  const onSubmit = async (event) => {
    event.preventDefault()

    setResult("Sending...")
    setResultColor("text-indigo-500")

    const formData = new FormData(event.target)
    formData.append("access_key", "YOUR_ACCESS_KEY")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Message sent successfully ✅")
      setResultColor("text-green-500")
      event.target.reset()
    } else {
      setResult("Something went wrong ❌")
      setResultColor("text-red-500")
    }
  }


  return (
    <motion.div
      id='contact'
      className='relative overflow-hidden w-full px-[6%] sm:px-[10%] md:px-[12%] py-16 scroll-mt-20' initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          className="absolute inset-x-0 top-10 h-[1100px]"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            transform: "perspective(1500px) rotateX(75deg)",
            transformOrigin: "top center",
          }}
          animate={{
            backgroundPositionY: ["0px", "150px"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

      </div>

      {/* ✅ Heading */}
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Connect with me
      </h4>

      <h2 className='text-center text-3xl sm:text-5xl font-Ovo'>
        Get In Touch
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70'>
        If you have any questions, feel free to reach out using the form below.
      </p>


      {/* ✅ Form */}
      <motion.form
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
      >


        {/* ✅ Inputs */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>

          {/* Name */}
          <div className="flex items-center gap-2 p-3 rounded-lg
            bg-white/70 dark:bg-white/10
            border border-gray-500 dark:border-white backdrop-blur-md">

            <User className="w-4 h-4 text-gray-500" />

            <input
              name='name'
              type="text"
              placeholder="Enter your name"
              required
              className='w-full bg-transparent outline-none text-gray-800 dark:text-white'
            />
          </div>


          {/* Email */}
          <div className="flex items-center gap-2 p-3 rounded-lg
            bg-white/70 dark:bg-white/10
            border border-gray-500 dark:border-white backdrop-blur-md">

            <Mail className="w-4 h-4 text-gray-500" />

            <input
              name='email'
              type="email"
              placeholder="Enter your email"
              required
              className='w-full bg-transparent outline-none text-gray-800 dark:text-white'
            />
          </div>

        </div>


        {/* ✅ Message */}
        <div className="flex items-start gap-2 p-4 rounded-lg mb-6
          bg-white/70 dark:bg-white/10
          border border-gray-500 dark:border-white backdrop-blur-md">

          <MessageSquare className="w-4 h-4 mt-1 text-gray-500" />

          <textarea
            name='message'
            rows={5}
            placeholder='Enter your message'
            required
            className='w-full bg-transparent outline-none text-gray-800 dark:text-white'
          />
        </div>


        {/* ✅ Submit Button */}
        <button
          type='submit'
          className='group mx-auto flex items-center gap-2 px-6 py-3 rounded-full
          bg-gray-200 dark:bg-white/10
          border border-gray-200 dark:border-white/10
          text-gray-800 dark:text-white
          hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10
          transition duration-300'
        >
          Submit
          <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
        </button>


        {/* ✅ Result Message */}
        <p className={`mt-4 text-center ${resultColor}`}>
          {result}
        </p>

        {/* ================= Social Links ================= */}
        <div className="mt-12">
          <p className="text-center text-gray-600 dark:text-white/70 mb-8">
            Or connect with me
          </p>

          <div className="flex justify-center items-center gap-8 sm:gap-10 flex-wrap">

            {/* Gmail */}
            <div className="relative w-14 h-16 group overflow-hidden text-center">
              <div
                className="absolute top-0 left-0 w-14 h-14 rounded-full
                bg-[#CEB3DB] flex items-center justify-center
                transition-all duration-300
                group-hover:scale-75 group-hover:origin-top"
              >
                <a href="mailto:dineshkumarc9102@gmail.com">
                  <Image src={assets.gmail} alt="Gmail" className="w-6" />
                </a>
              </div>

              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2
                text-xs font-medium whitespace-nowrap
                text-gray-700 dark:text-white/70
                transition-all duration-300
                group-hover:bottom-0"
              >
                Gmail
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative w-14 h-16 group overflow-hidden text-center">
              <div
                className="absolute top-0 left-0 w-14 h-14 rounded-full
                bg-[#0077B5] flex items-center justify-center
                transition-all duration-300
                group-hover:scale-75 group-hover:origin-top"
              >
                <a
                  href="https://www.linkedin.com/in/dinesh-kumarc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={assets.linkedin} alt="LinkedIn" className="w-6" />
                </a>
              </div>

              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2
                text-xs font-medium whitespace-nowrap
                text-gray-700 dark:text-white/70
                transition-all duration-300
                group-hover:bottom-0"
              >
                LinkedIn
              </span>
            </div>

            {/* GitHub */}
            <div className="relative w-14 h-16 group overflow-hidden text-center">
              <div
                className="absolute top-0 left-0 w-14 h-14 rounded-full
                bg-gray-200 dark:bg-gray-200 flex items-center justify-center
                transition-all duration-300
                group-hover:scale-75 group-hover:origin-top"
              >
                <a
                  href="https://github.com/dineshkumarc9102"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={assets.github} alt="GitHub" className="w-6" />
                </a>
              </div>

              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2
                text-xs font-medium whitespace-nowrap
                text-gray-700 dark:text-white/70
                transition-all duration-300
                group-hover:bottom-0"
              >
                GitHub
              </span>
            </div>

          </div>
        </div>

      </motion.form>

    </motion.div>
  )
}

export default Contact
