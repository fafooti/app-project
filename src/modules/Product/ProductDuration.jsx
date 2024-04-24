import React from 'react'

function ProductDuration({ duratoin, price,onClick ,selectedDuration }) {
  return (
    <div
      className={`bg-secondaryBlack w-full rounded border py-2 px-3 flex flex-col ${
        selectedDuration === duratoin
          ? "border-primaryPurple"
          : "border-secondaryGray"
      }`}
      onClick={() => onClick(duratoin)}
    >
      <div className="pb-5 text-sm text-secondaryGray flex justify-start ">
        <p>{duratoin}</p>
      </div>
      <div className="flex justify-between   items-center">
        <p className="text-white text-xl  ">${price}</p>
        <p className="text-secondaryGray text-sm ">23 in stocks</p>
      </div>
    </div>
  );
}

export default ProductDuration
