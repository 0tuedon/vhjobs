import React, { useState } from "react";
import Rectangle from "@/svg/Rectangle.svg";
import Image from "next/image";
import { NextBtn, PrevBtn } from "./Buttons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Personal } from "$/needs";
import Card from "./CarouselCard";

const PersonalNeeds = () => {
  let [CarouselRef, setCarouselRef] = useState("");
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 20,
    },
  };
  return (
    <div className="min-h-fit w-full relative rounded-md">
      <div className="absolute h-full w-full top-0 left-0 rounded-lg overflow-hidden">
        <Image
          src={Rectangle}
          alt="rectangle"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="relative p-5 md:px-10">
        <h1 className="text-2xl font-bold text-white sm:text-3xl mb-10">
          Or Personal Needs Like
        </h1>
        {CarouselRef && <NextBtn Carousel={CarouselRef} />}
        <Carousel
          ref={(el) => setCarouselRef(el)}
          swipeable={true}
          partialVisible={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false}
        >
          {Personal.map((need, i) => (
            <Card key={i} need={need} width="fit" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PersonalNeeds;
