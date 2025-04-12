"use client";

import ImageCard from "@/components/ImageCard";
import { features, onboarding } from "@/constants";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const Onboarding = () => {
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
            end: "bottom 70%",
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
    <section className={"mt-14 mx-4"}>
      <h1 className={"header-text"}>How it works in 3 easy steps</h1>

      <div className={"grid lg:grid-cols-3 grid-cols-1 gap-8 flx"}>
        {onboarding.map((item) => (
          <ImageCard key={item.title} {...item} ref={addItemRefs} />
        ))}
      </div>

      <h1 className={"header-text"}>
        Powerful Features to Enhance Your Learning
      </h1>

      <div className={"grid lg:grid-cols-3 grid-cols-1 gap-8 flx"}>
        {features.map((item) => (
          <ImageCard key={item.title} {...item} {...item} ref={addItemRefs} />
        ))}
      </div>
    </section>
  );
};
