import Download from "~/Home/sections/Download";
import Easiest from "~/Home/sections/Easiest";
import Faq from "~/Home/sections/Faq";
import Have from "~/Home/sections/Have";
import Hero from "~/Home/sections/Hero";
import Make from "~/Home/sections/Make";
import Offer from "~/Home/sections/Offer";
import Pricing from "~/Home/sections/Pricing";
import Ready from "~/Home/sections/Ready";
import Still from "~/Home/sections/Still";
import Testimonial from "~/Home/sections/Testimonial";
import Why from "~/Home/sections/Why";

export default function Home() {
  return (
    <div>
      {/**Each section is named after the first word of the heading */}
      <Hero />
      <Have />
      <Easiest />
      <Why />
      <Pricing />
      <Make />
      <Download />
      <Still />
      <Testimonial />
      <Faq />
      <Ready />
      <Offer />
    </div>
  );
}
