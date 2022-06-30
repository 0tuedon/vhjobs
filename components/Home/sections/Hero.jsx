/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "../Form";
import Tag from "../Tag";

const Hero = () => {
  let tags = ["cleaning", "fumigation", "mobile chef", "make up"];
  return (
    <section className="relative max-w-[100vw] lg:min-h-screen sm:mb-14 md:mb-28">
      <div className="relative max-w-[100vw] h-72 md:h-screen lg:h-[110vh] 2xl:h-screen">
      <Image
          src="/hero.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div className="relative min-h-72 sm:absolute sm:bottom-0 sm:text-center  sm:w-full sm:bg-blend-lighten bg-accent sm:bg-transparent">
        <div className="absolute left-0 z-0 w-full h-20 -skew-y-6 sm:hidden backdrop-blur-lg
      
        bg-accent -top-10"></div>
        <div className="relative  z-10 p-5 text-white">
          <div className="h-auto mx-auto sm:max-w-[56rem]">
            <h1 className="mb-2 mt-[10px] text-3xl font-bold 
              
            md:leading-[5rem] sm:font-light sm:text-4xl 
            md:font-black
            md:text-[60px]">
              Hire The Right Professional For Your{" "}
              <span className="text-primary">Business Needs</span>
            </h1>
            <p className="mb-5 text-[17px] font-light sm:text-lg md:text-[36px] md:font-light">
              Professional and affordable services at your fingertips
            </p>
          </div>
          <Form />
          <ul className="flex flex-wrap items-center justify-start gap-2 mx-auto mb-5 sm:font-medium sm:max-w-2xl">
            <h4 className="text-sm md:font-bold md:text-[20px]">
              Popular needs:
            </h4>
            {tags.map((tag, i) => (
              <Tag text={tag} key={i} />
            ))}
            <Link href="/" passHref>
              <a className="text-sm sm:font-semibold md:font-bold text-primary hover:underline md:text-base">
                See more
              </a>
            </Link>
          </ul>
          <div className="relative mx-auto mt-5 md:mt-16 max-w-[68rem] md:h-20">
            <h4 className="mb-3 text-base font-medium sm:text-2xl md:text-5xl sm:font-bold">
              Trusted by<span className="sm:hidden">:</span>
            </h4>
            <div className="absolute left-0 flex items-center justify-between w-full gap-3">
              {Array(3)
                .fill()
                .map((it, i) => (
                  <div
                    key={i}
                    className="h-16 bg-white rounded-md drop-shadow-md md:drop-shadow-2xl white w-44 sm:h-20 sm:w-60 md:w-96 md:h-28"
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
