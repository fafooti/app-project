import React from 'react'
import PopularProductCard from './PopularProductCard'

function PopularProducts() {
  return (
    <div className=" w-5/6 h-full mx-auto relative">
       
      <div className=" flex flex-col justify-center items-center text-center   ">
        
        <h2 className="text-white text-lg md:text-42 font-semibold leading-44.65 text-center">
          our most <span className="text-primaryPurple ">popular</span> products
        </h2>
        <p className="w-2/3 font-moderat text-sm md:text-base text-secondaryPurple">
          Whether you need some aim assistance on Call of Duty, or need to know
          where that LEDX is on Interchange, we've got you covered with our
          range of high-quality products!
        </p>
      </div>
      <div className="grid md:grid-cols-2  xl:grid-cols-4 gap-7 w-5/6 mx-auto pb-20">
        <PopularProductCard />

        <PopularProductCard />

        <PopularProductCard />

        <PopularProductCard />
      </div>
    </div>
  );
}

export default PopularProducts
