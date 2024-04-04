
import React from 'react'

function ProductDetails() {
  return (
    <div className="">
      <div className="flex flex-col mx-auto items-center text-center justify-start pt-16 md:w-4/5">
        <div
          style={{
            backgroundImage: "url('/icons/ellipse.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className='md:w-[504px] md:h-[191px] w-1/2 h-1/2'
        >
          <p className="text-white md:text-42 text-2xl mb-5 font-semibold uppercase">
            our products
          </p>
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
