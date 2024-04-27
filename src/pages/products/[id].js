import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import BackArrow from "/public/icons/backArrow.svg";
import MediaTab from "@/modules/Product/MediaTab";
import FeaturesTab from "@/modules/Product/FeaturesTab";
import { Button } from "@/components";
import Layout from "@/layouts/Layout";
import productsData from "/src/pages/api/products.json";
import React, { useEffect, useState } from "react";
import Skeleton from "@/components/Skeleton/Skeleton";
import ProductDuration from "@/modules/Product/ProductDuration";

function Product() {

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("media");
  const [count, setCount] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const handleSelectedDuratioin = (id) => {
    setSelectedDuration(id);
  };
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };
  const handleIncreaseCount = () => {
    setCount((prev) => ++prev);
  };
  const handleDecreaseCount = () => {
    if (count === 0) {
      return;
    }
    setCount((prev) => --prev);
  };

  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const productData = productsData.products.find(
        (item) => item.id === productId
      );
      console.log("Product Data:", productData);
      setProduct(productData);
      setIsLoading(false);
      console.log("product",product.variants);
    }
  }, []);

  return (
    <Layout>
      <div
        style={{ background: "url('/background/hero.svg')" }}
        className="!bg-no-repeat !bg-cover mb-24 "
      >
        <div className="flex flex-col pt-32  1440:w-[1216px]  mx-4 md:mx-auto ">
          <div className=" mx-auto lg:w-[95%] xl:w-[82%] flex flex-col-reverse items-center lg:flex-row  gap-4 justify-between mb-8   ">
            <div className=" text-2xl font-semibold text-white">
              <p>{product.title}</p>
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
              {isLoading ? (
                <Skeleton className={`w-[475px] h-[268px]`} />
              ) : (
                <Image
                  src={`/${product?.images[0]?.path}`}
                  width={475}
                  height={268}
                  alt=""
                />
              )}
            </div>
            <div className="flex  flex-col  sm:mx-auto lg:mx-0   xs:w-full w-[429px] items-center justify-center  gap-2 ">
              {product?.variants?.map((item) => (
                <ProductDuration
                  duration={item.title}
                  price={25}
                  stock={"23"}
                  id={item.id}
                  onClick={handleSelectedDuratioin}
                  selectedDuration={
                    selectedDuration === item.id ? item.id : null
                  }
                />
              ))}

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
