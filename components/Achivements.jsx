import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { GraduationCap, ChevronLeft, ChevronRight, ExternalLink, CheckCircle } from "lucide-react"
import { certificateData } from "@/assets/assets"
import { motion, useScroll, useTransform } from "motion/react"

const Achievements = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.75;

      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  const handleWheel = (e) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleScroll("right");
      if (e.key === "ArrowLeft") handleScroll("left");
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const slider = sliderRef.current;

    const updateProgress = () => {
      if (!slider) return;

      const maxScroll =
        slider.scrollWidth - slider.clientWidth;

      const current =
        maxScroll > 0
          ? (slider.scrollLeft / maxScroll) * 100
          : 0;

      setProgress(current);
    };

    slider?.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      slider?.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div
      id='achievements'
      className='w-full px-[6%] sm:px-[8%] md:px-[12%] py-16 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Layout */}

      <motion.h2
        className='text-center text-3xl sm:text-5xl font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        What I Learn
      </motion.h2>

      <p className='text-center text-gray-500 dark:text-white/60 mt-2 mb-3'>
        Industry Certifications & Credentials
      </p>

      {/* Horizontal Carousel Timeline */}
      <div className="relative w-full">

        {/* Base Timeline */}
        <div className="absolute top-[50px] left-0 right-0 h-[2px] bg-gray-300 dark:bg-purple-900/40  z-0" />

        {/* Animated Progress Line */}
        <div
          className="absolute top-[50px] left-0 h-[2px] bg-black dark:bg-purple-500 shadow-[0_0_15px_rgba(107,114,128,0.6)] dark:shadow-[0_0_25px_rgba(168,85,247,0.8)] z-20 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />
        <div
          className=" absolute top-[41px] w-5 h-5 rounded-full  bg-black
                        dark:bg-purple-500
                        shadow-[0_0_20px_rgba(107,114,128,0.8)]
                        dark:shadow-[0_0_35px_rgba(168,85,247,1)] z-20 transition-all duration-300 "
          style={{
            left: `${progress}%`,
            transform: "translateX(-50%)"
          }}
        >
          <span className="absolute inset-0 rounded-full bg-gray-500 dark:bg-purple-500 animate-ping opacity-50" />
        </div>

        {/* Horizontal Container */}
        <div
          ref={sliderRef}
          onWheel={handleWheel}
          className="flex gap-6 overflow-x-auto md:overflow-x-hidden scroll-smooth pt-28 pb-6 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certificateData.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-[85vw] max-w-[340px] sm:w-[360px] snap-start"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
              >

                {/* Year */}
                <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 text-sm font-semibold text-black dark:text-white/60 whitespace-nowrap">
                  {item.date.split(" ").pop()}
                </div>

                {/* Vertical Connector */}
                <div className="absolute -top-[48px] left-1/2 -translate-x-1/2 h-8 w-[2px] bg-gray-400 dark:bg-gray-600" />

                {/* Timeline Node */}
                <div className="absolute -top-[70px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 shadow-md z-20">
                  <GraduationCap size={14} className="text-blue-500 dark:text-blue-400" />
                </div>

                {/* Certificate Structure Card Template */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative group w-full rounded-2xl backdrop-blur-xl bg-white/50 dark:bg-white/5
                                        border border-gray-200 dark:border-purple-500/20
                                        shadow-lg
                                        hover:shadow-2xl
                                        hover:border-purple-400/50
                                        dark:hover:border-purple-500/40  hover:bg-lightHover
                                        dark:hover:bg-darkHover transition-all duration-500 overflow-hidden"
                >
                  {/* Outer Safety Margin Lining Accent */}
                  <div className="absolute inset-2 border border-gray-300/40 dark:border-white/10 rounded-xl pointer-events-none" />

                  {/* Main Inner Wrapper */}
                  <div className="relative p-6 sm:p-7 flex flex-col items-start min-h-[290px] pb-20">

                    {/* Top Row Header Block */}
                    <div className="w-full flex items-center justify-between mb-5 border-b border-gray-200/60 dark:border-white/10 pb-3">

                      {/* Image  */}
                      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white p-2 shadow-sm border border-gray-100 dark:border-white/5 transition-transform group-hover:scale-105 duration-300">
                        <Image
                          src={item.bgImage}
                          alt={item.title}
                          width={44}
                          height={44}
                          className="object-contain"
                        />
                      </div>

                      {/* Verified Badge Layout with Icon */}
                      <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-500/20 px-2.5 py-1 rounded-full">
                        <CheckCircle size={13} className="text-emerald-600 dark:text-emerald-400 fill-emerald-100/30 dark:fill-none animate-pulse" />
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-400">
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* Course/Degree Title Area */}
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white line-clamp-2 leading-snug mb-3">
                      {item.title}
                    </h3>

                    {/* Issuing Authority / Institution Row */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-white/70 w-full mb-4">
                      <GraduationCap size={15} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                      <span className="truncate">{item.issuer}</span>
                    </div>

                    {/* Styled Link Verification Button Anchor */}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm inline-flex items-center gap-2 p-3 rounded-full border border-gray-300 dark:border-white/20  bg-white/5 backdrop-blur-md  hover:bg-indigo-500/10  hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 group"
                      >
                        Verify Credential <ExternalLink size={12} />
                      </a>
                    )}

                    {/* Bottom Left Date Positioning Requirement */}
                    <div className="absolute bottom-5 right-6 text-xs text-gray-400 dark:text-white/40 font-medium">
                      Issued: {item.date}
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Carousel Controller Buttons - Placed Below Cards */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => handleScroll('left')}
            className="p-3 rounded-full border border-gray-300 dark:border-white/20  bg-white/5 backdrop-blur-md  hover:bg-indigo-500/10  hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 group"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-3 rounded-full border border-gray-300 dark:border-white/20  bg-white/5 backdrop-blur-md  hover:bg-indigo-500/10  hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 group"
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </motion.div>
  )
}

export default Achievements
