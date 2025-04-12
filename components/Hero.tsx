import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className={"flex flex-row max-lg:flex-col"}>
      <div className="flex flex-col gap-4">
        <h1
          className={
            "font-black lg:text-6xl text-4xl leading-tight font-montserrat"
          }
        >
          Ace Your Exams With AI-Powered Revision
        </h1>

        <p className={"text-base lg:text-2xl p-2 max-w-2xl font-light"}>
          Upload your questions, tutorial sheets and let us help you generate
          structured quizzes to help you easily grasp the concept
        </p>

        <Link href={"/study"}>
          <Button
            className={
              "py-8 lg:max-w-lg mt-4 mx-1 text-lg flex items-center max-lg:mx-auto"
            }
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

      <div
        className={
          "rounded-3xl bg-blue-100 flex justify-center items-center my-4 py-6 max-lg:hidden lg:w-[500px] lg:mx-10 lg:h-[300px]"
        }
      >
        <Image
          src={"/book.svg"}
          alt={"book"}
          width={200}
          height={200}
          className={"object-contain absolute z-0"}
        />
      </div>
    </section>
  );
};
