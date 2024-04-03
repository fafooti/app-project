import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import NavItems from "./NavItems";
import store from "/public/icons/store.svg";
import close from "/public/icons/close.svg";
import NavbarButton from "./NavbarButton";
import MenuItems from "./MenuItems";
import menu from "/public/icons/menu.svg";
import status from "/public/icons/status.svg";
import faq from "/public/icons/faq.svg";
function Navbar() {
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
    <header
      style={{
        background: "linear-gradient(rgba(21, 22, 27, 1),rgba(24, 25, 30, 1))",
      }}
      className=" fixed top-0 z-30 border-b border-secondaryWhite w-full "
    >
      <div className=" flex justify-between items-center  xl:w-[1216px]  md:py-4 py-5 md:px-1 px-4 mx-auto">
        <div className="flex justify-between items-center  ">
          <Link href="/">
            <Image width={30} height={20} src={logo} alt="logo" />
          </Link>
          <h2 className="text-white pl-2 text-lg md:text-md leading-6 ">
            SSZ.GG
          </h2>
        </div>
        <nav className="flex   md:justify-between justify-end  text-primaryGray">
          <div className="hidden md:flex  justify-center flex-grow">
            <div className="flex items-center gap-8 text-sm pl-8 ">
              <Link href="/" className="flex items-center gap-2 ">
                <Image width={10} height={10} src={store} />
                <span className="hover:border-b-2 border-primaryGray">
                  Store
                </span>
              </Link>
              <Link href="/status" className="flex items-center gap-2 ">
                <Image width={10} height={10} src={status} />
                <span className="hover:border-b-2 border-primaryGray">
                  {" "}
                  Status
                </span>
              </Link>
              <Link href="" className="flex items-center gap-2">
                <Image width={10} height={10} src={faq} />
                <span className="hover:border-b-2 border-primaryGray">
                  {" "}
                  FAQ
                </span>
              </Link>
            </div>
          </div>

          <div className="md:hidden ">
            <button
              className={` mr-4  ${
                isOpen ? "bg-secondaryWhite p-2 rounded-full" : ""
              }`}
              onClick={handleNavbar}
            >
              {isOpen ? (
                <Image width={20} height={20} src={close} />
              ) : (
                <Image width={40} height={30} src={menu.src} />
              )}
            </button>
          </div>
        </nav>
        <div className="hidden justify-center md:flex ">
          <NavbarButton />
        </div>
      </div>
      {isOpen && (
        <div className=" flex flex-col h-screen items-start justify-start basis-full ">
          <MenuItems />
          <NavbarButton />
        </div>
      )}
    </header>
  );
}

export default Navbar;
