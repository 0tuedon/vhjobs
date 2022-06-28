import React from "react";
import Group from "@/svg/Group.svg";
import Image from "next/image";

const Easiest = () => {
  return (
    <section className="relative w-full p-5 mb-10 min-h-fit md:px-20">
      <div className="items-start justify-between md:flex">
        <div className="hidden md:block relative md:h-[32rem] w-full md:w-[50rem] max-w-lg">
          <Image src={Group} alt="group" layout="fill" />
        </div>
        <div className="md:max-w-lg">
          <h1 className="text-3xl font-bold sm:text-4xl mb-2 sm:mb-3 md:text-[3.5rem] md:leading-[4rem]">
            <span className="text-primary">Easiest way</span> to get your&nbsp;
            <span className="text-primary">needs done</span>
          </h1>
          <p className="mb-5 text-sm sm:text-base md:text-xl">
            Get you needs done with three simple steps
          </p>
          <div>
            <div className="relative pb-3 pl-4 border-l-4 border-dashed md:pb-5 md:border-l-[6px] border-primary">
              <div className="absolute -top-[0.2rem] grid w-5 h-5 rounded-full md:w-8 md:h-8 bg-lightblue -left-3 md:-left-5 place-items-center">
                <div className="w-3 h-3 rounded-full bg-primary md:w-4 md:h-4"></div>
              </div>
              <h2 className="text-lg font-semibold md:text-2xl md:mb-1">
                Tell us what you need to get done
              </h2>
              <p className="text-sm md:text-base">
                Tell us about the service you need help with, and all relevant
                information needed to aid our delivery and your satisfaction.
              </p>
            </div>
            <div className="relative pb-3 pl-4 border-l-4 md:border-l-[6px] border-dashed md:pb-5 border-primary">
              <div className="absolute grid w-5 h-5 rounded-full md:w-8 md:h-8 bg-lightblue top-1 -left-3 md:-left-5 place-items-center">
                <div className="w-3 h-3 rounded-full bg-primary md:w-4 md:h-4"></div>
              </div>
              <h2 className="text-lg font-semibold md:text-2xl md:mb-1">
                Subscription to a package
              </h2>
              <p className="text-sm md:text-base">
                Browse through and select a package to subscribe to in the list
                of our services.
              </p>
            </div>
            <div className="relative pb-3 pl-4 border-l-4 border-transparent border-dashed md:pb-5">
              <div className="absolute grid w-5 h-5 rounded-full md:w-8 md:h-8 bg-lightblue top-1 -left-3 md:-left-[1.1rem] place-items-center">
                <div className="w-3 h-3 rounded-full md:w-4 md:h-4 bg-primary"></div>
              </div>
              <h2 className="text-lg font-semibold md:text-2xl md:mb-1">
                Get matched with professionals
              </h2>
              <p className="text-sm md:text-base">
                Get assigned to a professional who is best suited to attend to
                your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Easiest;
