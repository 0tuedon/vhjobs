import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Connection from "@/svg/connection 1.svg";

const Have = () => {
  return (
    <section className="relative min-h-fit w-full p-5 mb-10">
      <div className="w-full min-h-fit sm:max-w-5xl sm:mx-auto bg-[#F4F4F4] sm:bg-white rounded-lg drop-shadow-lg">
        <div className="px-5 md:px-10 pt-10 md:flex justify-between items-center">
          <div className="mb-5 md:max-w-lg">
            <h1 className="text-3xl font-bold sm:text-4xl mb-2 sm:mb-3">
              Have a need to get <span className="text-primary">done</span>?
            </h1>
            <p className="text-sm md:text-base mb-5">
              Vhjobs is a platform created for individuals and businesses
              looking for people to help them handle their tasks. Vhjobs
              connects these individuals/businesses with skilled professionals
              that are closest to them. Why stress when vhjobs is here.
            </p>
            <Link href="/" passHref>
              <a className="bg-primary rounded-full w-full text-center text-white flex justify-center md:max-w-xs gap-3 sm:p-3 py-3 text-xs font-medium sm:text-sm items-center">
                <span>Tell us what you need to get done</span>
                <AiOutlineArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
          <div className="w-fit mx-auto">
            <Image src={Connection} alt="connection" />
          </div>
        </div>
        <div className="w-full rounded-b-lg h-20 bg-gradient-to-bl from-[#09263D] to-[#1C71B7] mt-5 text-white text-center px-3 md:px-10 py-2">
          <div className="flex justify-between items-start h-full md:max-w-2xl md:mx-auto gap-5">
            <div className="border-r h-full flex flex-col items-center justify-center pr-1 sm:px-5 md:px-16">
              <h2 className="font-semibold text-lg md:text-2xl">5k+</h2>
              <p className="text-sm opacity-70">Packages sold</p>
            </div>
            <div className="border-r h-full flex flex-col items-center justify-center pr-1 sm:px-5 md:px-16">
              <h2 className="font-semibold text-lg md:text-2xl">1k+</h2>
              <p className="text-sm opacity-70">Customers</p>
            </div>
            <div className="h-full flex flex-col items-center justify-center sm:px-5 md:px-16">
              <h2 className="font-semibold text-lg md:text-2xl">200+</h2>
              <p className="text-sm opacity-70">Handled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Have;
