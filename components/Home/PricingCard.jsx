import Link from "next/link";
import React from "react";
import { BsCheck } from "react-icons/bs";

const PricingCard = () => {
  const options = [
    {
      title: "Three times cleaning",
      options: [
        "Professional light cleaning",
        "Ironing of up to 10 clothes on each visit",
        "Washing of dishes",
        "Laying of beds",
        "Cleaning of living room, 1 bedroom, a kitchen and 2 toilets",
      ],
    },
  ];
  const tasks = [
    "logo designing",
    "ui/ux design",
    "web development",
    "graphic design",
  ];
  return (
    <div className="relative h-full border-r-[1.5px] w-[23rem] border-primary last-of-type:border-none last-of-type:border-transparent group">
      <span className="text-sm absolute top-0 right-0 px-3 py-1 group-last-of-type:rounded-tr-[1.4rem] font-medium bg-[#079300] text-white">
        <h3>5% off</h3>
      </span>
      <div className="relative px-5">
        <ul className="flex flex-col items-start justify-start gap-2 pt-12 mb-3">
          {tasks.map((task, i) => (
            <li
              key={i}
              className="bg-gradient-to-l w-fit from-[#09263D] to-[#1C71B7] rounded-lg text-white px-3 py-2 text-xs md:text-sm drop-shadow-md capitalize font-medium"
            >
              {task}
            </li>
          ))}
        </ul>
        <div>
          <div className="flex items-baseline justify-center gap-2 mb-3 font-bold md:my-4">
            <h3 className="text-lg md:text-2xl line-through decoration-primary bg-gradient-to-l bg-clip-text text-transparent from-[#09263D] to-[#1C71B7]">
              N{new Intl.NumberFormat("en-US", {}).format(8500)}
            </h3>
            <h2 className="text-2xl md:text-4xl bg-gradient-to-l bg-clip-text text-transparent from-[#09263D] to-[#1C71B7]">
              N{new Intl.NumberFormat("en-US", {}).format(6500)}
            </h2>
          </div>
          <Link href="/" passHref>
            <a className="block py-3 text-sm font-medium text-center text-white rounded-full md:text-base bg-primary">
              Get started
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="block py-3 text-sm font-semibold text-center md:text-base text-primary">
              Learn more
            </a>
          </Link>
        </div>
        <div>
          {options.map((opt, i) => {
            return (
              <div key={i}>
                <span className="flex items-center justify-start gap-2">
                  <BsCheck className="w-5 h-5" />
                  <h3 className="mb-2 text-base font-medium md:text-lg md:font-bold">
                    {opt.title}
                  </h3>
                </span>
                <ul className="space-y-1">
                  {opt.options.map((ot, id) => (
                    <li
                      key={id}
                      className="flex items-start justify-start gap-2"
                    >
                      <span>
                        <BsCheck className="w-5 h-5" />
                      </span>
                      <span className="text-sm md:text-base">{ot}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <Link href="/" passHref>
            <a className="block py-5 text-sm font-semibold text-center md:text-lg sm:text-base text-primary">
              See more feature
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
