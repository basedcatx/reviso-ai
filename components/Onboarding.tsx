"use client";

import ImageCard from "@/components/ImageCard";
import { features, onboarding } from "@/constants";

export const Onboarding = () => {
  return (
    <section className={"mt-14 mx-4"}>
      <h1 className={"header-text"}>How it works in 3 easy steps</h1>

      <div className={"grid lg:grid-cols-3 grid-cols-1 gap-8 flx"}>
        {onboarding.map((item) => (
          <ImageCard key={item.title} {...item} />
        ))}
      </div>

      <h1 className={"header-text"}>
        Powerful Features to Enhance Your Learning
      </h1>

      <div className={"grid lg:grid-cols-3 grid-cols-1 gap-8 flx"}>
        {features.map((item) => (
          <ImageCard key={item.title} {...item} {...item} />
        ))}
      </div>
    </section>
  );
};
