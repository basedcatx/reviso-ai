"use client";

import ImageCard from "@/components/ImageCard";
import { features, onboarding } from "@/constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Onboarding = () => {
  const itemRefs = useRef([]);
  const observer = useRef<IntersectionObserver>(null);
  const tl = gsap.timeline({ x: "100%" });

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

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target;

            tl.to(item, {
              x: "0",
              opacity: 1,
              ease: "power2.inOut",
              duration: 0.5,
            });

            observer?.current?.unobserve(item);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    items.forEach((item) => {
      if (item) {
        tl.set(item, {
          x: "100%",
          opacity: 0,
        });

        observer?.current?.observe(item); // Observe each item
      }
    });

    return () => {
      // Cleanup ScrollTriggers to prevent memory leaks
      if (observer.current) {
        observer.current.disconnect();
      }
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
