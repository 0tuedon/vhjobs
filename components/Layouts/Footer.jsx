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
  const socialIcons = [];
  return (
    <footer className="h-fit bg-accent p-5 md:px-10 pt-40 text-white">
      <div className="mb-5 md:flex justify-between items-start md:gap-5">
        <div className="sm:flex justify-between items-start md:flex-1 gap-4 mb-3 md:max-w-lg">
          {data.map((detail, i) => (
            <FooterLinks key={i} detail={detail} />
          ))}
        </div>
        <div className="md:flex items-start gap-10 md:max-w-lg ">
          <div className="border-t border-white md:border-transparent py-3">
            <h3 className="text-base font-medium mb-3 capitalize">Get app</h3>
            <span className="gap-3 flex flex-wrap">
              <Link href="/" passHref>
                <a className="text-white w-fit text-sm flex justify-between items-center rounded-md border py-2 px-2 sm:px-5 gap-2">
                  <IoLogoGooglePlaystore className="w-6 h-6" />
                  <span className="flex flex-col">
                    <p className="text-xs opacity-80">Download from</p>
                    <h4>PlayStore</h4>
                  </span>
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="text-white text-sm w-fit  flex justify-between items-center rounded-md border py-2 px-2 sm:px-5 gap-2">
                  <BsApple className="w-6 h-6" />
                  <span className="flex flex-col">
                    <p className="text-xs opacity-80">Download from</p>
                    <h4>AppleStore</h4>
                  </span>
                </a>
              </Link>
            </span>
          </div>
          <div className="border-t border-white md:border-transparent py-3 flex-1 w-full">
            <h3 className="text-base font-medium mb-3 capitalize">Follow us</h3>
            <span className="flex gap-3">
              <span className="border rounded-full py-2 px-3 grid place-items-center w-fit">
                <GrFacebookOption className="w-5 h-5 text-[#1877F2]" />
              </span>
              <span className="border rounded-full py-2 px-3 grid place-items-center w-fit">
                <BsTwitter className="w-5 h-5 text-[#1DA1F2]" />
              </span>
              <span className="border rounded-full py-2 px-3 grid place-items-center w-fit">
                <GrLinkedinOption className="w-5 h-5 text-[#0E76A8]" />
              </span>
              <span className="border rounded-full py-2 px-3 grid place-items-center w-fit">
                <BsYoutube className="w-5 h-5 text-[#FF0000]" />
              </span>
              <span className="border rounded-full p-4 grid place-items-center h-10 w-10 relative">
                <Image src={Instagram} alt="instagram" layout="fill" />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white w-full py-3">
        <div className="flex justify-between items-center w-full">
          <ul className="md:flex gap-3 hidden flex-1">
            {["trust & safety", "privacy policy", "terms of service"].map(
              (l, i) => (
                <li key={i}>
                  <Link href="/" passHref>
                    <a className="text-xs capitalize sm:text-sm opacity-80 transition-all duration-200 linear hover:underline font-medium">
                      {l}
                    </a>
                  </Link>
                </li>
              )
            )}
          </ul>
          <span className="bg-[#F4F4F4]/10 rounded-md gap-3 px-2 py-1 mb-3 md:w-fit max-w-xs mx-auto flex justify-center items-center">
            <span className="flex items-center gap-3 border-r-2 border-white h-full pr-3">
              <Image src={Country} alt="country" />
              <h4 className="text-sm">Country: NG</h4>
            </span>
            <span className="text-sm flex items-center">
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
          &copy; {new Date().getFullYear().toString()}. Vhjobs services limited
        </p>
      </div>
    </footer>
  );
};

export default Footer;
