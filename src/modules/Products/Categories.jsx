import { Button } from "@/components";
import icon from "/public/icons/category.svg";
import React, { useEffect, useState } from "react";
import categoryData from "/src/pages/api/categoey.json";
import allData from "/src/pages/api/products.json";
import { useRouter } from "next/router";

function Categories({ products, setProducts }) {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const { category } = router.query;

  const handleSelectedCategory = (categoryId) => {
    router.push(`/products?category=${categoryId}`);
    // if (!categoryId) {
    //   router.push("/products");
    //   setProducts(allData.products);
    //   return;
    // }
    const category = categoryData.data.find(
      (cat) => String(cat.id) === categoryId
    );
    if (category) {
      const productIds = category.products.map((product) => product.id);
      const filteredProducts = allData.products.filter((product) =>
        productIds.includes(product.id.toString())
      );
      //setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    setCategories(categoryData.data);
    if (category) handleSelectedCategory(category);
  }, [category]);

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
