import { Button } from "@/components";
import icon from "/public/icons/category.svg";
import React, { useEffect, useState } from "react";
import categoryData from "/src/pages/api/categoey.json";
import allData from "/src/pages/api/products.json";

function Categories({ products, setProducts }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState(null);

  useEffect(() => {
    setCategories(() => categoryData.data);
  
  }, []);

 const handleSelectedCategory = (categoryId) => {
   setSelectedCategory(categoryId);
   console.log(categoryId);

   if (!categoryId) {
     setProducts(allData.products);
     return;
   }
    const category = categoryData.data.find((cat) => cat.id === categoryId);
console.log("Category selected",category);
    if (category) {
      const productIds = category.products.map((product) => product.id);
      console.log("products ids",productIds);
      const filteredProducts = allData.products.filter((product) =>
        productIds.includes(product.id.toString())
      );
console.log("filter",filteredProducts);
      setProducts((prev)=>filteredProducts);
    }
 };
  return (
    <div className=" flex items-center flex-wrap justify-center gap-2.5  px-8">
      {categories?.map((category, index) => (
        <Button
          onClick={() => handleSelectedCategory(category.id)}
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
