import Link from "next/link";
import React from "react";

const Ready = () => {
  return (
    <section className="p-5 md:p-10 bg-lightblue text-center">
      <h1 className="text-2xl font-bold text-purple-700 sm:text-3xl mb-5 md:mb-8">
        Ready to get your need done?
      </h1>
      <Link href="/" passHref>
        <a className="bg-primary rounded-full font-medium w-fit text-white py-3 px-8 text-sm items-center">
          Explore needs
        </a>
      </Link>
    </section>
  );
};

export default Ready;
