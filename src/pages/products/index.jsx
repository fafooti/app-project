import Layout from "@/layouts/Layout";
import Categories from "@/modules/Products/Categories";
import ProductDetails from "@/modules/Products/ProductDetails";
import ProductsList from "@/modules/Products/ProductsList";
import SearchInput from "@/modules/Products/SearchInput";
import React, { useEffect, useState } from "react";

function index() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const handleSelectedcategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("indescx",query);
  };
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
            <Categories onSelectedCategory={handleSelectedcategory} />
            <SearchInput onSearch={handleSearch} />
          </div>
          <div className=" mx-auto mt-8">
            <ProductsList
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
