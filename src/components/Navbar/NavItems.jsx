import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import store from "/public/icons/store.svg";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import MenuItems from "./MenuItems";
import menu from "/public/icons/menu.svg"
import status from "/public/icons/status.svg"
import faq from "/public/icons/faq.svg"
import close from "/public/icons/close.svg"
const NavLink = () => {
  return (
    <div className="flex items-center gap-8 text-sm pl-8 ">
      <Link href="/" className="flex items-center gap-2 ">
        <Image width={10} height={10} src={store} />
        <span className="hover:border-b-2 border-primaryGray">Store</span>
      </Link>
      <Link
        href="/status"
        className="flex items-center gap-2 "
      >
        <Image width={10} height={10} src={status} />
        <span className="hover:border-b-2 border-primaryGray"> Status</span>
      </Link>
      <Link
        href=""
        className="flex items-center gap-2"
      >
        <Image width={10} height={10} src={faq} />
        <span className="hover:border-b-2 border-primaryGray"> FAQ</span>
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
      <nav className="flex w-2/3  md:justify-between justify-end  text-primaryGray">
        <div className="hidden md:flex  justify-center flex-grow">
          <NavLink />
        </div>
        <div className="hidden justify-center md:flex ">
          <NavbarButton />
        </div>
        <div className="md:hidden ">
          <button className={` mr-4  ${isOpen ? "bg-secondaryWhite p-2 rounded-full":""}`} onClick={handleNavbar}>
            {isOpen ? <Image width={20} height={20} src={close}/> : <Image  width={30} height={30} src={menu.src} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col h-screen items-start justify-start basis-full ">
         
          <MenuItems />
          <NavbarButton />
        </div>
      )}
    </>
  );
}

export default NavItems;
