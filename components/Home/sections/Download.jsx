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
    <section className="relative min-h-fit w-full p-5 md:px-10 mb-5">
      <div className="bg-lightblue h-fit relative rounded-lg md:pl-10">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={Vector}
            alt="graphics"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        </div>
        <div className="relative z-10 px-5 pt-5 md:px-10 md:pt-10 md:flex justify-between items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-center md:text-left">
              Download Vhjobs app
            </h1>
            <p className="text-base hidden md:block mb-5">
              Scan the QR code below with your phone camera to download the
              Vhjobs app.
            </p>
            <div className="relative hidden md:block h-32 w-32 bg-white">
              <Image src={QRCode} alt="qr code" layout="fill" />
            </div>
          </div>
          <div className="relative w-full h-96">
            <Image src={Iphone} alt="iphone" layout="fill" />
          </div>
          <span className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 space-y-3">
            <Link href="/" passHref>
              <a className="text-white font-medium flex justify-between items-center rounded-full bg-primary py-3 px-5 gap-2">
                <BsApple />
                <h4>Apple store</h4>
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="text-white font-medium flex justify-between items-center rounded-full bg-primary py-3 px-5 gap-2">
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
