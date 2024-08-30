"use client"
import React, { useState } from 'react';
import {motion} from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import InsideCarousel from './inside-carousel';

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperCore): void => {
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{ delay: 10000, disableOnInteraction: true }}
      onSlideChange={handleSlideChange}
      className="w-full h-[15rem] md:h-[33rem]"
    >
      <SwiperSlide>
        <div className="sm:grid sm:grid-cols-12 sm:gap-4 w-full h-full">
          <motion.div
            className="hidden sm:flex sm:col-span-5"
            initial={{ opacity: 0, y: 0 }}
            animate={currentSlide === 0 ? { opacity: 1, y: 20 } : { opacity: 0, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <InsideCarousel/>
          </motion.div>
          <img src="/carousel_1.jpg" alt="Slide 1" className="w-full h-full object-cover sm:col-span-7 sm:rounded-bl-3xl" />  
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:grid sm:grid-cols-12 sm:gap-4 w-full h-full">
          <motion.div
            className="hidden sm:flex sm:col-span-5"
            initial={{ opacity: 0, y: 0 }}
            animate={currentSlide === 1 ? { opacity: 1, y: 20 } : { opacity: 0, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <InsideCarousel/>
          </motion.div>
          <img src="/carousel_2.jpg" alt="Slide 2" className="w-full h-full object-cover sm:col-span-7 sm:rounded-bl-3xl" />
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sm:grid sm:grid-cols-12 sm:gap-4 w-full h-full">
          <motion.div
            className="hidden sm:flex sm:col-span-5"
            initial={{ opacity: 0, y: 0 }}
            animate={currentSlide === 2 ? { opacity: 1, y: 20 } : { opacity: 0, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <InsideCarousel/>
          </motion.div>
          <img src="/carousel_3.jpg" alt="Slide 3" className="w-full h-full object-cover sm:col-span-7 sm:rounded-bl-3xl" />
          
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="relative">
          <img src="/carousel_3.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          <motion.div
            className="absolute inset-0 hidden md:flex"
            initial={{ opacity: 0, y: 0 }}
            animate={currentSlide === 2 ? { opacity: 1, y: 20 } : { opacity: 0, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <InsideCarousel/>
          </motion.div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
}