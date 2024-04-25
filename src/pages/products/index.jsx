import Layout from "@/layouts/Layout";
import Categories from "@/modules/Products/Categories";
import ProductDetails from "@/modules/Products/ProductDetails";
import ProductsList from "@/modules/Products/ProductsList";
import SearchInput from "@/modules/Products/SearchInput";
import React, { useEffect, useState } from "react";
import productsData from "/src/pages/api/products.json";

function index() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getAllProducts = () => {
    console.log(productsData.products);
  setProducts(productsData.products)
  
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("search query",query);
  };
  useEffect(() => {
    
 
  console.log("in index",products);
  }, [products]);
  return (
    <Layout>
      <div className="flex flex-col  items-center justify-between mx-auto  min-h-screen overflow-hidden">
        <div
          style={{ background: "url('/background/hero.svg')" }}
          className="!bg-no-repeat !bg-contain w-[90%] 1440:w-[1216px]   mx-auto  "
        >
          <div className=" mx-auto pt-16">
            <ProductDetails />
          </div>
          <div className="  mx-auto">
            <Categories products={products} setProducts={setProducts} />
            <SearchInput onSearch={handleSearch} />
          </div>
          <div className=" mx-auto mt-8">
            <ProductsList
              setProducts={setProducts}
              products={products}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
