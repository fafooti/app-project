import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import NavItems from "./NavItems";
function Navbar() {
  return (
    <header
      style={{
        background: "linear-gradient(rgba(21, 22, 27, 1),rgba(24, 25, 30, 1))",
      }}
      className=" fixed top-0 z-[20] border-b-2 border-gray-800 flex flex-wrap w-full items-center justify-between py-8 md:p-4   "
    >
      <div className="flex items-center justify-start pl-8">
        <Image width={20} height={20} src={logo} />
        <h2 className="text-white pl-2 text-lg md:text-md leading-6 "> SSZ.GG</h2>
      </div>
      
        <NavItems />
      
    </header>
  );
}

export default Navbar;
