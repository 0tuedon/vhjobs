import { data } from "$/Convincing";
import React from "react";
import ConvinceCard from "../ConvinceCard";

const Still = () => {
  return (
    <section className="relative w-full p-5 mb-14 min-h-fit md:px-10">
      <div className="mb-10">
        <h1 className="mb-2 max-w-[20rem] lg:max-w-fit md:leading-[4rem] mx-auto text-3xl font-bold text-center md:text-[3.3rem] sm:text-4xl sm:mb-3 md:mb-5">
          Still not yet <span className="text-[#8B0093]">convinced</span>?
        </h1>
        <p className="text-sm max-w-[15rem] lg:max-w-fit mx-auto text-center md:text-xl sm:text-base">
          Top reasons vhjobs should handle your needs
        </p>
      </div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 w-full text-center md:grid-cols- max-w-[68rem] mx-auto">
        {data.map((d, i) => (
          <ConvinceCard key={i} data={d} />
        ))}
      </div>
    </section>
  );
};

export default Still;
