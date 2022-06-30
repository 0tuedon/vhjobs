import React from "react";

const Tag = ({ text }) => {
  return (
    <li className="flex 
    justify-center
    items-center
    px-3 py-1 capitalize transition-all 
    duration-200 border-2 border-white 
    rounded-full cursor-pointer  
    whitespace-nowrap  hover:bg-white
    h-[30px]
    text-[13px]
    min-w-[90px]
     hover:text-black">
      {text}
    </li>
  );
};

export default Tag;
