import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "../Form";
import Tag from "../Tag";

const Hero = () => {
  let tags = ["cleaning", "fumigation", "mobile chef", "make up"];
  return (
    <section className="relative min-h-screen w-full mb-5 sm:mb-10 md:mb-20">
      <div className="relative w-full h-72 sm:h-screen">
        <Image
          src="/hero.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div className="min-h-72 relative sm:absolute sm:bottom-0 sm:text-center sm:bg-gradient-to-b from-black/5 to-accent sm:w-full sm:bg-blend-lighten bg-accent sm:bg-transparent">
        <div className="sm:hidden bg-accent h-20 w-full absolute z-0 left-0 -top-10 -skew-y-6"></div>
        <div className="relative z-10 text-white p-5">
          <div className="sm:max-w-2xl mx-auto">
            <h1 className="text-3xl font-semibold sm:font-bold sm:text-4xl md:text-5xl mb-2">
              Hire The Right Professional For Your{" "}
              <span className="text-primary">Business Needs</span>
            </h1>
            <p className="text-sm mb-5 sm:font-medium sm:text-base">
              Professional and affordable services at your fingertips
            </p>
          </div>
          <Form />
          <ul className="flex justify-start items-center flex-wrap gap-2 mb-5 sm:font-medium sm:max-w-xl mx-auto">
            <h4 className="text-sm">Popular needs:</h4>
            {tags.map((tag, i) => (
              <Tag text={tag} key={i} />
            ))}
            <Link href="/" passHref>
              <a className="text-primary font-medium text-sm hover:underline">
                See more
              </a>
            </Link>
          </ul>
          <div className="relative sm:max-w-3xl mx-auto">
            <h4 className="font-medium text-base mb-3 sm:text-2xl md:text-3xl sm:font-bold">
              Trusted by<span className="sm:hidden">:</span>
            </h4>
            <div className="flex justify-between items-center gap-3 absolute left-0 w-full">
              {Array(3)
                .fill()
                .map((it, i) => (
                  <div
                    key={i}
                    className="white rounded-md shadow-md h-16 w-44 bg-white sm:h-20 sm:w-60"
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
