import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const BlueCard = () => {
  return (
    <div
      className={
        "bg-blue-200 flex flex-col rounded-lg items-center gap-4 p-8 row-span-2"
      }
    >
      <h1 className={"text-center bluecard-header"}>
        Ready to Level Up And Get A Grasp Of Those Hard Topics?
      </h1>

      <p className={"text-center text-lg"}>
        They say &#34;learn smarter not harder&#34;; Get started now and
        experience a smart learning like never before
      </p>
      <Link href={"/study"}>
        <Button
          className={"py-8 lg:max-w-lg mt-4 mx-1 text-lg flex items-center"}
        >
          Get started - Upload an image
          <Image
            src={"/bulb.svg"}
            alt={"bulb"}
            width={25}
            height={25}
            className={"brightness-0 invert"}
          />
        </Button>
      </Link>
    </div>
  );
};
