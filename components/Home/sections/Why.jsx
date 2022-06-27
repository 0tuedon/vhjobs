import React from "react";
import BusinessNeeds from "../BusinessNeeds";
import PersonalNeeds from "../PersonalNeeds";

const Why = () => {
  return (
    <section className="relative min-h-fit w-full p-5 md:px-10 mb-5">
      <div className="text-center md:max-w-xl md:mx-auto">
        <h1 className="text-3xl font-bold sm:text-4xl mb-2 sm:mb-3">
          Why stress when <span className="text-purple-700">vhjobs</span> is
          here!
        </h1>
        <p className="text-sm md:text-base mb-5 md:w-4/5 md:mx-auto">
          Join thousands of individuals and businesses who trust vhjobs to help
          them handle their needs.
        </p>
      </div>
      <div className="w-full relative space-y-14">
        <PersonalNeeds />
        <BusinessNeeds />
      </div>
    </section>
  );
};

export default Why;
