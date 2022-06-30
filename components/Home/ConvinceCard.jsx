import Image from "next/image";
import React from "react";

const ConvinceCard = ({ data }) => {
  return (
    <div className="w-full 
    md:min-h-[400px]
    xl:h-[500px] p-5 bg-white rounded-lg drop-shadow-lg md:p-10">
      <div className="relative w-20 h-20 mx-auto md:w-32 md:h-32">
        <Image src={data.Icon} alt="icon" layout="fill" />
      </div>
      <h1 className="mb-2 text-xl 
      text-left
      md:mb-3 font-bold md:font-black sm:text-2xl lg:text-4xl lg:leading-[3rem]">
        {data.title}
      </h1>
      <p className="text-sm text-left 
     
      font-light sm:text-base lg:text-[30px] lg:leading-[50.8px] ">
        {data.description}
      </p>
    </div>
  );
};

export default ConvinceCard;
