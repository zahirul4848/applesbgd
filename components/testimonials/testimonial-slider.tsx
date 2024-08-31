"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialData } from '@/lib/data';


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto text-center">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="p-8 shadow-lg rounded-lg"
        >
          {/* <img
            src={testimonialData[currentIndex].avatar}
            alt={testimonialData[currentIndex].name}
            className="w-16 h-16 rounded-full mx-auto mb-4"
          /> */}
          <p className="text-lg italic mb-4">
            "{testimonialData[currentIndex].testimonial}"
          </p>
          <h3 className="text-xl font-semibold">
            {testimonialData[currentIndex].name}
          </h3>
          <p className="text-gray-500">{testimonialData[currentIndex].role}</p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevTestimonial}
          className="p-2 bg-white text-gray-700 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60 rounded-full shadow-md"
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextTestimonial}
          className="p-2 bg-white text-gray-700 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60 rounded-full shadow-md"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
