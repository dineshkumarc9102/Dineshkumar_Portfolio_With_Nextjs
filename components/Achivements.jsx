import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { certificateData } from '@/assets/assets';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Calendar, 
  ExternalLink 
} from "lucide-react";

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';


const Achivements = () => {

  const swiperRef = useRef(null);

  return (
    <motion.div
      id='achivements'
      className='w-full px-[6%] sm:px-[10%] md:px-[12%] py-16 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >

      {/* ✅ Heading */}
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Achievements
      </h4>

      <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo'>
        Certifications
      </h2>

      <p className="text-center text-gray-500 dark:text-white/60 mt-2">
        Certifications and achievements I’ve earned
      </p>


      {/* ✅ Wrapper */}
      <div className="relative mt-12">

        {/* LEFT ARROW */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-10 
          p-2 rounded-full 
          bg-black dark:bg-white/10 backdrop-blur-md
          border border-gray-200 dark:border-white/10
          shadow-md hover:scale-110 transition"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>


        {/* RIGHT ARROW */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-10 
          p-2 rounded-full 
          bg-black dark:bg-white/10 backdrop-blur-md
          border border-gray-200 dark:border-white/10
          shadow-md hover:scale-110 transition"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>


        {/* ✅ Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >

          {certificateData.map(({ title, issuer, date, link, bgImage }, index) => (

            <SwiperSlide key={index}>

              <motion.div
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden 
                backdrop-blur-xl bg-white/50 dark:bg-white/5
                border border-gray-200 dark:border-white/10
                shadow-lg hover:shadow-xl
                transition duration-300"
              >

                {/* ✅ Image */}
                <div className="relative w-full h-[180px] bg-gray-100 dark:bg-white/5 overflow-hidden">
                  <Image
                    src={bgImage}
                    alt={title}
                    fill
                    className="object-contain p-4 transition duration-300 group-hover:scale-105"
                  />
                </div>


                {/* ✅ Content */}
                <div className="p-5 flex flex-col gap-2">

                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    {title}
                  </h3>


                  {/* ✅ Issuer */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/70">
                    <Building2 className="w-4 h-4" />
                    {issuer}
                  </div>


                  {/* ✅ Date */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {date}
                  </div>


                  {/* ✅ Button */}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-1
                    px-3 py-1.5 rounded-md text-xs font-medium 
                    bg-gray-200 dark:bg-white/10
                    text-gray-800 dark:text-white
                    hover:bg-lightHover dark:hover:bg-darkHover
                    transition"
                  >
                    View
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                </div>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </motion.div>
  );
};

export default Achivements;
