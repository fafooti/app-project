
import Image from 'next/image';
import React from 'react'
import glowImage from "/public/icons/ellipse.svg"
function ProductDetails() {
  return (
    <div className="">
      <div className="flex flex-col mx-auto items-center text-center justify-start pt-20 md:w-4/5">
        <div className="md:w-[504px]  py-6 md:h-[91px] relative">
          <Image
          alt='glow'
            src={glowImage}
            width={100}
            height={100}
            className="absolute top-1 md:-top-12 w-full "
          />

          <h1 className="text-white md:text-42 text-2xl  font-semibold uppercase">
            our products
          </h1>
        </div>
        <p className="text-secondaryPurple  md:max-w-2/5 mb-8 font-moderat text-lg  ">
          SSZ Solutions offers high-quality, reliable products for amazing
          prices and the best customer
        </p>
      </div>
    </div>
  );
}

export default ProductDetails
