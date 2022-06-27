import React from "react";
import { FaqCard } from "../FaqCard";

const Faq = () => {
  return (
    <section className="p-5 md:px-10 h-fit mb-10">
      <div>
        <div className="md:text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-1">
            Frequently Asked Question
          </h1>
          <p className="text-sm mb-5">
            Join thousands of individuals and businesses who trust vhjobs to
            help them handle their needs.
          </p>
        </div>
        <div className="w-fit mx-auto max-w-xl space-y-4">
          {Array(3)
            .fill()
            .map((data, i) => (
              <FaqCard key={i} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
