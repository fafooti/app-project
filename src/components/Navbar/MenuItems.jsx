import React from 'react'
import Link from "next/link";
import Image from "next/image";
import store from "/public/icons/store.svg";
import faq from "/public/icons/faq.svg"
import status from "/public/icons/status.svg";

function MenuItems() {
   
  return (
    <div className="text-gray-700 my-8 px-6 flex flex-col  justify-center items-start border-t-2 border-secondaryWhite w-screen ">
      <Link href="/products" className="flex items-center gap-2 mt-12 ">
        <Image width={12} height={12} src={store} alt="menu" />
        Store
      </Link>
      <Link href="/" className="flex items-center gap-2  mt-5">
        <Image width={12} height={12} src={status} alt="menu" />
        Status
      </Link>
      <Link href="/" className="flex items-center gap-2  mt-5 mb-10">
        <Image width={12} height={12} src={faq} alt="menu" />
        FAQ
      </Link>
    </div>
  );
}

export default MenuItems
