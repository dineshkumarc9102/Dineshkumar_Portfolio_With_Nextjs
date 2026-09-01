"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  Building2,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

import { certificateData } from "@/assets/assets";

import "swiper/css";
import "swiper/css/pagination";

const Achievements = () => {
  const swiperRef = useRef(null);

  return (
    <section
      id="achivements"
      className="relative w-full py-24 px-[6%] lg:px-[10%]"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="text-center"
      >
        <p className="text-center text-lg mb-2 font-Ovo">
          Achievements
        </p>

        <h2 className="text-center text-3xl sm:text-5xl font-Ovo">
          Certifications
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70">
          Industry Certifications & Credentials
        </p>
      </motion.div>

      {/* Slider */}

      <div className="mt-16">

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          centeredSlides
          loop
          watchSlidesProgress
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 14,
            },
            480: {
              slidesPerView: 1.18,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1.45,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.8,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 2.15,
              spaceBetween: 28,
            },
          }}
          className="achievement-swiper"
        >
          {certificateData.map((item, index) => (
            <SwiperSlide key={index}>
              <CertificateCard {...item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Achievements;



function CertificateCard({
  title,
  issuer,
  date,
  link,
  bgImage,
}) {
  return (
    <motion.article
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: .35,
      }}
      className=" group relative overflow-hidden rounded-2xl h-[430px] sm:h-[500px] md:h-[580px] lg:h-[650px] border border-gray-200 dark:bg-white/10 dark:border-white/10 shadow-lg dark:shadow-none transition-all duration-500 "
    >
      {/* Image */}

      <div className="relative h-[220px] sm:h-[300px] lg:h-[320px] overflow-hidden">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Overlay */}

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent dark:from-black dark:via-black/30"
      />

      {/* Bottom Glass */}

      <div
        className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 rounded-2xl bg-white/80 dark:bg-white/30 backdrop-blur-2xl border border-white/60 dark:border-white/20 text-gray-900 dark:text-white shadow-xl p-4 sm:p-6"
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight line-clamp-2">
          {title}
        </h3>

        <div className="mt-5 space-y-2">

          <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-white/80">
            <Building2 size={17} />
            <span>{issuer}</span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm  text-gray-500 dark:text-white/60">
            <Calendar size={16} />
            <span>{date}</span>
          </div>

        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=" mt-5 inline-flex items-center justify-center w-full sm:w-auto gap-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black px-5 sm:px-5 py-3 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Certificate
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
