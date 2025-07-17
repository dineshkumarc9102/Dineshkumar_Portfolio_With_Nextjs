import React from 'react';
import { motion } from "framer-motion";
import { certificateData } from '@/assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const Education = () => {
    return (
        <motion.div id='achivements' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Achievements
            </motion.h4>

            <motion.h2 className='text-center text-5xl font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                Certification
            </motion.h2>

            <motion.div className='my-10 '
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
            >
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!overflow-visible"
                >
                    {certificateData.map(({ title, issuer, date, link, bgImage }, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700 transition-transform duration-300 hover:scale-105 flex flex-col justify-between min-h-[450px] bg-white dark:bg-gray-900"
                            >
                                {/* Background Image */}
                                <div className="w-full h-[250px] flex justify-center items-center overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <Image
                                        src={bgImage}
                                        alt={title}
                                        width={250}
                                        height={250}
                                        className="object-contain max-h-[230px] p-4"
                                    />
                                </div>

                                {/* Details Section */}
                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h1>
                                        <h2 className="text-md text-gray-700 dark:text-gray-300">{issuer}</h2>
                                        <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-4">{date}</h4>
                                    </div>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-block px-4 py-2 text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-100 transition-colors"
                                    >
                                        View Certificate
                                    </a>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </motion.div>
    );
};

export default Education;
