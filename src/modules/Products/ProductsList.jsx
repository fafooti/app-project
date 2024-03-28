import React from 'react'
import PopularProductCard from '../Landing/ProductCard'

function ProductsList() {
  return (
    <div className=" flex flex-col w-full items-center ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8  pb-24">
        <PopularProductCard buttonText="buy now" title="rust" />
        <PopularProductCard buttonText="buy now" title="rust" />
        <PopularProductCard buttonText="buy now" title="rust" />
        <PopularProductCard buttonText="buy now" title="rust" />
        <PopularProductCard buttonText="buy now" title="rust" />
        <PopularProductCard buttonText="buy now" title="rust" />
        <PopularProductCard buttonText="buy now" title="rust" />
        <PopularProductCard buttonText="buy now" title="rust" />
      </div>
    </div>
  );
}

export default ProductsList
