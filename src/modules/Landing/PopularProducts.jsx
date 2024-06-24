import React, { useEffect, useState } from "react";
import allCategories from "/src/pages/api/category.json";
import style from "./hero.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useRouter } from "next/router";
import productsData from "/src/pages/api/products.json";
import Link from "next/link";
import ProductSkleton from "@/components/Skeleton/ProductSkleton";

function PopularProducts() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    setCategories(allCategories.data);
    setIsLoading(false);
  }, []);

  return (
    <div className=" flex flex-col  items-center text-center -mt-[100px]  ">
      <h2 className="text-white text-xl md:text-42 flex gap-4 justify-center max-w-full font-semibold  text-center pb-6">
        <p className="whitespace-nowrap">OUR MOST</p>
        <div className="text-primaryPurple text-center z-10 relative">
          <p className={style.glow}>POPULAR</p>
        </div>
        <p>PRODUCTS</p>
      </h2>

      <p className="lg:w-2/3 font-moderat text-sm md:text-base text-secondaryPurple">
        Whether you need some aim assistance on Call of Duty, or need to know
        where that LEDX is on Interchange, weve got you covered with our range
        of high-quality products!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 ">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <>
                <ProductSkleton />
              </>
            ))
          : categories.map((item, index) => (
              <Link key={index} href={`/products?category=${item.id}`}>
                <ProductCard
                  buttonText={"view all"}
                  items={item.products_linked}
                  image={item?.image?.path}
                  title={item.title}
                  categoryId={item.id}
                />
              </Link>
            ))}
       
      </div>
    </div>
  );
}

export default PopularProducts;
