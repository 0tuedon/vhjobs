import Link from "next/link";
import React, { useState } from "react";

const FooterLinks = ({ detail }) => {
  const [isOpened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened(!isOpened);
  };
  return (
    <div className="transition-all linear duration-200">
      <span className="flex justify-between items-center">
        <h3 className="text-base font-medium mb-2 capitalize">
          {detail.title}
        </h3>
      </span>
      <ul>
        {detail.links.map((link, i) => (
          <li key={i}>
            <Link href="/" passHref>
              <a className="text-xs capitalize sm:text-sm opacity-80 transition-all duration-200 linear hover:underline font-medium">
                {link}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
