"use client";

import { useRef, useState } from "react";
import { servicesData } from "@/lib/data";
import Image from "next/image";
import { BsInfoLg } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import Modal from "./modal";

type ServiceProps = (typeof servicesData)[number];

export default function Service({
  title,
  description,
  imageUrl,
}: ServiceProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-[15rem] sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="hidden sm:block mt-2 leading-relaxed text-gray-700 dark:text-white/70 w-[50%] sm:w-full">
            {description}
          </p>
        </div>

        <Image
          src={imageUrl}
          alt="Service we worked on"
          quality={95}
          className="absolute top-12 sm:top-8 -right-0 sm:-right-40 w-[20rem] sm:w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:sm:-left-40"
        />
        <BsInfoLg className="bg-white text-gray-700 borderBlack dark:bg-white/10 dark:text-white/60 absolute top-0.5 right-0.5 p-1 text-3xl sm:hidden rounded-full" onClick={openModal} />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p>{description}</p>
        </Modal>
      </section>
    </motion.div>
  );
}
