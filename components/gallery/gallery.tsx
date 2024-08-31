"use client"
import React from 'react';
import ImageGallery from './image-gallery';
import SectionHeading from '../section-heading';
import { useSectionInView } from '@/lib/hooks';



const Gallery = () => {
  const { ref } = useSectionInView("Gallery", 0.65);
  return (
    <section ref={ref} id="gallery" className="scroll-mt-28 mb-28">
      <SectionHeading>Gallery</SectionHeading>
      <div className="mx-auto">
        <ImageGallery/>
      </div>
    </section>
  );
};

export default Gallery;
