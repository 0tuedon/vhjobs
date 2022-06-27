import Logo from "assets/icons/Logo";
import Link from "next/link";
import React from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 md:px-10 bg-white">
      <Link href="/" passHref>
        <a>
          <Logo className="w-32" />
        </a>
      </Link>
      <div className="flex items-center space-x-5">
        <ul className="hidden md:flex justify-between items space-x-5">
          <li>
            <Link href="/" passHref>
              <a className="text-sm font-medium">Become a service provider</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a className="bg-primary rounded-full text-sm px-8 py-2 text-white font-medium">
                Sign In
              </a>
            </Link>
          </li>
        </ul>
        <button className="transition-transform duration-200 hover:scale-125">
          <BiMenu className="w-8 h-8 text-primary md:text-black" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
