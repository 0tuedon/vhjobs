import { BiSearch } from "react-icons/bi";

const Form = () => {
  return (
    <form className="flex items-center justify-between p-1 mx-auto mb-4 text-black bg-white rounded-md sm:pl-3 sm:max-w-xl">
      <BiSearch className="w-7 h-7 text-black1 font-black" />
      <input
        type="text"
        name="search"
        placeholder="What do you need to get done?"
        className="flex-1 px-2 
        placeholder:text-[17px]
        text-[17px]
        font-bold
        placeholder:text-black1
        text-sm bg-transparent outline-none"
      />
      <button
        type="submit"
        className="hidden 
        h-[48px]
        md:font-bold
        
        md:text-[17px]
        px-10 py-3 
        text-sm font-medium text-white rounded-md sm:inline-block bg-primary"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
