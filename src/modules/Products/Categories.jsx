import { Button } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import icon from "/public/icons/category.svg";

function Categories({ products, setProducts }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();
  const { category } = router.query;

  const handleSelectedCategory = (categoryId) => {
    router.push(`/products?category=${categoryId}`);
  };

  useEffect(() => {
    setCategories(categoryData.data);
    setSelectedCategory(Number(router.query.category));
    if (category) handleSelectedCategory(category);
  }, [category]);

  return (
    <div className=" flex items-center flex-wrap justify-center gap-2.5  px-8">
      {categories?.map((category, index) => (
        <Button
          onClick={() => handleSelectedCategory(category.id)}
          key={index}
          className={`  bg-secondaryBlack text-white text-xs font-semibold  ${
            selectedCategory === category.id
              ? "border border-primaryPurple"
              : " border border-secondaryWhite"
          }`}
        >
          <img src={icon.src} />
          {category.title}
        </Button>
      ))}
    </div>
  );
}

export default Categories;
