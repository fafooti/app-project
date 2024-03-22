import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import store from "/public/icons/store.svg";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import MenuItems from "./MenuItems";
const NavLink = () => {
  return (
    <div className="flex items-center gap-8">
      <Link href="/" className="flex items-center gap-2">
        <Image width={12} height={12} src={store} />
        Store
      </Link>
      <Link href="/about" className="flex items-center gap-2">
        <Image width={12} height={12} src={store} />
        Status
      </Link>
      <Link href="/about" className="flex items-center gap-2">
        <Image width={12} height={12} src={store} />
        FAQ
      </Link>
    </div>
  );
};
function NavItems() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="flex w-2/3 md:justify-around justify-end text-zinc-500">
        <div className="hidden md:flex ">
          <NavLink />
        </div>
        <div className="hidden justify-center md:flex ">
          <NavbarButton />
        </div>
        <div className="md:hidden px-7">
          <button className="text-red-700  " onClick={handleNavbar}>
            {isOpen ? "X" : "|||"}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col h-screen items-start justify-start basis-full ">
          {/* <NavLink /> */}
          <MenuItems />
          <NavbarButton />
        </div>
      )}
    </>
  );
}

export default NavItems;
