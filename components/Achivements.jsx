"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { certificateData } from "@/assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  Building2,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const Achivements = () => {
  const swiperRef = useRef(null);

  return (
    <motion.section
      id="achivements"
      className="w-full px-[6%] sm:px-[10%] py-20 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading */}

      <h4 className="text-center text-lg font-Ovo mb-2">
        Achievements
      </h4>

      <h2 className="text-center text-4xl md:text-5xl font-Ovo">
        Certifications
      </h2>

      <p className="text-center text-gray-500 dark:text-white/60 mt-3">
        Certifications and achievements I’ve earned
      </p>

      {/* Slider */}

      <div className="relative mt-14">

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          centeredSlides
          watchSlidesProgress
          loop
          spaceBetween={14}
           slidesPerView={1.8}
          autoplay={{
            delay: 4500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1.05,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 1.4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            }
          }}
          className="achievement-swiper"
        >
          {certificateData.map(
            (
              { title, issuer, date, link, bgImage, imagePosition },
              index
            ) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className=" group relative overflow-hidden rounded-[24px] h-[500px] sm:h-[550px] lg:h-[650px] border border-gray-200 dark:border-white/10  hover:border-black/20 dark:hover:border-white transition-all duration-500 achievement-card"
                >
                  {/* Background Image */}

                  <div className="absolute inset-0">
                    <Image
                      src={bgImage}
                      alt={title}
                      fill
                      quality={100}
                      priority={index === 0}
                      sizes="(max-width:768px) 90vw, (max-width:1024px) 60vw, 40vw"
                      className=" object-cover lg:group-hover:blur-0 brightness-90 sm:brightness-80 lg:brightness-75 transition-all duration-700 group-hover:blur-0 group-hover:brightness-100 "
                      style={{
                        objectPosition: imagePosition || "center",
                      }}
                    />
                  </div>

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent " />

                  {/* Content */}

                  <div
                    className=" absolute bottom-3 left-3 right-3 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-2xl border border-white/20 shadow-xl p-4 sm:p-5 text-white"
                  >
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl line-clamp-2 font-semibold leading-tight">
                      {title}
                    </h3>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-white/80">
                          <Building2 size={16} />
                          <span className="text-sm">{issuer}</span>
                        </div>

                        <div className="mt-1 flex items-center gap-2 text-white/60">
                          <Calendar size={15} />
                          <span className="text-xs">{date}</span>
                        </div>
                      </div>

                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto justify-center shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 border border-white/20 backdrop-blur-lg hover:bg-white/25 text-white font-medium hover:scale-105 transition-all duration-300"
                        >
                          View
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>

              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Achivements;
