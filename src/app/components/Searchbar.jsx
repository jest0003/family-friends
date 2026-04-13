import { LiaSearchSolid } from "react-icons/lia";

const Searchbar = () => {
  return (
    <nav className="flex mb-4">
      <LiaSearchSolid
        color="white"
        className="h-10 w-10 rounded-full bg-pink-200 p-2"
      />{" "}
      <input
        type="search"
        placeholder="Search breeds"
        className="rounded-full border-solid border-1 ml-4 p-2"
      />
    </nav>
  );
};

export default Searchbar;
