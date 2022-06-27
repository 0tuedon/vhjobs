import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FooterLinks = ({ detail }) => {
  const [isOpened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened(!isOpened);
  };
  return (
    <div className="transition-all linear duration-200 overflow-hidden h-fit">
      <span className="flex justify-between items-center">
        <h3 className="text-base font-medium mb-2 capitalize">
          {detail.title}
        </h3>
        <span className="sm:hidden">
          {isOpened ? (
            <IoIosArrowUp
              className="w-4 h-4 cursor-pointer"
              onClick={handleToggle}
            />
          ) : (
            <IoIosArrowDown
              className="w-4 h-4 cursor-pointer"
              onClick={handleToggle}
            />
          )}
        </span>
      </span>
      <ul className={`${isOpened ? "h-auto" : "h-0"} sm:h-auto`}>
        {detail.links.map((link, i) => {
          if (
            detail.title === "popular needs" &&
            i === detail.links.length - 1
          ) {
            return (
              <li key={i}>
                <Link href="/" passHref>
                  <a className="text-xs capitalize text-primary sm:text-sm opacity-80 transition-all duration-200 linear hover:underline font-medium">
                    {link}
                  </a>
                </Link>
              </li>
            );
          }
          return (
            <li key={i}>
              <Link href="/" passHref>
                <a className="text-xs capitalize sm:text-sm opacity-80 transition-all duration-200 linear hover:underline font-medium">
                  {link}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
