import React from "react";
import Image from "next/image";

const TestimonialCard = ({
  name,
  sex,
  testimonial,
  ref,
}: {
  name: string;
  testimonial: string;
  ref: (ref: HTMLDivElement) => void;
  sex: string;
}) => {
  return (
    <div
      ref={ref}
      className={
        "bg-blue-50 p-6 flex flex-row gap-4 row-span-2 rounded-lg my-4 items-center"
      }
    >
      <div
        className={
          "border p-1 flex items-center justify-center rounded-full bg-blue-200 w-1/6 h-20"
        }
      >
        <Image
          src={`/avatar-${sex}.svg`}
          alt={"avatar"}
          width={50}
          height={50}
          className={"object-cover"}
        />
      </div>

      <div className={"flex flex-col gap-2 w-5/6"}>
        <h2 className={"text-base font-bold text-slate-700"}>{testimonial}</h2>
        <p className={"text-sm font-light"}>{name}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
