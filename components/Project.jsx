import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CodeXml, ArrowRight, Calendar } from "lucide-react";
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
      whileHover={{ y: -6, scale: 1.01, }}
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
          group-hover:scale-105}`}
        style={{ objectPosition: item.imagePosition || "center", }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent z-[1] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute top-8 sm:top-10 left-0 w-full z-10">
        <div className="max-w-[700px] mx-auto px-6 text-center cursor-pointer">
          <p className="text-xs tracking-[0.25em] uppercase text-white/75">
            {item.domain}
          </p>

          <h3 className="mt-2 text-xl sm:text-3xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight text-white ">
            {item.title}
          </h3>

          <p className="mt-3 text-xs sm:text-lg max-w-md text-white/90 mx-auto leading-relaxed line-clamp-2">
            {item.description}
          </p>

          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {item.demolink && (
              <Link
                href={item.demolink}
                target="_blank"
                className=" inline-flex items-center gap-2 px-5 py-2.5 rounded-full  bg-white/15 backdrop-blur-xl border border-white/20 text-white text-sm font-medium hover:bg-white/25 transition-all duration-300 ">
                <ArrowUpRight size={18} />
                <span>Live</span>
              </Link>
            )}

            <Link
              href={item.gitlink}
              target="_blank"
              className=" inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 text-white text-sm font-medium hover:bg-white/25 transition-all duration-300 ">
              <CodeXml size={18} />
              <span>Source</span>
            </Link>
          </div>

        </div>
      </div>


      <div className="absolute bottom-5 left-5 z-20">
        <div className="flex items-center gap-2">
          {/* Always visible icons */}
          {item.tech?.slice(0, 3).map((tech, i) => (
            <div
              key={i}
              className="w-7 h-7  sm:w-9 sm:h-9 rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center"
              title={tech}
            >
              <TechIcon tech={tech} />
            </div>
          ))}

          {/* Remaining icons */}
          {item.tech?.length > 3 && (
            <div className="relative group/more flex items-center">
              {/* +N Badge */}
              <div
                className="w-7 h-7  sm:w-9 sm:h-9 rounded-full  bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center  text-white text-xs font-medium transition-all duration-300 group-hover/more:opacity-0">
                +{item.tech.length - 3}
              </div>

              {/* Hidden Icons */}
              <div
                className=" absolute left-0 flex items-center gap-2 opacity-0 pointer-events-none transition-all duration-300 group-hover/more:opacity-100 group-hover/more:pointer-events-auto">
                {item.tech.slice(3).map((tech, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    title={tech}
                  >
                    <TechIcon tech={tech} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-5 right-4 z-20 text-right">
        <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/40">
          Year
        </p>
        <p className="text-xs sm:text-xl font-semibold text-white/80">
          {item.date}
        </p>
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
          <span>Explore GitHub <ArrowRight size={18} />
          </span>

        </a>
      </div>

    </motion.div>
  )
}

export default Project
