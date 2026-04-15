import { LiaSearchSolid } from "react-icons/lia";

const Searchbar = () => {
  return (
    <form className="flex mb-4">
      <button type="submit">
        <LiaSearchSolid
          color="white"
          className="h-10 w-10 rounded-full bg-pink-200 p-2"
        />{" "}
      </button>
      <input
        type="search"
        placeholder="Search breeds"
        name="query"
        className="rounded-full border-solid border-1 ml-4 p-2 bg-white"
      />
    </form>
  );
};

export default Searchbar;
