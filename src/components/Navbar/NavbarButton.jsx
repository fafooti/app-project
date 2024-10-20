
import cheat from "/public/icons/cheat.svg";
import Image from "next/image";
function NavbarButton() {
  return (
    <div className="flex w-full flex-col md:flex-row  items-center justify-center text-white md:gap-2 gap-4 px-4  whitespace-nowrap ">
      <button className="border border-secondaryWhite rounded py-2 px-3  w-full md:w-fit bg-primaryBlack text-xs ">
        Discorde
      </button>
      <button className=" flex rounded  w-full md:w-fit items-center justify-center gap-2 px-3 py-2 bg-primaryPurple text-xs  ">
        <Image width={10} height={10} src={cheat} alt="icon" />
        Our Cheats
      </button>
    </div>
  );
}

export default NavbarButton;
