import React from "react";
import BusinessNeeds from "../BusinessNeeds";
import PersonalNeeds from "../PersonalNeeds";

const Why = () => {
  return (
    <section className="relative w-full p-5 mb-20 min-h-fit md:px-10">
      <div className="md:text-center md:mx-auto md:mb-10">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl sm:mb-3 md:mb-4">
          Why stress when <span className="text-[#8B0093]">vhjobs</span> is
          here!
        </h1>
        <p className="mb-5 text-sm md:text-2xl sm:text-base md:mx-auto md:max-w-xl">
          Join thousands of individuals and businesses who trust vhjobs to help
          them handle their needs.
        </p>
      </div>
      <div className="relative w-full space-y-16 md:px-12">
        <PersonalNeeds />
        <BusinessNeeds />
      </div>
    </section>
  );
};

export default Why;
