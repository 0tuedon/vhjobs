import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Connection from "@/svg/connection 1.svg";

const Have = () => {
  return (
    <section className="relative w-full p-5 mb-10 min-h-fit">
      <div className="w-full min-h-fit max-w-[68rem] sm:mx-auto bg-[#F4F4F4] sm:bg-white rounded-lg drop-shadow-lg">
        <div className="items-center justify-between px-5 pt-10 md:px-10 md:flex">
          <div className="mb-5 md:max-w-lg">
            <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl md:leading-[4rem] sm:mb-3 md:mb-5 max-w-sm">
              Have a need to get <span className="text-primary">done</span>?
            </h1>
            <p className="mb-5 text-sm sm:text-base md:text-[1.4rem] md:leading-[2rem]">
              Vhjobs is a platform created for individuals and businesses
              looking for people to help them handle their tasks. Vhjobs
              connects these individuals/businesses with skilled professionals
              that are closest to them. Why stress when vhjobs is here.
            </p>
            <Link href="/" passHref>
              <a className="flex items-center justify-center w-full gap-3 py-3 text-xs font-medium text-center text-white rounded-full md:text-base bg-primary md:max-w-xs sm:p-3 sm:text-sm">
                <span>Tell us what you need to get done</span>
                <AiOutlineArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
          <div className="relative mx-auto w-fit md:h-96 md:w-96">
            <Image src={Connection} alt="connection" layout="fill" />
          </div>
        </div>
        <div className="w-full rounded-b-lg min-h-20 bg-gradient-to-bl from-[#09263D] to-[#1C71B7] mt-5 text-white text-center px-3 md:px-10 py-2">
          <div className="flex items-start justify-between h-full gap-5">
            <div className="flex flex-col items-center justify-between flex-auto h-full py-3 pr-1 border-r-2">
              <h2 className="text-xl font-semibold sm:text-2xl md:text-5xl md:font-bold">
                5k+
              </h2>
              <p className="mt-3 text-sm opacity-70 md:text-xl md:opacity-100">
                Packages sold
              </p>
            </div>
            <div className="flex flex-col items-center justify-between flex-auto h-full py-3 pr-1 border-r-2">
              <h2 className="text-xl font-semibold sm:text-2xl md:text-5xl md:font-bold">
                1k+
              </h2>
              <p className="mt-3 text-sm opacity-70 md:text-xl md:opacity-100">
                Customers
              </p>
            </div>
            <div className="flex flex-col items-center justify-between flex-auto h-full py-3">
              <h2 className="text-xl font-semibold sm:text-2xl md:text-5xl md:font-bold">
                200+
              </h2>
              <p className="mt-3 text-sm opacity-70 md:text-xl md:opacity-100">
                Handled
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Have;
