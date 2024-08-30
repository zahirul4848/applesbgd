"use client";

import React, { useRef } from "react";
import SectionHeading from "../section-heading";
import { motion, useScroll, useTransform,  } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About Us", 1);
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <motion.p 
        className="mb-3 mx-2" 
        ref={target}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        Welcome to <span className="font-bold">Apples International Ltd.</span>, your trusted partner in creating clean, comfortable, and vibrant spaces. We specialize in a wide range of services, including office cleaning, home cleaning, kitchen and bathroom deep cleaning, sofa and carpet cleaning, and pest control. Whether it's transforming your walls with our expert wallpaper and painting services or ensuring your environment is pest-free, our dedicated team delivers top-quality solutions tailored to your needs. We also provide reliable manpower to support your business operations. At Apples International Ltd., we're committed to enhancing the beauty, safety, and functionality of every space we touch.
      </motion.p>
    </section>
  );
}
