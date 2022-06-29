import React from "react";

const Tag = ({ text }) => {
  return (
    <li className="inline-block px-3 py-1 capitalize transition-all duration-200 border-2 border-white rounded-full cursor-pointer text-[0.65rem] whitespace-nowrap w-fit hover:bg-white hover:text-black">
      {text}
    </li>
  );
};

export default Tag;
