import React, { useEffect, useState } from "react";
import allCategories from "/src/pages/api/categoey.json";
import style from "./hero.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useRouter } from "next/router";
import productsData from "/src/pages/api/products.json";

function PopularProducts() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCategories(allCategories.data);
  }, []);

  const handleSelectedCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    if (!categoryId) {
      setProducts(productsData.products);
      router.push("/products");
      return;
    }
    const category = allCategories.data.find((cat) => cat.id === categoryId);
    if (category) {
      const productIds = category.products.map((product) => product.id);
      const filteredProducts = productsData.products.filter((product) =>
        productIds.includes(product.id)
      );
      setProducts(filteredProducts);
      router.push(`/products?category=${categoryId}`);
    }
  };

  return (
    <div className=" flex flex-col  items-center text-center  ">
      <h2 className="text-white text-xl md:text-42 flex gap-4 justify-center max-w-full font-semibold  text-center pb-6">
        <p className="whitespace-nowrap">OUR MOST</p>
        <div className="text-primaryPurple text-center z-10 relative">
          <p className={`${style.glow}`}>POPULAR</p>
        </div>
        <p>PRODUCTS</p>
      </h2>

      <p className="lg:w-2/3 font-moderat text-sm md:text-base text-secondaryPurple">
        Whether you need some aim assistance on Call of Duty, or need to know
        where that LEDX is on Interchange, weve got you covered with our range
        of high-quality products!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 ">
        {categories.map((item, index) => (
          <ProductCard
            key={index}
            buttonText={"view all"}
            items={item.products_linked}
            image={item?.image?.path}
            title={item.title}
            categoryId={item.id}
            onClick={() => handleSelectedCategory(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
