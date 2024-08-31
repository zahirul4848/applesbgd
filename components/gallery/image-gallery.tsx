"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {galleryImages} from '@/lib/data';
import Image from 'next/image';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Thumbnails */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={`Thumbnail ${index + 1}`}
            className="cursor-pointer rounded-lg shadow-lg w-24 md:w-40 h-auto hover:scale-105 transition-transform"
            //whileHover={{ scale: 1.05 }}
            onClick={() => handleClick(image.src)}
            width={100}
            height={100}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          />
        ))}
      </div>

      {/* Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={handleClose}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
