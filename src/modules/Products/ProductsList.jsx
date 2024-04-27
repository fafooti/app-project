import React, { useEffect, useState } from "react";
import productsdata from "/src/pages/api/products.json";

import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";
import { useRouter } from "next/router";

function ProductsList({ setProducts,products, searchQuery }) {
const router=useRouter()
  const handleSerach=()=>{
      if (searchQuery.trim() !== "") {
        const searchedProducts = products.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
        );
        console.log(searchedProducts);
        setProducts(searchedProducts);
      } else {
        setProducts(productsdata.products);
      }
  }
   useEffect(() => {
    
   handleSerach()

   }, [searchQuery]);

  

  return (
    <div className=" flex flex-col w-full items-center ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8  pb-24">
        {products?.map((product) => (
          <ProductCard
            image={product?.images[0]?.path}
            buttonText={"buy now"}
            title={product?.title}
            id={product?.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
