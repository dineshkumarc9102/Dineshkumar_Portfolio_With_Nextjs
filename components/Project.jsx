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

  return (
    <motion.div
      whileHover={{ y: -6,  scale: 1.01, }}
      transition={{ duration: 0.4 }}
      className="relative h-[480px] sm:h-[550px] lg:h-[580px] overflow-hidden rounded-[32px] bg-black group border border-black dark:border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
    >
      {/* Background Image */}
      <Image
        src={item.bgImage}
        alt={item.title}
        fill
        priority={index === 0}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`
    object-cover
    transition-transform
    duration-1000
    group-hover:scale-105
   : item.imagePosition === "bottom"
        ? "object-bottom"
        : item.imagePosition === "left"
        ? "object-left"
        : item.imagePosition === "right"
        ? "object-right"
        : "object-center"
    }
  `}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent z-[1]" />

      {/* Content */}
      <div className="absolute top-8 sm:top-10 left-0 w-full z-10">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-white/75">
            {item.domain}
          </p>

          <h3 className="mt-2 text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight text-white ">
            {item.title}
          </h3>

          <p className="mt-3 text-base sm:text-lg max-w-md text-white/90 mx-auto leading-relaxed line-clamp-2">
            {item.description}
          </p>

          <div className="flex gap-3 justify-center mt-6 flex-wrap">
            <Link
              href={item.link}
              target="_blank"
              className=" inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full bg-[#0071E3] text-white hover:bg-[#0077ED] transition"
            >
              View Project
            </Link>
          </div>

          {/* <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {item.tech?.slice(0, 5).map((tech, i) => (
              <div
                key={i}
                className=" w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center "
                title={tech}
              >
                <TechIcon tech={tech} />
              </div>
            ))}
          </div> */}

          

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

      <h4 className="text-center text-lg mb-2 font-Ovo">Featured Work</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-Ovo">My Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70">
        Explore my projects showcasing real-world applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-1">
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
