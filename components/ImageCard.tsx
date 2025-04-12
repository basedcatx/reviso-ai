"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ImageCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div
      onFocus={() => console.log("inFocus")}
      className={
        "rounded-md bg-blue-50 border flex justify-center items-center p-6 gap-4 flex-col shadow-sm"
      }
    >
      <Image src={icon} alt={"image"} width={100} height={200} />
      <h1 className={"font-bold text-4xl text-center"}>{title}</h1>
      <p className={"text-center font-light text-lg"}>{desc}</p>
    </div>
  );
};
export default ImageCard;
