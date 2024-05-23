import { Button } from "@/components";
import icon from "/public/icons/category.svg";
import React, { useEffect, useState } from "react";
import categoryData from "/src/pages/api/categoey.json";
import allData from "/src/pages/api/products.json";
import { useRouter } from "next/router";

function Categories({ products, setProducts }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();
  const { category } = router.query;

  const handleSelectedCategory = (categoryId) => {
    router.push(`/products?category=${categoryId}`);
  };

  useEffect(() => {
    setCategories(categoryData.data);
    setSelectedCategory(Number(router.query.category));
    if (category) handleSelectedCategory(category);
  }, [category]);

  return (
    <div className=" flex items-center flex-wrap justify-center gap-2.5  px-8">
      {categories?.map((category, index) => (
        <Button
          onClick={() => handleSelectedCategory(category.id)}
          key={index}
          className={`  bg-secondaryBlack text-white text-xs font-semibold  ${
            selectedCategory === category.id
              ? "border border-primaryPurple"
              : " border border-secondaryWhite"
          }`}
        >
          <img src={icon.src} />
          {category.title}
        </Button>
      ))}
    </div>
  );
}

export default Categories;
