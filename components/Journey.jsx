// import Image from 'next/image'
// import React from 'react'
// import {
//     GraduationCap,
//     Briefcase,
//     Star
// } from "lucide-react"

// import { journeyData } from "@/assets/assets"
// import { motion, useScroll, useTransform } from "motion/react"

// const Journy = () => {

//     const timelineRef = React.useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: timelineRef,
//         offset: ["start center", "end center"],
//     });

//     const progressY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//     return (
//         <motion.div
//             id='journey'
//             className='w-full px-[6%] sm:px-[8%] md:px-[12%] py-16 scroll-mt-20'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >

//             {/* Heading */}
//             {/* <motion.h4
//                 className='text-center mb-2 text-lg font-Ovo'
//                 initial={{ y: -20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//             >
//                 Career Path
//             </motion.h4> */}

//             <motion.h2
//                 className='text-center text-3xl sm:text-5xl font-Ovo'
//                 initial={{ y: -20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//             >
//                 How I Grew
//             </motion.h2>

//             <p className='text-center text-gray-500 dark:text-white/60 mt-2'>
//                 From academic achievements to professional experience
//             </p>

//             {/* Timeline */}
//             <div
//                 ref={timelineRef}
//                 className="relative mt-16"
//             >

//                 {/* Vertical Line */}
//                 {/* Base Line */}
//                 <div
//                     className="absolute left-2 sm:left-4 md:left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-gray-300 dark:bg-purple-900/40 md:-translate-x-1/2 z-0"
//                 />

//                 {/* Progress Line */}
//                 <motion.div
//                     className=" absolute left-2 sm:left-2 md:left-1/2  md:-translate-x-1/2 rounded-full bg-black dark:bg-purple-500 shadow-[0_0_15px_rgba(107,114,128,0.6)] dark:shadow-[0_0_25px_rgba(168,85,247,0.8)] z-20 transition-all duration-300"
//                     style={{
//                         height: progressY,
//                     }}
//                 />

//                 {/* Moving Dot */}
//                 <motion.div
//                     className="
//                         absolute left-2 sm:left-4 md:left-1/2
//                         w-5 h-5 rounded-full
//                         -translate-x-1/2
//                         bg-black
//                         dark:bg-purple-500
//                         shadow-[0_0_15px_rgba(107,114,128,0.6)]
//                         dark:shadow-[0_0_25px_rgba(168,85,247,0.8)]
//                         md:-translate-x-1/2
//                         z-20
//                       "
//                     style={{
//                         top: progressY,
//                         marginTop: "-10px",
//                     }}
//                 >
//                     <span
//                         className="absolute inset-0 rounded-full
//                              bg-gray-500
//                              dark:bg-purple-500
//                             animate-ping
//                             opacity-50"
//                     />
//                 </motion.div>
//                 {journeyData.map((item, index) => {

//                     const isCurrent = index === 0

//                     return (
//                         <motion.div
//                             key={index}
//                             className="relative mb-16"
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.3, delay: index * 0.2 }}
//                         >

//                             {/* Branch */}
//                             {index % 2 === 0 ? (
//                                 <div
//                                     className="
//                                     hidden md:block
//                                     absolute top-[31px]
//                                     left-[calc(50%+8px)] w-12 h-[2px]
//                                      bg-gray-400 dark:bg-gray-500
//                                 "
//                                 />
//                             ) : (
//                                 <div
//                                     className="
//                                     hidden md:block
//                                     absolute top-[31px]
//                                     right-[calc(50%+8px)] w-12 h-[2px]
//                                     bg-gray-400 dark:bg-gray-500
//                                 "
//                                 />
//                             )}

//                             {/* Duration Text */}
//                             <div
//                                 className={`
//                                 hidden md:block
//                                 absolute top-4
//                                 ${index % 2 === 0 ? "right-[55%]" : "left-[55%]"}
//                                 text-sm font-medium
//                                text-black dark:text-white/60 
//                                 whitespace-nowrap
//                               `}
//                             >
//                                 {item.duration}
//                             </div>

