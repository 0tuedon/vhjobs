import Image from "next/image";
import React from "react";

const ConvinceCard = ({ data }) => {
  return (
    <div className="w-full h-auto p-5 bg-white rounded-lg drop-shadow-lg md:p-10">
      <div className="relative w-20 h-20 mx-auto md:w-32 md:h-32">
        <Image src={data.Icon} alt="icon" layout="fill" />
      </div>
      <h1 className="mb-2 text-xl md:mb-3 font-bold sm:text-2xl md:text-4xl md:leading-[3rem]">
        {data.title}
      </h1>
      <p className="text-sm sm:text-base md:text-[1.3rem] md:leading-[2rem]">
        {data.description}
      </p>
    </div>
  );
};

export default ConvinceCard;
