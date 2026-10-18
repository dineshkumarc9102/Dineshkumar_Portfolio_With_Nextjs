import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { GraduationCap, ExternalLink, CheckCircle, X, Award } from "lucide-react"
import { certificateData } from "@/assets/assets"
import { motion, AnimatePresence } from "motion/react"

const Achievements = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [anchorRect, setAnchorRect] = useState(null);
  const [isPaused, setIsPaused] = useState(false); // Controls explicit click-to-pause logic
  const marqueeContainerRef = useRef(null);

  // Sorting parser engine to automatically structure credentials from newest to oldest
  const sortedCertificates = [...certificateData].sort((a, b) => {
    const yearA = parseInt(a.date?.split(" ").pop(), 10) || 0;
    const yearB = parseInt(b.date?.split(" ").pop(), 10) || 0;
    return yearB - yearA;
  });

  // Replicated lanes to ensure an uninterrupted, endless looping track marquee row
  const duplicatedCertificates = [...sortedCertificates, ...sortedCertificates];

  const handleNodeClick = (item, event) => {
    if (marqueeContainerRef.current) {
      const parentRect = marqueeContainerRef.current.getBoundingClientRect();
      const nodeRect = event.currentTarget.getBoundingClientRect();
      
      // Calculate coordinates relative to parent marquee track
      setAnchorRect({
        left: nodeRect.left - parentRect.left + (nodeRect.width / 2),
        top: nodeRect.top - parentRect.top
      });

      // If clicking the same item that's already open, unpause and close it
      if (activeCert?.title === item.title) {
        setActiveCert(null);
        setIsPaused(false);
      } else {
        setActiveCert(item);
        setIsPaused(true); // Locks animation loop in place
      }
    }
  };

  const handleNodeHoverStart = (item, event) => {
    // Only alter coordinates via hover loops if the user hasn't explicitly clicked a node to freeze it
    if (!isPaused && marqueeContainerRef.current) {
      const parentRect = marqueeContainerRef.current.getBoundingClientRect();
      const nodeRect = event.currentTarget.getBoundingClientRect();
      
      setAnchorRect({
        left: nodeRect.left - parentRect.left + (nodeRect.width / 2),
        top: nodeRect.top - parentRect.top
      });
      setActiveCert(item);
    }
  };

  return (
    <motion.div
      id="achievements"
      className="w-full px-[6%] sm:px-[8%] md:px-[12%] py-24 scroll-mt-20 relative select-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Structural Title Header Block */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl sm:text-5xl font-Ovo text-gray-800 dark:text-white"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          What I Learn
        </motion.h2>
        <p className="text-gray-500 dark:text-white/60 mt-3 text-sm sm:text-base">
          Click a logo to freeze/unfreeze the timeline track and view credentials
        </p>
      </div>

      {/* Infinite Logo Marquee Strip Conveyor Container */}
      <div 
        ref={marqueeContainerRef}
        className="w-full relative overflow-visible py-8 border-y border-gray-200/60 dark:border-purple-500/10 backdrop-blur-xl rounded-2xl group/marquee"
      >

        <motion.div
          className="flex gap-12 w-max items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            ease: "linear",
            duration: 28,
            repeat: Infinity,
          }}
          // Pauses both on absolute hover matches or active sticky click-pause parameters
          style={{
            animationPlayState: isPaused ? "paused" : "running"
          }}
          whileHover={{ 
            animationPlayState: "paused" 
          }}
        >
          {duplicatedCertificates.map((item, index) => {
            const isSelected = activeCert?.title === item.title;

            return (
              <motion.div
                key={index}
                onClick={(e) => handleNodeClick(item, e)}
                onMouseEnter={(e) => handleNodeHoverStart(item, e)}
                onMouseLeave={() => {
                  // Only hide popup window on mouse out if the loop isn't frozen by a click
                  if (!isPaused) setActiveCert(null);
                }}
                whileHover={{ scale: 1.08, y: -4 }}
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/80 dark:bg-white/5 border backdrop-blur-md shadow-xs flex items-center justify-center p-4 cursor-pointer transition-all duration-300 relative shrink-0 ${
                  isSelected 
                    ? "border-purple-500 shadow-lg shadow-purple-500/10" 
                    : "border-gray-200 dark:border-purple-500/20 hover:border-purple-400/40"
                }`}
              >
                {item.bgImage ? (
                  <Image
                    src={item.bgImage}
                    alt={item.title || "Issuer Node"}
                    width={52}
                    height={54}
                    className="object-contain pointer-events-none"
                  />
                ) : (
                  <Award size={26} className="text-gray-400 dark:text-purple-400" />
                )}
                
                {isSelected && (
                  <span className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-xs shadow-purple-400" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
        {/* Framer Motion Desktop Anchored Popup Matrix */}
        <AnimatePresence>
          {activeCert && anchorRect && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                x: anchorRect.left,
                top: anchorRect.bottom - 145
              }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
              style={{ position: 'absolute' }}
              className="hidden lg:block z-50 w-[330px] rounded-2xl h-auto -translate-x-1/2 backdrop-blur-2xl bg-white/95 dark:bg-[#160b24]/95 border border-gray-200 dark:border-purple-500/30 shadow-2xl p-5 select-none"
            >
              {/* Close Button Inside Desktop Tooltip to release pause lock state */}
              {isPaused && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCert(null);
                    setIsPaused(false);
                  }}
                  className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-gray-600 dark:hover:text-white pointer-events-auto transition"
                >
                  <X size={12} />
                </button>
              )}

              <div className="absolute inset-2 border border-gray-300/20 dark:border-white/5 rounded-xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-3 border-b border-gray-100 dark:border-white/10 pb-2 pr-4">
                <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 dark:text-purple-400/60 uppercase">
                  Issued: {activeCert.date}
                </span>
                <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 px-2 py-0.5 rounded-full">
                  <CheckCircle size={11} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[9px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">Verified</span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-gray-800 dark:text-white leading-snug line-clamp-2 mb-2 pr-2">
                {activeCert.title}
              </h3>
              
              <div className="flex items-center justify-between gap-1.5 mt-2">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-white/60 truncate max-w-[180px]">
                  <GraduationCap size={14} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                  <span className="truncate">{activeCert.issuer}</span>
                </div>

                {/* Secure verify link inside desktop panel */}
                {activeCert.link && isPaused && (
                  <a
                    href={activeCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto text-[10px] font-bold inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-gray-300 dark:border-white/10 bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition"
                  >
                    <span>Verify</span>
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tablet & Mobile Fallback Focus Portal System */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => {
              setActiveCert(null);
              setIsPaused(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white dark:bg-[#160b24] border border-gray-200 dark:border-purple-500/20 shadow-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-2 border border-gray-300/30 dark:border-white/5 rounded-[22px] pointer-events-none" />
              
              <button 
                onClick={() => {
                  setActiveCert(null);
                  setIsPaused(false);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/70 hover:scale-105 active:scale-95 transition z-10"
              >
                <X size={15} />
              </button>
              
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white p-2 border border-gray-100 dark:border-white/5 mb-4 mt-2 shadow-sm shrink-0">
                {activeCert.bgImage && (
                  <Image 
                    src={activeCert.bgImage} 
                    alt="Issuer logo" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                )}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 px-2.5 py-0.5 rounded-full">
                  <CheckCircle size={12} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[9px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">Verified</span>
                </div>
                <span className="text-[11px] font-semibold font-mono text-gray-400 dark:text-purple-400/60">
                  Issued: {activeCert.date}
                </span>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-2 leading-tight pr-6">
                {activeCert.title}
              </h3>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-white/60 mb-6">
                <GraduationCap size={15} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span className="truncate font-medium">{activeCert.issuer}</span>
              </div>

              {activeCert.link && (
                <a
                  href={activeCert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center text-xs font-bold inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-black dark:bg-white text-white dark:text-black hover:bg-lightHover dark:hover:bg-darkHover transition duration-300 shadow-sm"
                >
                  <span>Verify Credential Link</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Achievements;
