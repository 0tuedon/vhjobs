import React from "react";

const Tag = ({ text }) => {
  return (
    <li className="text-xs border-2 whitespace-nowrap border-white rounded-full px-3 py-2 capitalize inline-block w-fit cursor-pointer hover:bg-white transition-all duration-200 hover:text-black font-medium">
      {text}
    </li>
  );
};

export default Tag;
