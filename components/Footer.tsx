"use client";

import React, { useEffect, useRef } from "react";
import { BlueCard } from "@/components/BlueCard";
import { testimonials } from "@/constants";
import TestimonialCard from "@/components/TestimonialCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const itemRefs = useRef([]);

  const addItemRefs = (ref: HTMLElement) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (ref && !itemRefs.current.includes(ref)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      itemRefs.current.push(ref);
    }
  };

  useEffect(() => {
    const items = itemRefs.current;

    items.map((item) => {
      console.log(item);
      gsap.fromTo(
        item,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "sine.in",
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "center 80%",
            scrub: true,
          },
        },
      );
    });

    return () => {
      // Cleanup ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <footer
      className={
        "grid grid-cols-1 lg:grid-cols-2 mt-14 rounded-md gap-8 mx-4 mb-10"
      }
    >
      <div>
        <BlueCard />
      </div>
      <div>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
            ref={addItemRefs}
          />
        ))}
      </div>
    </footer>
  );
};
export default Footer;
