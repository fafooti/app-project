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
      className=" fixed top-0 z-30 border-b border-secondaryWhite flex flex-wrap w-full items-center md:justify-center justify-between py-7 md:py-4   "
    >
      <div className="flex items-center justify-start  ">
        <Image width={30} height={20} src={logo} />
        <h2 className="text-white pl-2 text-lg md:text-md leading-6 "> SSZ.GG</h2>
      </div>
      
        <NavItems />
      
    </header>
  );
}

export default Navbar;
