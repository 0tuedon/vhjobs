import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const FaqCard = () => {
  const [isOpened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened(!isOpened);
  };

  return (
    <div
      className={`bg-white 
      rounded-md drop-shadow-lg 
      lg:w-[900px]
      mx-auto
      py-[12px]
      -all linear duration-200  px-5  overflow-hidden ${
        isOpened && "pb-4 py-[40px] h-[190px]"
      }`}
    >
      <span
        className={`flex mt-2 items-center justify-between gap-3 ${
          !isOpened && "md:py-3 "
        }`}
      >
        <h3
          className={`${
            isOpened ? "text-primary":'text-gray '
          } font-semibold md:font-bold text-sm sm:text-[23px] mb-3`}
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
          isOpened ? "h-auto" : "h-0 hidden"
        } md:text-lg font-light md:max-w-[600px] sm:text-base`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
        viverra aliquet lectus morbi suspendisse pellentesque facilisis et. Duis
        volutpat at iaculis vitae at ut ultricies.
      </p>
    </div>
  );
};
