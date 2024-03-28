import { Button } from '@/components';
import icon from "/public/icons/category.svg"
import React from 'react'
const categories =["rust","call of duty","apex legends", "escape from tokyo" ,"dazy","spoofers"]
function Categories() {
  return (
    <div className=" flex items-center flex-wrap justify-center gap-2.5  px-8">
      {categories.map((category) => (
        <Button className="border border-secondaryWhite bg-secondaryBlack text-white text-xs font-semibold ">
          <img src={icon.src} />
          {category}
        </Button>
      ))}
    </div>
  );
}

export default Categories
