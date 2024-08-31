"use client"
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import SectionHeading from '../section-heading';
import TestimonialSlider from './testimonial-slider';

const Testimonials = () => {
  const { ref } = useSectionInView("Testimonials");
  return (
    <section
      ref={ref}
      className="mb-28 scroll-mt-28"
      id="testimonials"
    >
      <SectionHeading>Testimonials</SectionHeading>
      <TestimonialSlider/>
    </section>
  )
}

export default Testimonials