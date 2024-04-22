import Image from "next/image";
import React from "react";
import product from "/public/common/product.svg";

function Product() {
  
  return (
    <>
      <div className=" flex justify-center  ">
        <Image src={product} width={475} height={268} alt="" />
      </div>
      <div className="flex  flex-col  sm:mx-auto lg:mx-0  bg-red-300 xs:w-full w-[429px] items-center justify-center  gap-2 ">
        <div className="bg-secondaryBlack w-full rounded rounded-5 border border-secondaryGray px-3 py-2 flex flex-col   ">
          <div className="pb-5 text-sm text-secondaryGray flex justify-start ">
            <p>hi</p>
          </div>
          <div className="flex justify-between   items-center">
            <p className="text-white text-xl  ">$15 00</p>
            <p className="text-secondaryGray ">23 in stocks</p>
          </div>
        </div>
        <div className="bg-secondaryBlack w-full rounded rounded-5 border border-secondaryGray px-3 py-2 flex flex-col   ">
          <div className="pb-5 text-sm text-secondaryGray flex justify-start ">
            <p>hi</p>
          </div>
          <div className="flex justify-between   items-center">
            <p className="text-white text-xl  ">$15 00</p>
            <p className="text-secondaryGray ">23 in stocks</p>
          </div>
        </div>

        <div className="bg-secondaryBlack w-full rounded rounded-5 border border-secondaryGray px-3 py-2 flex flex-col   ">
          <div className="pb-5 text-sm text-secondaryGray flex justify-start ">
            <p>hi</p>
          </div>
          <div className="flex justify-between   items-center">
            <p className="text-white text-xl  ">$15 00</p>
            <p className="text-secondaryGray ">23 in stocks</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
