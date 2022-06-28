import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Ready = () => {
  return (
    <section className="p-5 text-center md:p-10 bg-lightblue">
      <h1 className="text-2xl font-bold text-[#8B0093] sm:text-3xl md:text-[3rem] mb-5 md:mb-14">
        Ready to get your need done?
      </h1>
      <Link href="/" passHref>
        <a className="flex items-center justify-center px-8 py-3 mx-auto text-sm font-medium text-white rounded-full hover:gap-2 group md:py-4 md:px-14 md:text-base bg-primary w-fit">
          <span>Explore needs</span>
          <span className="w-0 overflow-hidden transition-all duration-200 -translate-x-3 group-hover:w-fit group-hover:translate-x-0">
            <AiOutlineArrowRight className="w-4 h-4" />
          </span>
        </a>
      </Link>
    </section>
  );
};

export default Ready;
