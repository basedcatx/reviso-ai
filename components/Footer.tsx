"use client";

import React, { useEffect, useRef } from "react";
import { BlueCard } from "@/components/BlueCard";
import { testimonials } from "@/constants";
import TestimonialCard from "@/components/TestimonialCard";
import gsap from "gsap";

const Footer = () => {
  const itemRefs = useRef([]);
  const observer = useRef<IntersectionObserver>(null);

  const addItemRefs = (ref: HTMLElement) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (ref && !itemRefs.current.includes(ref)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      itemRefs.current.push(ref);
    }
  };

  const tl = gsap.timeline({ x: "100%" });

  useEffect(() => {
    const items = itemRefs.current;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target;
            tl.fromTo(
              item,
              {
                translateX: "100%",
                opacity: 0,
              },
              {
                translateX: "0%",
                opacity: 1,
                ease: "bounce.out",
                duration: 1,
              },
            );
            // Disconnect observer after animation starts
            observer?.current?.unobserve(item);
          }
        });
      },
      { threshold: 0.1 },
    );

    items.forEach((item) => {
      observer?.current?.observe(item); // Observe each item
    });

    return () => {
      // Cleanup ScrollTriggers to prevent memory leaks
      if (observer.current) {
        observer.current.disconnect(); // Disconnect observer on unmount
      }
      tl.kill();
    };
  }, []);
  return (
    <footer
      className={
        "grid grid-cols-1 lg:grid-cols-2 mt-14 rounded-md gap-8 mx-4 mb-10 absolute"
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
