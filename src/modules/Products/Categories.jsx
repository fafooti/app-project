import { Button } from "@/components";
import icon from "/public/icons/category.svg";
import React, { useEffect, useState } from "react";
import categoryData from "/src/pages/api/categoey.json";
import allData from "/src/pages/api/products.json";
import Product from "../Product/Product";
function Categories({}) {
const [categories,selectedCategories]=useState(["All"])

 useEffect(() => {
 
 }, []);



  return (
    <div className=" flex items-center flex-wrap justify-center gap-2.5  px-8">
      {categories?.map((category, index) => (
        <Button
          onClick={() => handleSelectCategory(category)}
          key={index}
          className="border border-secondaryWhite bg-secondaryBlack text-white text-xs font-semibold "
        >
          <img src={icon.src} />
          {category}
        </Button>
      ))}
    </div>
  );
}

export default Categories;
