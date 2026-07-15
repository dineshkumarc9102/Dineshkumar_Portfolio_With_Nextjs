"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FolderKanban, Briefcase, Code } from "lucide-react";

import dynamic from "next/dynamic";

const OrbitSkills = dynamic(() => import("./OrbitSkills"), {
  ssr: false,
});

const ParticleVoid = dynamic(() => import("./ParticleVoid"), {
  ssr: false,
});


// ✅ Counter Component
const Count = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const step = 16;
    const increment = end / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [visible, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  return (
    <motion.div
      id="about"
      className="relative w-full px-6 sm:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >

      {/* ✅ Title */}
      <motion.h4 className="text-center mb-2 text-lg font-Ovo">
        Introduction
      </motion.h4>

      <motion.h2 className="text-center text-3xl sm:text-5xl font-Ovo">
        About Me
      </motion.h2>


      {/* ✅ MAIN LAYOUT */}
      <motion.div
        className="flex flex-col lg:flex-row gap-12 items-start my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >

        {/* ✅ LEFT → IMAGE */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <div className="relative group max-w-xs sm:max-w-sm">

            <Image
              src={assets.new_profile_image}
              alt="Profile"
              width={400}
              height={400}
              className="w-full rounded-3xl transition-all duration-300 group-hover:scale-105"
            />

          </div>
        </div>


        {/* ✅ RIGHT → TEXT + QUICK OVERVIEW */}
        <div className="flex-1">

          {/* ✅ About Text */}
          <p className="mb-6 text-sm sm:text-base text-justify font-Ovo leading-relaxed text-gray-700 dark:text-white/80">
            I’m a Front-End Developer and Product Enthusiast currently working as an Executive Trainee at TVS Motor Company, where I contribute to digital transformation by turning business requirements into scalable digital solutions.
            <br /><br />
            I work at the intersection of business, data, and technology, collaborating with stakeholders, designers, and developers to build dashboards and enterprise applications that streamline workflows and improve efficiency. From requirement analysis and workflow design to UAT validation and release, I’m actively involved throughout the product lifecycle.
            <br /><br />
            I specialize in React, Node.js, and Tailwind CSS, with hands-on experience building data-driven dashboards and integrating tools like Power BI. Alongside development, I have experience in SAP operations (user access, role management, data maintenance), which gives me a strong understanding of enterprise systems.
            <br /><br />
            I’m passionate about building user-centric, data-driven products and continuously exploring ways to create intuitive, scalable, and impactful digital experiences.
          </p>


          {/* ✅ Quick Overview */}


          <div className="flex flex-wrap justify-center gap-6 mt-8">

            <motion.div
              className="px-4 py-2 rounded-full
               border border-purple-500
               bg-purple-500/10
               text-purple-600 dark:text-purple-300
               text-sm font-medium"
              animate={{
                y: [0, -10, 0],
                rotate: [-3, 3, -3],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <FolderKanban className="w-4 h-4 text-purple-500" />
              <span><Count end={5} />+ Projects</span>
            </motion.div>

            <motion.div
              className="px-4 py-2 rounded-full
               border border-pink-500
               bg-pink-500/10
               text-pink-600 dark:text-pink-300
               text-sm font-medium"
              animate={{
                y: [0, -10, 0],
                rotate: [3, -3, 3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <Briefcase className="w-4 h-4 text-pink-500" />
              <span><Count end={7} />+ Months of Experience</span>
            </motion.div>


            <motion.div
              className="px-4 py-2 rounded-full
               border border-emerald-500
               bg-emerald-500/10
               text-emerald-600 dark:text-emerald-300
               text-sm font-medium"
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
            >
              <Code className="w-4 h-4 text-emerald-500" />
              <span><Count end={15} />+ Tech</span>
            </motion.div>
          </div>
        </div>



      </motion.div >

      {/* ✅ Skills Section */}
      < div className="text-center mt-16" >
        <h3 className="text-2xl font-Ovo mb-10">
          Skills & Tools
        </h3>

        {/* ✅ ORBIT WRAPPER FIX */}
        <div className="relative flex justify-center items-center h-[450px] sm:h-[850px] overflow-hidden">

          <div className="absolute inset-0">
            <ParticleVoid
              style={{
                width: "100%",
                height: "100%",
              }}
              x={50}
              y={50}
              radius={40}
              density={30}
              gap={40}
              particleSize={4}
              colors={["#ffffff"]}
              direction="inside"
              speed={2}
            />
          </div>

          {/* Orbit Skills */}
          <div className="relative z-10">
            <OrbitSkills />
          </div>

        </div>
      </div >

    </motion.div >
  );
};

export default About;
