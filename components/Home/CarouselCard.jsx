import Image from "next/image";
import React from "react";

const Card = ({ need }) => {
  return (
    <div className="flex flex-col  w-full 
    max-h-[170px]
    md:max-h-fit
    max-w-[10rem] md:max-w-[15rem] p-5 mr-5 text-white rounded-lg h-60 md:h-72 md:mr-0 relative">
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg opacity-80"
        style={{ backgroundColor: need.background }}
      ></div>
      <div className="relative  z-10">
        <div className="relative w-24 h-24 mb-3">
          <Image src={need.Img} alt="illustration" layout="fill" />
        </div>
        <h1 className="max-w-[8rem] 
        mb-2 text-white text-lg md:text-[28px] font-bold">
          {need.title}
        </h1>
        <p className="align-self-end font-light hidden text-[15px] md:block">{need.description}</p>
      </div>
    </div>
  );
};

export default Card;
