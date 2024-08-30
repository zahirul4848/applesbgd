"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { servicesData } from "@/lib/data";
import Service from "./service";
import { useSectionInView } from "@/lib/hooks";

export default function Services() {
  const { ref } = useSectionInView("Services", 0.5);

  return (
    <section ref={ref} id="services" className="scroll-mt-28 mb-28">
      <SectionHeading>Our Services</SectionHeading>
      <div>
        {servicesData.map((project, index) => (
          <React.Fragment key={index}>
            <Service {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
