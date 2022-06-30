import React from "react";
import Blobs from "@/svg/Blobs.svg";
import Banner from "@/svg/Banner.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Offer = () => {
  return (
    <section className="relative p-5 md:px-10 h-fit  lg:h-96">
      <div className="static lg:absolute  bg-primary
       rounded-[32px] 
       px-[20px] md:px-[0px]
       h-[340px]
       lg:top-12 lg:left-1/2 lg:-translate-x-1/2 w-[90%] md:max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={Blobs} alt="blobs" layout="fill" />
        </div>
        <div className="relative z-10 items-center justify-between p-2 sm:flex md:pr-16">
          <div className="relative w-64  h-44 sm:w-96 sm:h-72 md:h-96 md:w-[45rem]">
            <Image src={Banner} alt="banner" layout="fill" />
          </div>
          <div>
            <h1 className="max-w-sm mb-5 
            
            text-[21px] font-bold text-center text-white sm:text-3xl md:mb-10 md:text-4xl">
              Get 10% discount on your first purchase
            </h1>
            <span className="flex items-center justify-center gap-5 sm:justify-start">
              <Link href="/" passHref>
                <a className="flex items-center justify-center w-40 px-4 py-2 text-sm font-medium text-center text-black bg-white rounded-full md:w-56 hover:gap-2 group whitespace-nowrap md:text-base md:font-bold md:px-10 md:py-4 sm:py-3 sm:px-8">
                  <span>Sign up to claim</span>
                  <span className="w-0 overflow-hidden transition-all duration-500 ease-in-out scale-0 group-hover:scale-100 group-hover:w-5">
                    <AiOutlineArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="py-2 text-sm font-medium text-center text-white rounded-full md:px-2 w-fit sm:py-3 md:text-base md:font-bold sm:px-3">
                  Learn more
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