//                             {/* Timeline Node */}
//                             <div
//                                 className={` absolute top-6 left-2 sm:left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center  bg-white dark:bg-gray-800 border-[2px] z-20
//                                        ${item.type === "Education"
//                                         ? "border-blue-500 dark:border-blue-400"
//                                         : "border-green-500 dark:border-green-400"
//                                     }
//                                      `}
//                             >
//                                 {item.type === "Education" ? (
//                                     <GraduationCap size={10} className="text-blue-500 dark:text-blue-400"/>
//                                 ) : (
//                                     <Briefcase size={10} className="text-green-500 dark:text-green-400" />
//                                 )}
//                             </div>


//                             {/* Card Wrapper */}
//                             <div
//                                 className={`
//                                   ml-10 sm:ml-16
//                                   md:w-[42%]
//                                   ${index % 2 === 0
//                                         ? "md:ml-auto md:pl-16"
//                                         : "md:mr-auto md:pr-16"
//                                     }
//                                 `}
//                             >

//                                 {/* Card */}
//                                 <motion.div
//                                     whileHover={{ scale: 1.05, y: -8, }}
//                                     className={`
//                                         relative group w-full rounded-2xl
//                                         backdrop-blur-xl bg-white/50 dark:bg-white/5
//                                         border border-gray-200 dark:border-purple-500/20
//                                         shadow-lg
//                                         hover:shadow-2xl
//                                         hover:border-purple-400/50
//                                         dark:hover:border-purple-500/40
//                                         transition-all duration-500
//                                         hover:bg-lightHover
//                                         dark:hover:bg-darkHover
//                                         overflow-hidden
//                                       `}
//                                 >

//                                     {/* Current Dot */}
//                                     {isCurrent && (
//                                         <span className="absolute top-2 right-2 md:top-4 md:right-4 flex w-2 h-2 md:w-3 md:h-3">
//                                             <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
//                                             <span className="relative inline-flex rounded-full w-full h-full bg-green-500 shadow-sm shadow-green-500/40"></span>
//                                         </span>

//                                     )}


//                                     <div className="px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 pb-14 flex flex-col items-start">

//                                         {/* Company Logo */}
//                                        <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 mb-4 shadow-sm">
//                                             <Image
//                                                 src={item.icon}
//                                                 alt={item.title}
//                                                 width={36}
//                                                 height={36}
//                                                 className="object-contain"
//                                             />
//                                         </div>

//                                         {/* Title */}
//                                         <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
//                                             {item.title}
//                                         </h3>

//                                         {/* Company */}
//                                         <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700 dark:text-white/80">
//                                             {item.type === "Education" ? (
//                                                 <GraduationCap size={16} className="text-blue-500 dark:text-blue-400" />
//                                             ) : (
//                                                 <Briefcase size={16} className="text-green-500 dark:text-green-400" />
//                                             )}

//                                             {item.organization}
//                                         </div>

//                                         {/* duration */}
//                                         {/* <div className="flex md:hidden items-center gap-2 text-xs text-gray-500 my-1">
//                                             <Calendar className="w-3.5 h-3.5" />
//                                             {item.duration}
//                                         </div> */}

//                                         {/* Score - Education Only */}
//                                         {item.type === "Education" && item.score && (
//                                             <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-white/60 my-1">
//                                                 <Star className="w-3.5 h-3.5 text-yellow-500 group-hover:scale-110 transition" />
//                                                 {item.score}
//                                             </div>
//                                         )}

//                                         {/* Description */}
//                                         {item.type === "Experience" && item.description && (
//                                             <p className="text-xs md:text-sm text-gray-700 dark:text-white/80 leading-5 md:leading-6 py-2 text-justify">
//                                                 {item.description}
//                                             </p>
//                                         )}


