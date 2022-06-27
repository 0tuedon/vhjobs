import { data } from "$/Convincing";
import React from "react";
import ConvinceCard from "../ConvinceCard";

const Still = () => {
  return (
    <section className="relative min-h-fit w-full p-5 md:px-10 mb-5">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold sm:text-4xl mb-2 sm:mb-3 text-center">
          Still not yet <span className="text-purple-700">convinced</span>?
        </h1>
        <p className="text-sm text-center md:text-base">
          Top reasons vhjobs should handle your needs
        </p>
      </div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-8 w-full md:grid-cols-3">
        {data.map((d, i) => (
          <ConvinceCard key={i} data={d} />
        ))}
      </div>
    </section>
  );
};

export default Still;
