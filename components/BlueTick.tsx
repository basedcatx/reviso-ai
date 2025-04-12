import React from "react";
import Image from "next/image";

const BlueTick = () => {
  return (
    <div className={"bg-green-100 z-10"}>
      <Image src={"/tick.svg"} alt={"blue tick"} width={30} height={30} />;
    </div>
  );
};
export default BlueTick;