//                                         {/* Skills */}
//                                         {item.type === "Experience" && item.skills?.length > 0 && (
//                                             < div className="flex flex-wrap gap-2 mt-3">
//                                                 {item.skills.map((skill, i) => (
//                                                     <div
//                                                         key={i}
//                                                         className="flex items-center gap-1 px-1.5 py-1 rounded-md 
//                                                     bg-gray-100 dark:bg-white/10 
//                                                     text-[9px] md:text-xs text-gray-700 dark:text-white/80
//                                                     border border-gray-200 dark:border-white/10  backdrop-blur-sm"
//                                                     >
//                                                         <Image
//                                                             src={skill.icon}
//                                                             alt={skill.name}
//                                                             width={16}
//                                                             height={16}
//                                                             className="object-contain"
//                                                         />
//                                                         <span>{skill.name}</span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}

//                                         <div
//                                             className=" absolute bottom-4 right-4 text-xs md:text-sm font-medium  text-gray-500 dark:text-white/60"
//                                         >
//                                             {item.duration}
//                                         </div>
//                                     </div>

//                                 </motion.div>

//                             </div>

//                         </motion.div>
//                     )
//                 })}

//             </div >

//         </motion.div >
//     )
// }

// export default Journy



import Image from 'next/image'
import React, { useState } from 'react'
import {
    GraduationCap,
    Briefcase,
    Star,
    ChevronDown
} from "lucide-react"

import { journeyData } from "@/assets/assets"
import { motion, AnimatePresence } from "motion/react"

