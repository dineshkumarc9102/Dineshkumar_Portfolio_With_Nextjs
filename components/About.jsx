"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FolderKanban, Briefcase, Code, Award } from "lucide-react";


// Counter Component
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


const getExperienceMonths = () => {
  const startDate = new Date(2025, 10, 19);
  const today = new Date();

  let months =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  // Don't count the current month until the 19th arrives
  if (today.getDate() < startDate.getDate()) {
    months--;
  }

  return Math.max(months, 0);
};

const About = () => {

  const experienceMonths = getExperienceMonths();

  return (
    <motion.div
      id="about"
      className="relative w-full px-6 sm:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileInView={{ opacity: 1 }}
    >

      {/* Title */}
      {/* <motion.h4
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Introduction
      </motion.h4> */}

      {/* Header Layout */}
      <motion.h2
        className='text-center text-3xl sm:text-5xl font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Who I Am
      </motion.h2>

      <p className='text-center text-gray-500 dark:text-white/60 mt-2'>
        Introducation
      </p>


      {/* MAIN LAYOUT */}
      <motion.div
        className="flex flex-col lg:flex-row gap-12 items-start my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        

        {/* LEFT → IMAGE */}
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


        {/* RIGHT → TEXT + QUICK OVERVIEW */}
        <div className="flex-1">

          {/* About Text */}
          <p className="mb-6 text-sm sm:text-base text-justify font-Ovo leading-relaxed text-gray-700 dark:text-white/80">
            I am a Data Analyst, Digital Transformation Professional, and Technology Enthusiast currently working as an Executive Trainee at TVS Motor Company. I specialize in transforming business requirements into impactful digital solutions by combining data analytics, enterprise systems knowledge, and modern application technologies.
            <br /><br />
            At TVS Motor Company, I contribute to digital transformation initiatives by collaborating with business stakeholders, UI designers, and development teams to streamline workflows and convert manual processes into efficient digital solutions. My responsibilities span requirement analysis, process improvement, SAP operations, user access management, master data maintenance, dashboard reporting, testing, and solution delivery.
            <br /><br />
            I have hands-on experience in Python, SQL, Power BI, React.js, Node.js, and SAP, enabling me to work across both data and application domains. My interests lie in building data-driven dashboards, analyzing business performance, automating processes, and creating user-centric digital products that drive operational excellence and informed decision-making.
            <br /><br />
            With a strong foundation in analytics, enterprise systems, and web technologies, I am passionate about leveraging data and technology to solve real-world business challenges. I continuously explore emerging technologies, machine learning, and digital innovation to create scalable, impactful, and business-focused solutions.
          </p>


          {/* Quick Overview */}


          <div className="flex flex-wrap justify-center gap-6 mt-8 min-h-[52px]">

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full
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
                repeatType: "reverse",

              }}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}

              viewport={{ once: false, amount: 0.2 }}
            >
              <Code className="w-4 h-4 text-emerald-500" />
              <span>
                <span className="font-semibold text-lg">
                  <Count end={15} />+
                </span>{" "}
                Tech
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full
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
                repeatType: "reverse",

              }}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}

              viewport={{ once: false, amount: 0.2 }}
            >
              <FolderKanban className="w-4 h-4 text-purple-500" />
              <span>
                <span className="font-semibold text-lg">
                  <Count end={10} />+
                </span>{" "}
                Projects
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full
               border border-sky-500
               bg-sky-500/10
               text-sky-600 dark:text-sky-300
               text-sm font-medium"
              animate={{
                y: [0, -10, 0],
                rotate: [-3, 3, -3],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",

              }}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}

              viewport={{ once: false, amount: 0.2 }}
            >
              <Award className="w-4 h-4 text-sky-500" />
              <span>
                <span className="font-semibold text-lg">
                  <Count end={10} />+
                </span>{" "}
                Certifications
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 px-5 py-3 min-h-[52px] rounded-full
             border border-pink-500 bg-pink-500/10
             text-pink-600 dark:text-pink-300 text-sm font-medium"
              animate={{
                y: [0, -8, 0],
                rotate: [2, -2, 2],
              }}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}

              viewport={{ once: false, amount: 0.2 }}
            >
              <Briefcase className="w-4 h-4 sm:w-2 text-pink-500 flex-shrink-0" />

              <span>
                <span className="font-semibold text-lg">
                  <Count end={experienceMonths} />+
                </span>{" "}
                Months • Executive Trainee @ TVS Motor Company
              </span>
            </motion.div>

          </div>
        </div>

      </motion.div >

    </motion.div >
  );
};

export default About;
