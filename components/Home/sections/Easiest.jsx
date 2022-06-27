import React from "react";
import Group from "@/svg/Group.svg";
import Image from "next/image";

const Easiest = () => {
  return (
    <section className="relative min-h-fit w-full p-5 md:px-10 mb-10">
      <div className="md:flex justify-between items-start">
        <div className="hidden md:block relative md:h-[30rem] w-full">
          <Image src={Group} alt="group" layout="fill" />
        </div>
        <div className="md:max-w-lg">
          <h1 className="text-3xl font-bold sm:text-4xl mb-2 sm:mb-3">
            <span className="text-primary">Easiest way</span> to get your&nbsp;
            <span className="text-primary">needs done</span>
          </h1>
          <p className="text-sm md:text-base mb-5">
            Get you needs done with three simple steps
          </p>
          <div className="">
            <div className="border-l-4 border-primary border-dashed pl-4 pb-3 relative">
              <div className="bg-lightblue rounded-full h-5 w-5 absolute top-0 -left-3 grid place-items-center">
                <div className="bg-primary rounded-full h-3 w-3"></div>
              </div>
              <h2 className="font-semibold text-lg">
                Tell us what you need to get done
              </h2>
              <p className="text-sm">
                Tell us about the service you need help with, and all relevant
                information needed to aid our delivery and your satisfaction.
              </p>
            </div>
            <div className="border-l-4 border-primary border-dashed pl-4 pb-3 relative">
              <div className="bg-lightblue rounded-full h-5 w-5 absolute top-1 -left-3 grid place-items-center">
                <div className="bg-primary rounded-full h-3 w-3"></div>
              </div>
              <h2 className="font-semibold text-lg">
                Subscription to a package
              </h2>
              <p className="text-sm">
                Browse through and select a package to subscribe to in the list
                of our services.
              </p>
            </div>
            <div className="border-l-4 border-transparent border-dashed pl-4 pb-3 relative">
              <div className="bg-lightblue rounded-full h-5 w-5 absolute top-1 -left-3 grid place-items-center">
                <div className="bg-primary rounded-full h-3 w-3"></div>
              </div>
              <h2 className="font-semibold text-lg">
                Get matched with professionals
              </h2>
              <p className="text-sm">
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
