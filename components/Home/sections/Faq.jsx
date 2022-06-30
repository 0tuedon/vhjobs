import Link from "next/link";
import React from "react";
import { FaqCard } from "../FaqCard";

const Faq = () => {
  return (
    <section className="p-5 mb-10  md:px-10 md:h-[101vh]">
      <div className="max-w-7xl">
        <div className="mb-8 mt-[30px] md:text-center">
          <h1 className="text-3xl sm:text-4xl 
          text-gray
          md:text-[60px] font-black mb-5">
            Frequently Asked Question
          </h1>
          <p className="mb-5 
          text-gray
          md:text-[20px]
          text-sm  md:font-medium">
            Join thousands of individuals and businesses who trust vhjobs to
            help them handle their needs.
          </p>
        </div>
        <div className="max-w-7xl mx-auto space-y-[16px] w-full">
          {Array(3)
            .fill()
            .map((data, i) => (
              <FaqCard key={i} />
            ))}
        </div>
        <Link href="/" passHref>
          <a className="block px-5 py-2 mt-8 mx-auto text-sm border-[1.5px] rounded-full md:py-3 md:font-bold md:text-base border-primary text-primary md:px-16 w-fit">
            Visit FAQ
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Faq;
