import Layout from "@/layouts/Layout";
import Categories from "@/modules/Products/Categories";
import ProductDetails from "@/modules/Products/ProductDetails";
import ProductsList from "@/modules/Products/ProductsList";
import SearchInput from "@/modules/Products/SearchInput";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import productsData from "/src/pages/api/products.json";

function Products() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { category } = router.query;

  const filterData = useMemo(() => {
    if (category) {
      const newCategori = categoryData.data.find(
        (it) => String(it.id) === category
      );
      if (newCategori) {
        const productIds = newCategori.products.map((product) => product.id);
        const filteredProducts = productsData.products.filter((product) =>
          productIds.includes(product.id.toString())
        );
        return [...filteredProducts];
      }
    }
    return [...products];
  }, [category, products]);


  const getAllProducts = () => {
    setProducts(productsData.products);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Layout>
      <div style={{background:"url(/background/product-background.svg)"}}>
        <div className="flex flex-col  items-center justify-between   min-h-screen overflow-hidden">
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
              products={filterData}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
