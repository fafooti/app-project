import React from 'react'

import ProductCard from '@/components/ProductCard/ProductCard';
function ProductsList() {
  return (
    <div className=" flex flex-col w-full items-center ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8  pb-24">
        <ProductCard buttonText="buy now" title="rust" />
        <ProductCard buttonText="buy now" title="rust" />
        <ProductCard buttonText="buy now" title="rust" />
        <ProductCard buttonText="buy now" title="rust" />
        <ProductCard buttonText="buy now" title="rust" />
        <ProductCard buttonText="buy now" title="rust" />
        <ProductCard buttonText="buy now" title="rust" />
        <ProductCard buttonText="buy now" title="rust" />
      </div>
    </div>
  );
}

export default ProductsList
