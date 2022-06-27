import Link from "next/link";
import React from "react";
import PricingCard from "../PricingCard";

const Pricing = () => {
  return (
    <section className="p-5 md:px-10 min-h-fit">
      <div>
        <div className="md:text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-1">
            Get more <span className="text-primary">needs done</span> for less
          </h1>
          <p className="text-sm mb-5">
            Services are perfect when they are bundled
          </p>
        </div>
        <div className="overflow-x-auto hide-scrollbar">
          <div className="border border-primary h-fit mb-5 w-fit mx-auto rounded-lg flex justify-center items-start">
            {Array(3)
              .fill()
              .map((item, i) => (
                <PricingCard key={i} />
              ))}
          </div>
        </div>
        <Link href="/" passHref>
          <a className="border border-primary text-primary text-sm rounded-full px-3 py-2 md:px-10 w-fit mx-auto block">
            See more
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
