import React from "react";
import { BlueCard } from "@/components/BlueCard";
import { testimonials } from "@/constants";
import TestimonialCard from "@/components/TestimonialCard";

const Footer = () => {
  return (
    <footer
      className={"grid grid-cols-1 lg:grid-cols-2 mt-14 rounded-md gap-8 mx-4"}
    >
      <div>
        <BlueCard />
      </div>
      <div>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </footer>
  );
};
export default Footer;
