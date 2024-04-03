import React from 'react'
import PopularProductCard from './ProductCard'

function PopularProducts() {
  return (
    <div className=" flex flex-col  items-center text-center  ">
      <h2 className="text-white text-xl md:text-42 font-semibold  text-center pb-6">
        our most <span className="text-primaryPurple ">popular</span> products
      </h2>
      <p className="lg:w-2/3 font-moderat text-sm md:text-base text-secondaryPurple">
        Whether you need some aim assistance on Call of Duty, or need to know
        where that LEDX is on Interchange, weve got you covered with our range
        of high-quality products!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 ">
        <PopularProductCard buttonText="view all" items="4" title="title" />

        <PopularProductCard buttonText="view all" items="4" title="title" />
        <PopularProductCard buttonText="view all" items="4" title="title" />
        <PopularProductCard buttonText="view all" items="4" title="title" />
      </div>
    </div>
  );
}

export default PopularProducts
