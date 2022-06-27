import Image from "next/image";
import React from "react";

const Card = ({ need }) => {
  return (
    <div
      className="text-white sm:w-[16rem] rounded-lg p-5 h-72 grid place-content-center mr-5 md:mr-0"
      style={{ backgroundColor: need.background }}
    >
      <div className="relative h-24 w-24 mb-3">
        <Image src={need.Img} alt="illustration" layout="fill" />
      </div>
      <h1 className="text-base font-semibold text-white sm:text-lg mb-2">
        {need.title}
      </h1>
      <p className="text-xs sm:text-sm">{need.description}</p>
    </div>
  );
};

export default Card;
