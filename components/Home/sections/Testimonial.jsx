import Image from "next/image";
import React from "react";
import IphoneT from "@/svg/iPhoneT.svg";
import Arrow from "@/svg/Arrow.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  return (
    <section className="bg-[#061725] h-fit text-white md:pb-5 mb-10">
      <div className="overflow-hidden md:flex justify-between place-items-start md:px-10 md:pt-10">
        <div className="mb-3 p-5 max-w-lg">
          <h1 className="text-3xl font-semibold sm:text-4xl mb-2 sm:mb-3">
            What people saying
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            viverra aliquet lectus morb
          </p>
          <div className="hidden md:block">
            <Image src={Arrow} alt="arrow" height={200} />
          </div>
        </div>
        <div className="relative h-80 w-[38rem] md:h-96">
          <Image src={IphoneT} alt="testimonial" layout="fill" />
        </div>
      </div>
      <span className="md:flex justify-between items-center w-fit space-x-3 mr-10 ml-auto hidden mt-5">
        <button className="rounded-full h-10 w-10 bg-white drop-shadow-md grid place-items-center">
          <IoIosArrowBack className="w-6 h-6 text-primary" />
        </button>
        <button className="rounded-full h-10 w-10 bg-white drop-shadow-md grid place-items-center">
          <IoIosArrowForward className="w-6 h-6 text-primary" />
        </button>
      </span>
    </section>
  );
};

export default Testimonial;
