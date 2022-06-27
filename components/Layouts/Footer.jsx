import React from "react";
import FooterLinks from "./FooterLinks";
import { data } from "$/links";

const Footer = () => {
  return (
    <footer className="h-fit bg-accent p-5 pt-36 text-white">
      <div className="mb-5">
        <div className="space-y-4">
          {data.map((detail, i) => (
            <FooterLinks key={i} detail={detail} />
          ))}
        </div>
        <div></div>
      </div>
      <div className="border-t border-white w-full"></div>
    </footer>
  );
};

export default Footer;
