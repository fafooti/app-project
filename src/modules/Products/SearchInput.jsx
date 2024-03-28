import React from 'react'
import searchIson from "/public/icons/search.svg"
function SearchInput() {
  return (

      <div className=" bg-secondaryBlack border  border-secondaryWhite  mt-3  mx-auto rounded-md flex ">
        <img className=" px-2" src={searchIson.src} />
        <input
          className="w-full bg-inherit py-4 text-xs md:text-base focus:outline-none text-white"
          placeholder="Search for a cheat, game or product"
        />
   
    </div>
  );
}

export default SearchInput
