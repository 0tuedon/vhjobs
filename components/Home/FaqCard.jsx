import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const FaqCard = () => {
  const [isOpened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened(!isOpened);
  };

  return (
    <div
      className={`bg-white rounded-lg drop-shadow-md transition-all linear duration-200 w-fit px-5 pt-2 overflow-hidden ${
        isOpened && "pb-4"
      }`}
    >
      <span className="flex justify-between items-center gap-3">
        <h3
          className={`${
            isOpened && "text-primary"
          } font-semibold text-sm sm:text-base mb-3`}
        >
          Can I subcribe me than one package at once?{" "}
        </h3>
        <span>
          {isOpened ? (
            <AiOutlineMinus
              className="w-5 h-5 text-primary font-medium cursor-pointer"
              onClick={handleToggle}
            />
          ) : (
            <AiOutlinePlus
              className="w-5 h-5 cursor-pointer font-medium"
              onClick={handleToggle}
            />
          )}
        </span>
      </span>
      <p className={`text-sm ${isOpened ? "h-auto" : "h-0"}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
        viverra aliquet lectus morbi suspendisse pellentesque facilisis et. Duis
        volutpat at iaculis vitae at ut ultricies.
      </p>
    </div>
  );
};
