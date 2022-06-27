import { BiSearch } from "react-icons/bi";

const Form = () => {
  return (
    <form className="flex bg-white rounded-md justify-between items-center p-1 sm:pl-3 text-black mb-3 sm:max-w-lg mx-auto">
      <BiSearch className="w-5 h-5 font-bold" />
      <input
        type="text"
        name="search"
        placeholder="What do you need to get done?"
        className="bg-transparent px-2 py-3 flex-1 text-sm outline-none"
      />
      <button
        type="submit"
        className="hidden sm:inline-block bg-primary text-sm text-white px-10 py-3 font-medium rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
