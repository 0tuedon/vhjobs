import Img2 from "@/svg/Image 21.svg";
import Img from "@/svg/Image.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Make = () => {
  return (
    <section className="relative min-h-fit w-full p-5 md:px-10 mb-5">
      <div className="bg-primary h-96 relative rounded-lg md:pl-10">
        <div className="absolute h-full w-full top-0 left-0 z-0 md:hidden">
          <Image
            src={Img}
            alt="person"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="h-full w-full hidden md:block absolute top-0 left-0 z-0">
          <Image
            src={Img2}
            alt="person"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="text-white absolute bottom-0 p-5 md:pt-10 md:relative md:z-10 md:max-w-md">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Make money with vhjobs
          </h1>
          <p className="text-sm mb-5 md:text-base">
            Join other 5,000 people that are selling their skill and earn
            handsomely
          </p>
          <span className="md:flex justify-start gap-5 items-center">
            <Link href="/" passHref>
              <a className="bg-white rounded-full font-medium w-fit text-black text-center flex justify-center gap-3 py-3 px-8 text-sm items-center">
                <span>Sign up to earn</span>
                <AiOutlineArrowRight className="w-5 h-5 text-primary" />
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="border border-white font-medium rounded-full w-fit text-white hidden md:inline-block text-center py-3 px-5 text-sm">
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
