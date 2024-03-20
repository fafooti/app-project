import icon from "/public/icons/navbutton.svg";
import store from "/public/icons/store.svg";
import Image from "next/image";
function NavbarButton() {
  return (
    <div className="flex w-full flex-col md:flex-row  items-center justify-center text-white md:gap-4 px-4  whitespace-nowrap ">
      <button className="border rounded py-2 px-3  w-full md:w-fit bg-primaryBlack text-sm leading-4 ">
        Discorde
      </button>
      <button className=" flex rounded  w-full md:w-fit items-center justify-center gap-2 px-3 py-2 bg-primaryPurple text-sm leading-4  ">
        <Image className="" src={store} width={12} height={12} />
        Our Cheats
      </button>
    </div>
  );
}

export default NavbarButton;
