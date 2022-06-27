import React from "react";
import Blobs from "@/svg/Blobs.svg";
import Banner from "@/svg/Banner.svg";
import Image from "next/image";
import Link from "next/link";

const Offer = () => {
  return (
    <section className="p-5 md:px-10 relative h-72">
      <div className="absolute h-auto bg-primary rounded-lg top-12 left-1/2 -translate-x-1/2 w-[90%]">
        <div className="h-full w-full absolute top-0 left-0">
          <Image src={Blobs} alt="blobs" layout="fill" />
        </div>
        <div className="relative z-10 p-5 sm:flex justify-between items-center sm:px-10">
          <div className="relative h-44 w-64 sm:w-96 sm:h-72 mx-auto">
            <Image src={Banner} alt="banner" layout="fill" />
          </div>
          <div className="sm:max-w-md">
            <h1 className="text-3xl md:text-4xl font-semibold mb-5 text-white text-center sm:text-left">
              Get 10% discount on your first purchase
            </h1>
            <span className="flex justify-center sm:justify-start gap-5 items-center">
              <Link href="/" passHref>
                <a className="bg-white rounded-full font-medium w-fit text-black text-center py-3 px-8 text-sm">
                  Sign up to claim
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="font-medium rounded-full w-fit text-white text-center py-3 px-5 text-sm">
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
