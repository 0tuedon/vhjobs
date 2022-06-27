import React from "react";

const PricingCard = () => {
  return (
    <div className="relative h-full border-r w-72 border-primary last-of-type:border-transparent group">
      <span className="text-sm absolute top-0 right-0 px-3 py-1 group-last-of-type:rounded-tr-lg font-medium bg-[#079300] text-white">
        <h3>5% off</h3>
      </span>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PricingCard;
