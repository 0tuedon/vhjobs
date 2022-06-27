import Image from "next/image";
import React from "react";

const ConvinceCard = ({ data }) => {
  return (
    <div className="drop-shadow-lg rounded-lg p-5 w-full max-w-sm bg-white h-64">
      <div className="relative h-20 w-20">
        <Image src={data.Icon} alt="icon" layout="fill" />
      </div>
      <h1 className="text-xl mb-2 font-semibold">{data.title}</h1>
      <p className="text-sm">{data.description}</p>
    </div>
  );
};

export default ConvinceCard;
