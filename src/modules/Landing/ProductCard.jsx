import React from 'react'
import product from "/public/common/product.svg"
import Image from 'next/image'
import { Button } from '@/components'
function PopularProductCard() {
  return (
    <div className='flex flex-col w-fit justify-center h-full'>
      <div className='w-[280px] h-[158px] bg-center bg-cover rounded-5'>
        <img src={product.src} />
      </div>
      <div className='flex justify-between'>
        <p>Rust</p>
        <p>4 items</p>
      </div>
      <Button className='text-center bg-primaryBlack hover:bg-primaryPurple border border-secondaryWhite text-sm py-1'>view All</Button>
    </div>
  )
}

export default PopularProductCard
