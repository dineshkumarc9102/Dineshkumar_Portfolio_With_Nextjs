import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ExternalLink } from "lucide-react"
import { projectData } from '@/assets/assets'
import { assets } from "@/assets/assets"

// ✅ ICON MAP
const techIconMap = {
  ReactJS: assets.reactjs,
  NodeJS: assets.nodejs,
  ExpressJS: assets.express,
  MongoDB: assets.mongodb,
  JavaScript: assets.js,
  Python: assets.python,
  "Power BI": assets.powerbi,
  "Tailwind CSS": assets.tailwindcss,
  HTML: assets.html,
  CSS: assets.css,
  Firebase: assets.firebase,
  NextJS: assets.nextjs,
  JWT: assets.js,
  Flask: assets.flask,
  "Scikit-learn": assets.scikit,
  Pandas: assets.pandas,
  NumPy: assets.numpy,
  NLP: assets.ml,
  "Machine Learning": assets.ml,
  "Socket.IO": assets.socket_io,
  "CoinGecko API": assets.cg,
  "YouTube Data API": assets.youtube,
  "TMDB API": assets.tmdb,
  "Framer Motion": assets.motion,
}

// ✅ SAFE ICON
const TechIcon = ({ tech }) => {
  const icon = techIconMap[tech]
  if (!icon) return null

  return (
    <Image
      src={icon}
      alt={tech}
      width={20}
      height={20}
      className="object-contain"
    />
  )
}

const ProjectCard = ({ item, index }) => {
  const cardRef = useRef(null)

  // ✅ 3D tilt controls
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}

      whileHover={{ scale: 1.05 }}

      className="group relative rounded-3xl overflow-hidden
                 bg-gradient-to-br from-white/60 to-white/20
                dark:from-white/10 dark:to-white/5
                 backdrop-blur-2xl border border-white/20 dark:border-white/10
                 shadow-[0_15px_40px_rgba(0,0,0,0.15)]
                 hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition duration-500"
    >

      {/* ✅ Glow Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10" />
      </div>

      {/* ✅ Image */}
      <div className="relative w-full h-48">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={item.bgImage}
            alt={item.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* ✅ Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 dark:text-white">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-white/70">
          {item.domain}
        </p>

        <div className="flex items-center gap-2 text-xs mt-2 text-gray-500">
          <Calendar className="w-3.5 h-3.5" />
          {item.date}
        </div>
      </div>

      {/* ✅ Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100
        translate-y-4 group-hover:translate-y-0
        transition-all duration-300
        bg-white/95 dark:bg-black/90 p-5 flex flex-col"
      >

        <p className="text-sm text-gray-700 dark:text-white mb-4">
          {item.description}
        </p>

        {/* ✅ Full Tech */}
        <div className="flex flex-wrap gap-2">
          {item.tech?.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-2 py-1 rounded-full
              bg-white/40 dark:bg-white/30"
            >
              <TechIcon tech={tech} />
              <span className="text-xs">{tech}</span>
            </div>
          ))}
        </div>

        {/* ✅ Button */}
        <div className="mt-auto">
          <Link
            href={item.link}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2
            bg-black text-white dark:bg-white dark:text-black
            rounded-lg hover:scale-105 transition"
          >
            View Project <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const Project = () => {
  return (
    <motion.div
      id="project"
      className="w-full px-[6%] sm:px-[10%] md:px-[12%] py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >

      <h4 className="text-center text-lg mb-2 font-Ovo">Work & Experience</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-Ovo">My Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70">
        Explore my projects showcasing real-world applications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectData.map((item, index) => (
          <ProjectCard key={index} item={item} index={index} />
        ))}
      </div>

      {/* ✅ GitHub */}
      <div className="text-center mt-16">
        <a
          href="https://github.com/dineshkumarc9102"
          target="_blank"
          className="px-6 py-3 rounded-full border
          hover:bg-indigo-500/10 transition "
        >
          View More Projects →
        </a>
      </div>

    </motion.div>
  )
}

export default Project
