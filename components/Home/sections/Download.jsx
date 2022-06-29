import Image from "next/image";
import React from "react";
import Vector from "@/svg/Vector.svg";
import QRCode from "@/svg/QRCode.svg";
import Iphone from "@/svg/iPhone.svg";
import Playstore from "@/svg/Playstore.svg";
import Link from "next/link";
import { BsApple } from "react-icons/bs";

const Download = () => {
  return (
    <section className="relative w-full p-5 mb-14 min-h-fit md:px-10">
      <div className="bg-lightblue max-w-[68rem] mx-auto h-fit relative rounded-3xl md:pl-10 drop-shadow-xl">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={Vector}
            alt="graphics"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        </div>
        <div className="relative z-10 items-start justify-between px-5 pt-5 md:px-10 md:pt-10 md:flex">
          <div>
            <h1 className="max-w-[10rem] md:max-w-sm mb-5 mx-auto text-2xl font-semibold text-center md:font-bold sm:text-3xl md:text-5xl md:leading-[4rem] md:mb-3 md:text-left">
              Download Vhjobs app
            </h1>
            <p className="hidden max-w-lg mb-5 text-base md:block md:text-2xl">
              Scan the QR code below with your phone camera to download the
              Vhjobs app.
            </p>
            <div className="relative hidden w-32 h-32 mb-8 bg-white md:block">
              <Image src={QRCode} alt="qr code" layout="fill" />
            </div>
          </div>
          <div className="relative w-full h-56 md:mt-8 sm:h-96">
            <Image src={Iphone} alt="iphone" layout="fill" />
          </div>
          <span className="absolute space-y-3 -translate-x-1/2 md:hidden bottom-5 left-1/2">
            <Link href="/" passHref>
              <a className="flex items-center justify-between gap-2 px-3 py-3 text-sm font-medium text-white rounded-full sm:text-base bg-primary sm:px-5">
                <BsApple />
                <h4>Apple store</h4>
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="flex items-center justify-between gap-2 px-3 py-3 text-sm font-medium text-white rounded-full sm:text-base bg-primary sm:px-5">
                <Image src={Playstore} alt="playstore" />
                <h4>Google Play</h4>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Download;
