import Image from "next/image";
import React from "react";

function Product() {
  return (
    <div
      style={{ background: "url('/background/hero.svg')" }}
      className="!bg-no-repeat !bg-cover h-screen    "
    >
      <div className="flex flex-col lg:flex-row bg-black justify-center md:w-[90%] 1440:w-[1216px]    mx-auto  lg:items-start   pt-28  gap-12">
        <div className="bg-red-500">
          <Image width={475} height={268} />
        </div>
        <div className="flex  flex-col  whitespace-nowrap bg-red-300 items-center justify-center  gap-2 ">
          <div className="bg-secondaryBlack    rounded rounded-5 border border-secondaryGray px-3 py-2 flex flex-col  mx-auto ">
            <div className="pb-5 text-sm text-secondaryGray ">hi</div>
            <div className="flex justify-between  flex-nowrap    items-center">
              <p className="text-white text-xl  bg-blue-400 ">$15 00</p>
              <p className="text-secondaryGray ">23 in stocks</p>
            </div>
          </div>
          <div className="bg-secondaryBlack  rounded rounded-5 border border-secondaryGray px-3 py-2 flex flex-col   ">
            <div className="pb-5 text-sm text-secondaryGray ">hi</div>
            <div className="flex justify-between flex-nowrap  lg:gap-60  items-center">
              <p className="text-white text-xl ">$15 00</p>
              <p className="text-secondaryGray">23 in stocks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
