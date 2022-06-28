import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const FaqCard = () => {
  const [isOpened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened(!isOpened);
  };

  return (
    <div
      className={`bg-white rounded-md drop-shadow-lg transition-all linear duration-200 w-fit px-5 pt-2 overflow-hidden ${
        isOpened && "pb-4"
      }`}
    >
      <span
        className={`flex items-center justify-between gap-3 ${
          !isOpened && "md:py-3"
        }`}
      >
        <h3
          className={`${
            isOpened && "text-primary"
          } font-semibold md:font-bold text-sm sm:text-base mb-3`}
        >
          Can I subcribe me than one package at once?{" "}
        </h3>
        <span>
          {isOpened ? (
            <AiOutlineMinus
              className="w-5 h-5 font-bold cursor-pointer text-primary"
              onClick={handleToggle}
            />
          ) : (
            <AiOutlinePlus
              className="w-5 h-5 font-bold cursor-pointer"
              onClick={handleToggle}
            />
          )}
        </span>
      </span>
      <p
        className={`text-sm ${
          isOpened ? "h-auto" : "h-0"
        } md:text-lg sm:text-base`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
        viverra aliquet lectus morbi suspendisse pellentesque facilisis et. Duis
        volutpat at iaculis vitae at ut ultricies.
      </p>
    </div>
  );
};
