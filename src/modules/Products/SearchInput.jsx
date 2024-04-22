import React, { useEffect, useState } from "react";
import searchIson from "/public/icons/search.svg";
import useDebounce from "@/hooks/useDebounce";
function SearchInput({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  useEffect(() => {
    onSearch(debouncedSearchQuery);
    console.log(debouncedSearchQuery);
  }, [debouncedSearchQuery]);
  return (
    <div className=" bg-secondaryBlack border  border-secondaryWhite  mt-3  mx-auto rounded-md flex ">
      <img className=" px-2" src={searchIson.src} />
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        className="w-full bg-inherit py-4 text-xs md:text-base focus:outline-none text-white"
        placeholder="Search for a cheat, game or product"
      />
    </div>
  );
}

export default SearchInput;
