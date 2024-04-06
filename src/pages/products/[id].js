import Image from "next/image";
import React, { useState } from "react";
import product from "/public/common/product.svg";
import Link from "next/link";
import BackArrow from "/public/icons/backArrow.svg"
import MediaTab from "@/modules/Product/MediaTab";
import FeaturesTab from "@/modules/Product/FeaturesTab";
import { Button } from "@/components";
import Layout from "@/layouts/Layout";
function Product() {
  const [activeTab,setActiveTab]=useState("media")
  const [count ,setCount]=useState(1)
  const handleActiveTab=(tab)=>{
    setActiveTab(tab)
  }
  const handleIncreaseCount=()=>{
    setCount(prev=>++prev)
  }
   const handleDecreaseCount = () => {
     if (count === 0) {
       return;
     }
     setCount((prev) => --prev);
   };
  



  return (
    <Layout>
      <div
        style={{ background: "url('/background/hero.svg')" }}
        className="!bg-no-repeat !bg-cover mb-24 "
      >
        <div className="flex flex-col pt-32  1440:w-[1216px]  mx-4 md:mx-auto ">
          <div className="  flex flex-col-reverse items-center lg:flex-row  gap-4 justify-between mb-8   ">
            <div className=" text-2xl font-semibold text-white">
              <p>title for image</p>
            </div>
            <Link
              className=" flex items-center font-semibold text-base text-secondaryGray gap-1 "
              href="/products"
            >
              <Image src={BackArrow} width={10.37} height={10.37} />
              Go back to store
            </Link>
          </div>
          <div className="  w-fit mx-auto  flex flex-col lg:flex-row items-start   justify-center gap-24 ">
            <div className=" flex justify-cente items-start  ">
              
              <Image src={product} width={475} height={268} alt="" />
            </div>
            <div className="flex  flex-col  sm:mx-auto lg:mx-0   xs:w-full w-[429px] items-center justify-center  gap-2 ">
              <div className="bg-secondaryBlack w-full rounded  border border-secondaryGray px-3 py-2 flex flex-col   ">
                <div className="pb-5 text-sm text-secondaryGray flex justify-start ">
                  <p>hi</p>
                </div>
                <div className="flex justify-between   items-center">
                  <p className="text-white text-xl  ">$15 00</p>
                  <p className="text-secondaryGray ">23 in stocks</p>
                </div>
              </div>
              <div className="bg-secondaryBlack w-full rounded  border border-secondaryGray px-3 py-2 flex flex-col   ">
                <div className="pb-5 text-sm text-secondaryGray flex justify-start ">
                  <p>hi</p>
                </div>
                <div className="flex justify-between   items-center">
                  <p className="text-white text-xl  ">$15 00</p>
                  <p className="text-secondaryGray ">23 in stocks</p>
                </div>
              </div>

              <div className="bg-secondaryBlack w-full rounded  border border-secondaryGray px-3 py-2 flex flex-col   ">
                <div className="pb-5 text-sm text-secondaryGray flex justify-start ">
                  <p>hi</p>
                </div>
                <div className="flex justify-between   items-center">
                  <p className="text-white text-xl  ">$15 00</p>
                  <p className="text-secondaryGray ">23 in stocks</p>
                </div>
              </div>
              <div className="flex bg-secondaryBlack items-center w-full rounded  text-white   border border-secondaryGray ">
                <span className="px-4" onClick={handleDecreaseCount}>
                  -
                </span>
                <input
                  className="w-full py-2 outline-none bg-secondaryBlack text-white text-center "
                  value={count}
                />
                <span onClick={handleIncreaseCount} className="px-4">
                  +
                </span>
              </div>
              <Button className=" text-white w-full text-xs py-3 bg-primaryPurple ">
                Buy now
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center text-3xl gap-12  lg:pl-16 mt-20 mb-25 pb-20 ">
            <p
              onClick={() => handleActiveTab("feature")}
              className={`${
                activeTab === "feature"
                  ? "text-white border-b border-primaryPurple"
                  : "text-secondaryGray"
              } `}
            >
              Feature
            </p>
            <p
              onClick={() => handleActiveTab("media")}
              className={` ${
                activeTab === "media"
                  ? "border-b text-white border-primaryPurple"
                  : "text-secondaryGray"
              } `}
            >
              Media
            </p>
          </div>
          {activeTab === "media" ? <MediaTab /> : <FeaturesTab />}
        </div>
      </div>
    </Layout>
  );
}

export default Product;
