import Logo from "assets/icons/Logo";
import Link from "next/link";
import React from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="p-4 
    h-[79px]
    max-h-[112px] bg-white md:px-10">
      <div className=" mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <a>
            <Logo className="w-32" />
          </a>
        </Link>
        <div className="flex items-center  space-x-5">
          <ul className="justify-between hidden space-x-5 md:flex items-center">
            <li>
              <Link href="/" passHref>
                <a className=" flex text-[14px] font-medium md:text-[20px]">
                  Become a service provider
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a className="
                h-[48px]
                w-[140px]
                flex
                items-center
                justify-center
                text-sm font-medium text-white rounded-[50px] md:font-normal md:text-base bg-primary">
                  Sign In
                </a>
              </Link>
            </li>
          </ul>
          <button className="transition-transform duration-200 hover:scale-125">
            <BiMenu className="w-8 h-8 text-primary md:text-black" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
