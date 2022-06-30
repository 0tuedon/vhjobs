import Img2 from "@/svg/image-21.svg";
import Img from "@/svg/Image.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Make = () => {
  return (
    <section className="relative w-full p-5 mb-14 min-h-fit md:px-10">
      <div className="bg-primary h-[25rem] overflow-hidden  md:h-[38rem] max-w-7xl mx-auto relative rounded-3xl md:pl-10">
        <div className="absolute top-0 left-0 z-0 w-full h-full md:hidden">
          <Image
            src={Img}
            alt="person"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="absolute top-0 left-0 z-0 hidden w-full h-full md:block">
          <Image
            src={Img2}
            alt="person"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="absolute bottom-0 p-5 text-white md:pt-24 md:relative md:z-10 md:max-w-lg">
          <h1 className="mb-2 text-3xl font-semibold sm:text-4xl md:text-5xl md:font-bold md:leading-[4rem]">
            Make money with vhjobs
          </h1>
          <p className="max-w-sm mb-5 text-sm sm:text-base md:text-[1.34rem] md:font-light md:leading-[2.3rem]">
            Join other 5,000 people that are selling their skill and earn
            handsomely
          </p>
          <span className="items-center justify-start gap-5 md:flex md:pt-14">
            <Link href="/" passHref>
              <a className="flex items-center justify-center gap-3 px-8 py-3 text-sm font-medium text-center text-black bg-white rounded-full md:text-lg w-fit">
                <span>Sign up to earn</span>
                <AiOutlineArrowRight className="w-5 h-5 text-primary" />
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="hidden px-12 py-3 text-sm font-medium text-center text-white border border-white rounded-full md:text-lg w-fit md:inline-block">
                Learn more
              </a>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Make;
