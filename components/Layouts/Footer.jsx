import React from "react";
import FooterLinks from "./FooterLinks";
import { data } from "$/links";
import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import Image from "next/image";
import Instagram from "@/icons/Instagram.svg";
import Country from "@/icons/Country.svg";

const Footer = () => {
  return (
    <footer className="p-5 text-white md:pt-40 h-fit bg-accent md:px-16">
      <div className="max-w-[1500px] mx-auto">
        <div className="items-start justify-between mb-5 md:flex md:gap-5">
          <div className="items-start justify-between gap-4 mb-3 sm:flex md:flex-1 md:max-w-lg">
            {data.map((detail, i) => (
              <FooterLinks key={i} detail={detail} />
            ))}
          </div>
          <div className="items-start gap-10 md:flex md:max-w-lg ">
            <div className="py-3 border-t border-white md:border-transparent">
              <h3 className="mb-3 text-base font-medium capitalize">Get app</h3>
              <span className="flex flex-wrap gap-3">
                <Link href="/" passHref>
                  <a className="flex items-center justify-between gap-2 px-2 py-2 text-sm text-white border rounded-md w-fit sm:px-5">
                    <IoLogoGooglePlaystore className="w-6 h-6" />
                    <span className="flex flex-col">
                      <p className="text-xs opacity-80">Download from</p>
                      <h4>PlayStore</h4>
                    </span>
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className="flex items-center justify-between gap-2 px-2 py-2 text-sm text-white border rounded-md w-fit sm:px-5">
                    <BsApple className="w-6 h-6" />
                    <span className="flex flex-col">
                      <p className="text-xs opacity-80">Download from</p>
                      <h4>AppleStore</h4>
                    </span>
                  </a>
                </Link>
              </span>
            </div>
            <div className="flex-1 w-full py-3 border-t border-white md:border-transparent">
              <h3 className="mb-3 text-base font-medium capitalize">
                Follow us
              </h3>
              <span className="flex gap-3">
                <span className="grid w-10 h-10 border rounded-full place-items-center">
                  <GrFacebookOption className="w-5 h-5 text-[#1877F2]" />
                </span>
                <span className="grid w-10 h-10 border rounded-full place-items-center">
                  <BsTwitter className="w-5 h-5 text-[#1DA1F2]" />
                </span>
                <span className="grid w-10 h-10 border rounded-full place-items-center">
                  <GrLinkedinOption className="w-5 h-5 text-[#0E76A8]" />
                </span>
                <span className="grid w-10 h-10 border rounded-full place-items-center">
                  <BsYoutube className="w-5 h-5 text-[#FF0000]" />
                </span>
                <span className="relative grid w-10 h-10 border rounded-full place-items-center">
                  <Image src={Instagram} alt="instagram" layout="fill" />
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full py-3 border-t border-white">
          <div className="flex items-center justify-between w-full">
            <ul className="flex-1 hidden gap-3 md:flex">
              {["trust & safety", "privacy policy", "terms of service"].map(
                (l, i) => (
                  <li key={i}>
                    <Link href="/" passHref>
                      <a className="text-xs font-medium capitalize transition-all duration-200 sm:text-sm opacity-80 linear hover:underline">
                        {l}
                      </a>
                    </Link>
                  </li>
                )
              )}
            </ul>
            <span className="bg-[#F4F4F4]/10 rounded-md gap-3 px-2 py-1 mb-3 md:w-fit max-w-xs mx-auto flex justify-center items-center">
              <span className="flex items-center h-full gap-3 pr-3 border-r-2 border-white">
                <Image src={Country} alt="country" />
                <h4 className="text-sm">Country: NG</h4>
              </span>
              <span className="flex items-center text-sm">
                <h4>Currency:</h4>
                <select
                  name="currency"
                  className="bg-transparent outline-none cursor-pointer"
                >
                  {["NGN", "USD", "EUR"].map((c, i) => (
                    <option key={i} value={c} className="text-black">
                      {c}
                    </option>
                  ))}
                </select>
              </span>
            </span>
          </div>
          <p className="text-sm text-center opacity-80 md:text-left">
            &copy; {new Date().getFullYear().toString()}. Vhjobs services
            limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
