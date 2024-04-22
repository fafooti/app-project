import { Button } from "@/components";
import icon from "/public/icons/category.svg";
import React, { useState } from "react";
import productsData from "/src/pages/api/products.json"

function Categories({ onSelectedCategory }) {
  const [categories, setcategories] = useState([]);

  useState(() => {
    const productsCategories = [
      "All",
      ...new Set(productsData.products.map((product) => product.category)),
    ];
    setcategories(productsCategories);
    console.log(productsCategories);
  }, []);
  const handleSelectCategory=(category)=>{
    onSelectedCategory(category)
  }

  return (
    <div className=" flex items-center flex-wrap justify-center gap-2.5  px-8">
      {categories.map((category, index) => (
        <Button
        onClick={()=>handleSelectCategory(category)}
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
