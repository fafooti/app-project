import React from 'react'
import PopularProductCard from '../Landing/ProductCard'

function ProductsList() {
  return (
    <div className=" flex flex-col items-center">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-x-8 gap-y-11">
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
