import Layout from "@/layouts/Layout";
import Status from "@/modules/Status/Status";
import React, { useEffect, useState } from "react";
import productsData from "/src/pages/api/products.json";
import glowImage from "/public/icons/ellipse.svg";
import Image from "next/image";
import categoryData from "/src/pages/api/categoey.json";

function Index() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    categoryData.data.forEach((category) => {
      if (category.products.length > 0) {
        console.log(category);
        setCategories((prev) => [...prev, category]);
      }
    });
  }, []);
  return (
    <Layout>
      <div
        style={{ background: "url('/background/product-background.svg')" }}
        className="!bg-no-repeat !bg-contain xl:w-[1216px]  w-11/12 min-h-screen  mx-auto  py-28 "
      >
        {" "}
        <div className="flex flex-col mx-auto items-center text-center justify-start pt-24 pb-10 md:w-4/5">
          <div className="relative px-8 w-[404px] h-[91px]">
            <Image
              alt="glow"
              src={glowImage}
              width={100}
              height={100}
              className="absolute -top-14 left-0 right-0 w-full "
            />

            <h1 className="text-white md:text-5xl text-3xl mb-5 font-semibold uppercase">
              STATUS
            </h1>
          </div>

          <p className="text-secondaryPurple  md:w-[713px] mb-8 font-moderat text-lg  ">
            stay up to date with the status of all tools
          </p>
        </div>
        <div className="flex flex-col gap-5 pt-4">
          {categories.map((item, index) => (
            <div key={index} className="">
              <Status title={item.title} categoryId={item.id} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Index;
