import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "..";
import Skeleton from "../Skeleton/Skeleton";

function ProductCard({
  image,
  buttonText,
  items,
  title,
  categoryId,
  productId,
}) {
  const productLink = categoryId
    ? `/products?category=${categoryId}`
    : `/products/${productId}`;
  useEffect(() => {
  }, []);
  return (
    <div className="flex flex-col w-fit justify-center h-full gap-4">
      <div className="relative ">
        {image ? (
          <Image
            alt="product"
            className="rounded"
            width={280}
            height={158}
            src={`/${image}`}
          />
        ) : (
          <Skeleton className={"relative w-[280px] h-[158px]"} />
        )}
      </div>
      <div className="flex justify-between">
        {title ? (
          <p className="text-white ">{title}</p>
        ) : (
          <Skeleton className={"w-3 h-4"} />
        )}

        <p className="text-secondaryGray">{items && items + " items"}</p>
      </div>
      <Button className="text-center  bg-primaryBlack hover:bg-primaryPurple border text-white border-secondaryWhite ">
        <Link href={productLink}>{buttonText}</Link>
      </Button>
    </div>
  );
}

export default ProductCard;
