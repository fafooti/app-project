import React, { useEffect, useState } from "react";
import productsdata from "/src/pages/api/products.json";

import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";

function ProductsList({ selectedCategory, searchQuery }) {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    let filteredProducts = productsdata.products;

    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setProductList(filteredProducts);
  }, [selectedCategory, searchQuery]);

  return (
    <div className=" flex flex-col w-full items-center ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8  pb-24">
        {productsList.map((product) => (
         
            <ProductCard
              image={product.image}
              buttonText={"buy now"}
              title={product.title}
              id={product.id}
            />
         
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
