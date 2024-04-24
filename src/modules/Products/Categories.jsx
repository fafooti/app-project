import { Button } from "@/components";
import icon from "/public/icons/category.svg";
import React, { useEffect, useState } from "react";
import categoryData from "/src/pages/api/categoey.json";
import allData from "/src/pages/api/products.json";
import Product from "../Product/Product";
function Categories({ products, setProducts }) {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState([]);

  useEffect(() => {
    setCategories(() => ["All", ...categoryData.data.map((item) => item)]);
  }, []);

  useEffect(() => {
    handleSelectedCategory();
  }, [categoryId]);
  //  const handleSelectedCategory = (categoryId) => {
  //    setCategoryId(categoryId);
  //
  //    if (categoryId === "All") {
  //      setProducts(allData.data);
  //      return;
  //    }
  //
  //    const category = categoryData.data.find((cat) => cat.id === categoryId);
  //
  //    if (category) {
  //      const productIds = category.products.map((product) => product.id);
  //      const filteredProducts = allData.data.filter((product) =>
  //        productIds.includes(product.id)
  //      );
  //      setProducts(filteredProducts);
  //    }
  //  };
  const filterById = (arr) => {
    console.log(arr);
    if (arr) {
      const result = products.filter((item) => arr.includes(item.id));

      console.log(result);
    } else {
      console.log("errr");
    }
  };
  const handleSelectedCategory = () => {
    console.log(categoryId.map((item) => item.id));
    const arr = categoryId.map((item) => item.id);
    filterById(arr);
  };

  return (
    <div className=" flex items-center flex-wrap justify-center gap-2.5  px-8">
      {categories?.map((category, index) => (
        <Button
          onClick={() => setCategoryId(category.products)}
          key={index}
          className="border border-secondaryWhite bg-secondaryBlack text-white text-xs font-semibold "
        >
          <img src={icon.src} />
          {category.title}
        </Button>
      ))}
    </div>
  );
}

export default Categories;
