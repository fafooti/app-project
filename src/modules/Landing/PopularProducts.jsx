import React from 'react'
import PopularProductCard from './ProductCard'

function PopularProducts() {
  return (
    
      <div className=" flex flex-col  items-center text-center  p-7 ">
        <h2 className="text-white text-xl md:text-42 font-semibold  text-center pb-6">
          our most <span className="text-primaryPurple ">popular</span> products
        </h2>
        <p className="w-2/3 font-moderat text-sm md:text-base text-secondaryPurple">
          Whether you need some aim assistance on Call of Duty, or need to know
          where that LEDX is on Interchange, we've got you covered with our
          range of high-quality products!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 ">
          <PopularProductCard />

          <PopularProductCard />

          <PopularProductCard />

          <PopularProductCard />
        </div>
      </div>
   
  );
}

export default PopularProducts
