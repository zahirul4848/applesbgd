"use client"
import React from 'react'
import ImageCarousel from './image-carousel';
import InsideCarousel from './inside-carousel';
import { useSectionInView } from '@/lib/hooks';

const HomeComponent = () => {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="w-full mb-10 sm:mb-0 scroll-mt-[100rem]"
    >
      <ImageCarousel/>
      <div className="block md:hidden">
        <InsideCarousel/>
      </div>
    </section>
  )
}

export default HomeComponent;