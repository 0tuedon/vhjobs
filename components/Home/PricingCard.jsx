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
    <div className="relative h-full border-r w-72 border-primary last-of-type:border-none last-of-type:border-transparent group">
      <span className="text-sm absolute top-0 right-0 px-3 py-1 group-last-of-type:rounded-tr-lg font-medium bg-[#079300] text-white">
        <h3>5% off</h3>
      </span>
      <div className="relative px-3">
        <ul className="pt-12 flex flex-wrap gap-2 items-start justify-start mb-3">
          {tasks.map((task, i) => (
            <li
              key={i}
              className="bg-gradient-to-l w-fit from-[#09263D] to-[#1C71B7] rounded-lg text-white px-3 py-2 text-xs capitalize font-medium"
            >
              {task}
            </li>
          ))}
        </ul>
        <div>
          <div className="flex justify-center items-baseline font-bold mb-3 gap-1">
            <h3 className="text-base line-through decoration-primary bg-gradient-to-l bg-clip-text text-transparent from-[#09263D] to-[#1C71B7]">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "NGN",
              }).format(8500)}
            </h3>
            <h2 className="text-xl md:text-2xl bg-gradient-to-l bg-clip-text text-transparent from-[#09263D] to-[#1C71B7]">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "NGN",
              }).format(6500)}
            </h2>
          </div>
          <Link href="/" passHref>
            <a className="block rounded-full bg-primary text-sm text-white text-center font-medium py-3">
              Get started
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="block text-primary text-sm text-center font-medium py-3">
              Learn more
            </a>
          </Link>
        </div>
        <div>
          {options.map((opt, i) => {
            return (
              <div key={i}>
                <span className="flex justify-start items-center gap-2">
                  <BsCheck className="w-5 h-5" />
                  <h3 className="text-base font-medium mb-3">{opt.title}</h3>
                </span>
                <ul className="space-y-1">
                  {opt.options.map((ot, id) => (
                    <li
                      key={id}
                      className="flex justify-start items-start gap-2"
                    >
                      <span>
                        <BsCheck className="w-5 h-5" />
                      </span>
                      <span className="text-sm">{ot}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <Link href="/" passHref>
            <a className="block text-primary text-sm text-center font-medium py-5">
              See more feature
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
