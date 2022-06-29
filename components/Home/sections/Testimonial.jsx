import Image from "next/image";
import React from "react";
import IphoneT from "@/svg/iPhoneT.svg";
import Arrow from "@/svg/Arrow.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  return (
    <section className="bg-[#061725] h-fit text-white md:pb-5 mb-16">
      <div className="justify-between mx-auto overflow-hidden max-w-7xl md:flex place-items-start md:px-14 md:pt-14">
        <div className="p-5 mb-5 max-w-fit">
          <h1 className="max-w-sm mb-2 text-3xl font-bold sm:text-4xl md:text-5xl md:leading-[4rem] sm:mb-3">
            What people saying
          </h1>
          <p className="max-w-xs text-sm sm:text-base md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            viverra aliquet lectus morb
          </p>
          <div className="hidden md:block">
            <Image src={Arrow} alt="arrow" height={200} />
          </div>
        </div>
        <div className="relative h-80 w-[33rem] md:w-[58rem] md:h-[32rem]">
          <Image src={IphoneT} alt="testimonial" layout="fill" />
        </div>
      </div>
      <span className="items-center justify-between hidden mt-10 mb-5 ml-auto mr-10 space-x-3 md:flex w-fit">
        <button className="grid w-10 h-10 bg-white rounded-full drop-shadow-md place-items-center">
          <IoIosArrowBack className="w-6 h-6 text-primary" />
        </button>
        <button className="grid w-10 h-10 bg-white rounded-full drop-shadow-md place-items-center">
          <IoIosArrowForward className="w-6 h-6 text-primary" />
        </button>
      </span>
    </section>
  );
};

export default Testimonial;
