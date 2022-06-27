import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const NextBtn = ({ Carousel }) => {
  return (
    <button
      onClick={() => Carousel.next()}
      className="drop-shadow-lg absolute top-10 -right-5 z-10 bg-white rounded-full p-3 text-primary"
    >
      <AiOutlineArrowRight className="w-6 h-6" />
    </button>
  );
};

export const PrevBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="shadow-md absolute top-10 z-10 bg-white rounded-full p-3 hidden text-primary"
    >
      <AiOutlineArrowLeft className="w-6 h-6" />
    </button>
  );
};
