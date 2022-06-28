import Image from "next/image";
import React from "react";

const Card = ({ need }) => {
  return (
    <div className="grid w-full max-w-[15rem] p-5 mr-5 text-white rounded-lg h-72 place-content-center md:mr-0 relative">
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg opacity-80"
        style={{ backgroundColor: need.background }}
      ></div>
      <div className="relative z-10">
        <div className="relative w-24 h-24 mb-3">
          <Image src={need.Img} alt="illustration" layout="fill" />
        </div>
        <h1 className="max-w-[6rem] mb-2 text-base font-semibold text-white sm:text-lg md:text-xl md:font-bold">
          {need.title}
        </h1>
        <p className="text-xs">{need.description}</p>
      </div>
    </div>
  );
};

export default Card;
