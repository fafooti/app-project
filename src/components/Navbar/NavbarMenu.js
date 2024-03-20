import Link from "next/link";

const NavbarMenu = (isOpen, setIsOpen) => {
  return (
    <div>
      <div
        className={`flex-1 md:h-screen justify-self-center pb-3 mt-8 md:block md:mt-0 ${
          isOpen ? "p-12 md:p-0 block" : "hidden"
        } `}
      >
        <ul className=" md:h-auto items-center justify-center md:flex text-white">
          <li onClick={setIsOpen}>
            <Link href="/">home</Link>
          </li>
          <li onClick={setIsOpen}>
            <Link href="/about">about</Link>
          </li>
          <li className="text-white">hiiiii</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;
