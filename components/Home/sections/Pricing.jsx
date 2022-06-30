import Link from "next/link";
import React from "react";
import PricingCard from "../PricingCard";

const Pricing = () => {
  return (
    <section className="p-5 mb-10 md:px-10 ">
      <div>
        <div className="mb-8 md:text-center">
          <h1 className="mb-1 text-3xl font-bold sm:text-4xl md:text-5xl md:mb-3">
            Get more <span className="text-primary">needs done</span> for less
          </h1>
          <p className="mb-5 text-sm md:text-2xl">
            Services are perfect when they are bundled
          </p>
        </div>
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex md:max-w-6xl items-start md:justify-center md:mx-auto mb-5 md:border-[1.5px] rounded-3xl border-primary h-fit ">
            {Array(3)
              .fill()
              .map((item, i) => (
                <PricingCard features={i} key={i} />
              ))}
          </div>
        </div>
        <Link href="/" passHref>
          <a className="block px-5 py-2 mt-3 mx-auto text-sm border-[1.5px] rounded-full md:py-3 md:font-semibold md:text-lg border-primary text-primary md:px-20 w-fit">
            See more
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
