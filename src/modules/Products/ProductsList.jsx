import ProductCard from "@/components/ProductCard/ProductCard";
import ProductSkleton from "@/components/Skeleton/ProductSkleton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import productsdata from "/src/pages/api/products.json";

function ProductsList({ setProducts, products, searchQuery }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const handleSerach = () => {
    setIsLoading(true);
    if (searchQuery.trim() !== "") {
      const searchedProducts = products.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );

      setProducts(searchedProducts);
    } else {
      setProducts(productsdata.products);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    handleSerach();
  }, [searchQuery]);

  return (
    <div className=" flex flex-col w-full items-center ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8  pb-24">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
            <>
            <ProductSkleton/>
            </>
            ))
          : products?.map((product, index) => (
              <ProductCard
                image={product?.images[0]?.path}
                buttonText={"buy now"}
                title={product?.title}
                productId={product?.id}
                key={index}
              />
            ))}
      </div>
    </div>
  );
}

export default ProductsList;
