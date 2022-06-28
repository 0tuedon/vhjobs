import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const NextBtn = ({ Carousel }) => {
  return (
    <button
      onClick={() => Carousel.next()}
      className="absolute z-10 p-3 bg-white rounded-full drop-shadow-xl md:top-14 top-10 md:-right-10 -right-5 text-primary"
    >
      <AiOutlineArrowRight className="w-6 h-6 md:h-14 md:w-14" />
    </button>
  );
};
