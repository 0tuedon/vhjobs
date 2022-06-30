import Image from "next/image";
import React from "react";
import IphoneT from "@/svg/iPhoneT.svg";
import IphoneT2 from "@/svg/iphoneT.png";
import Arrow from "@/svg/Arrow.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  return (
    <section className="bg-[#061725] 
    md:py-[70px]
    md:px-[20px]
    md:h-[130vh] text-white 
    h-fit
    mb-16">
      <div className="
      my-auto
      md:h-[104vh] overflow-hidden
       max-w-7xl md:flex md:items-start 
        md:pt-14">
        <div className="p-5 mb-3 md:w-2/4  md:max-w-[500px]">
          <h1 className="
          
          mb-2 text-3xl font-bold sm:text-4xl 
          
          lg:text-[70px] md:leading-[4rem] sm:mb-3">
            What people saying
          </h1>
          <p className=" text-sm font-light sm:text-base lg:text-xl">
          In simple term,
           we connnect people with 
           skilled professionals for their Personal and Business needs
          </p>
          <div className="hidden md:block ">
            <Image src={Arrow} alt="arrow" height={200} />
          </div>
        </div>
        <div className="relative md:hidden h-80
        ml-[-30px]
        w-[44rem] md:w-3/4 md:h-[80vh]">
          <Image src={IphoneT} alt="testimonial" height={400} layout="fill" />
        </div>
        <div className="relative h-40 w-[33rem] hidden md:flex md:max-h-[550px] md:w-3/4 md:h-[70vh]">
          <Image src={IphoneT2} alt="testimonial" height={400} layout="fill" />
        </div>
      </div>
      <span className="items-start justify-between hidden mt-1 mb-5 ml-auto mr-10 space-x-3 md:flex w-fit">
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
