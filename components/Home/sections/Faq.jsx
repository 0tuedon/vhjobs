import Link from "next/link";
import React from "react";
import { FaqCard } from "../FaqCard";

const Faq = () => {
  return (
    <section className="p-5 mb-10 md:px-10 h-fit">
      <div>
        <div className="mb-8 md:text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[3.3rem] font-bold mb-5">
            Frequently Asked Question
          </h1>
          <p className="mb-5 text-sm md:text-base md:font-medium">
            Join thousands of individuals and businesses who trust vhjobs to
            help them handle their needs.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3 w-fit">
          {Array(3)
            .fill()
            .map((data, i) => (
              <FaqCard key={i} />
            ))}
        </div>
        <Link href="/" passHref>
          <a className="block px-3 py-2 mt-8 mx-auto text-sm border-[1.5px] rounded-full md:py-3 md:font-semibold md:text-lg border-primary text-primary md:px-16 w-fit">
            Visit FAQ
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Faq;