const Journy = () => {
    const [activeTab, setActiveTab] = useState("Experience");

    const getEndYear = (durationString) => {
        if (!durationString) return 0;
        if (/present|current/i.test(durationString)) {
            return new Date().getFullYear();
        }
        const years = durationString.match(/\b\d{4}\b/g);
        if (!years) return 0;
        return parseInt(years[years.length - 1], 10);
    };

    const filteredItems = journeyData
        .filter(item => item.type === activeTab)
        .sort((a, b) => getEndYear(b.duration) - getEndYear(a.duration));

    return (
        <motion.div
            id='journey'
            className='w-full px-[6%] sm:px-[8%] md:px-[12%] py-16 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h2
                className='text-center text-3xl sm:text-5xl font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                How I Grew
            </motion.h2>

            <p className='text-center text-gray-500 dark:text-white/60 mt-2'>
                From academic achievements to professional experience
            </p>

            <div className="flex justify-center mt-10 mb-12">
                <div className="relative flex p-1 bg-gray-100 dark:bg-purple-950/20 rounded-xl border border-gray-200 dark:border-purple-500/10 backdrop-blur-md">
                    <button
                        onClick={() => setActiveTab("Experience")}
                        className={`relative flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-300 z-10 ${activeTab === "Experience"
                                ? "text-white dark:text-purple-900 font-bold"
                                : "text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        <Briefcase size={16} />
                        <span>Experience</span>
                        {activeTab === "Experience" && (
                            <motion.div
                                layoutId="activeTabSlider"
                                className="absolute inset-0 bg-black dark:bg-purple-400 rounded-lg -z-10"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab("Education")}
                        className={`relative flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-300 z-10 ${activeTab === "Education"
                                ? "text-white dark:text-purple-900 font-bold"
                                : "text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        <GraduationCap size={16} />
                        <span>Education</span>
                        {activeTab === "Education" && (
                            <motion.div
                                layoutId="activeTabSlider"
                                className="absolute inset-0 bg-black dark:bg-purple-400 rounded-lg -z-10"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </button>
                </div>
            </div>
            <div className="w-full max-w-5xl mx-auto relative flex flex-col gap-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0"
                    >
                        {filteredItems.map((item, index) => {
                            const isCurrent = journeyData.indexOf(item) === 0;

                            const gridStyles = [
                                "md:col-start-1 md:col-end-8",
                                "md:col-start-2 md:col-end-9",
                                "md:col-start-3 md:col-end-10",
                                "md:col-start-4 md:col-end-11",
                                "md:col-start-5 md:col-end-12"
                            ];
                            const currentGridClass = gridStyles[index % 5];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40, x: -20 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.5, delay: (index % 5) * 0.05 }}
                                    className={`relative w-full flex flex-col items-stretch group ${currentGridClass}`}
                                >
                                    {/* Geometric Step Connectors: Right-angled track line leading down from step to step */}
                                    {index < filteredItems.length - 1 && (
                                        <div className="hidden md:block absolute top-[100%] left-[8%] w-[8.333%] h-16 pointer-events-none z-0">
                                            {/* Vertical step drop drop line */}
                                            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gray-300 dark:bg-purple-900/40" />
                                            {/* Horizontal foot tread line running over to match next column index start point */}
                                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-300 dark:bg-purple-900/40" />
                                        </div>
                                    )}

                                    {/* 3D Drop Offset Shadow Plates */}
                                    <div className="absolute inset-0 border-r-4 border-b-4 border-gray-300 dark:border-purple-500/20 rounded-2xl pointer-events-none transform translate-x-1 translate-y-1 group-hover:border-purple-400/40 dark:group-hover:border-purple-500/30 transition-colors duration-300" />

                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -8 }}
                                        className={`
                                            relative group w-full rounded-2xl h-full z-10
                                            backdrop-blur-xl bg-white/50 dark:bg-white/5
                                            border border-gray-200 dark:border-purple-500/20
                                            shadow-lg hover:shadow-2xl
                                            hover:border-purple-400/50 dark:hover:border-purple-500/40
                                            transition-all duration-500
                                            hover:bg-lightHover dark:hover:bg-darkHover
                                            overflow-hidden
                                        `}
                                    >
                                        {isCurrent && (
                                            <span className="absolute top-2 right-2 md:top-4 md:right-4 flex w-2 h-2 md:w-3 md:h-3">
                                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                                <span className="relative inline-flex rounded-full w-full h-full bg-green-500 shadow-sm shadow-green-500/40"></span>
                                            </span>
                                        )}

                                        <div className="px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 pb-14 flex flex-col items-start">
                                            {item.icon && (
                                                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 mb-4 shadow-sm">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.title}
                                                        width={36}
                                                        height={36}
                                                        className="object-contain"
                                                    />
                                                </div>
                                            )}

                                            <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
                                                {item.title}
                                            </h3>

                                            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700 dark:text-white/80">
                                                {item.type === "Education" ? (
                                                    <GraduationCap size={16} className="text-blue-500 dark:text-blue-400" />
                                                ) : (
                                                    <Briefcase size={16} className="text-green-500 dark:text-green-400" />
                                                )}
                                                {item.organization}
                                            </div>

                                            {item.type === "Education" && item.score && (
                                                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-white/60 my-1">
                                                    <Star className="w-3.5 h-3.5 text-yellow-500 group-hover:scale-110 transition" />
                                                    {item.score}
                                                </div>
                                            )}

                                            {item.type === "Experience" && item.description && (
                                                <p className="text-xs md:text-sm text-gray-700 dark:text-white/80 leading-5 md:leading-6 py-2 text-justify">
                                                    {item.description}
                                                </p>
                                            )}

                                            {item.type === "Experience" && item.skills?.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {item.skills.map((skill, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex items-center gap-1 px-1.5 py-1 rounded-md 
                                                            bg-gray-100 dark:bg-white/10 
                                                            text-[9px] md:text-xs text-gray-700 dark:text-white/80
                                                            border border-gray-200 dark:border-white/10 backdrop-blur-sm"
                                                        >
                                                            {skill.icon && (
                                                                <Image
                                                                    src={skill.icon}
                                                                    alt={skill.name}
                                                                    width={16}
                                                                    height={16}
                                                                    className="object-contain"
                                                                />
                                                            )}
                                                            <span>{skill.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="absolute bottom-4 right-4 text-xs md:text-sm font-medium text-gray-500 dark:text-white/60">
                                                {item.duration}
                                            </div>
                                        </div>
                                    </motion.div>
                                    {index < filteredItems.length - 1 && (
                                        <div className="w-full flex justify-center pt-4 md:hidden text-gray-400 dark:text-purple-500/40">
                                            <ChevronDown size={20} className="animate-bounce" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Journy;
