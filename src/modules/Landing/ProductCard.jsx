import React from 'react'
import product from "/public/common/product.svg"
import Image from 'next/image'
import { Button } from '@/components'
function PopularProductCard({buttonText,items,title}) {
  return (
    <div className="flex flex-col w-fit justify-center h-full gap-4">
      <div className="relative w-full aspect-w-16 aspect-h-9 ">
        <Image className='rounded' width={280} height={158} src={product.src} />
      </div>
      <div className="flex justify-between">
        <p className="text-white ">
          {title}
        </p>
        <p className="text-secondaryGray">{items && items + "items"}</p>
      </div>
      <Button className="text-center bg-primaryBlack hover:bg-primaryPurple border text-white border-secondaryWhite ">
        {buttonText}
      </Button>
    </div>
  );
}

export default PopularProductCard
