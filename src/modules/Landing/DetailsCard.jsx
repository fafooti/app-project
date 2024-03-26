import React, { useState } from "react";
import Image from "next/image";
import status from "/public/icons/status.svg";

function DetailsCard({ icon, title, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="z-20 bg-secondaryBlack text-left flex flex-col gap-4 pl-5 pr-7 py-7 border-t border-secondaryWhite relative w-full h-full hover:border-t-primaryPurple  "
      >
        <div
          className={`bg-white absolute -top-0.5 w-2.5 left-0 h-0.5 ${
            isHovered ? "opacity-0" : ""
          } `}
        ></div>
        <div className="flex items-center gap-2.5 pt-2.5">
          <Image width={17.5} height={15.5} src={status} />
          <p className="text-white">{title}</p>
        </div>
        <p className=" text-primaryGray max-w-64 ">{desc}</p>
      </div>
      <div
        className={`absolute z-0 top-2 -left-2 w-full h-3/4 px-32 ${
          isHovered ? "border" : ""
        }  border-primaryPurple z-0`}
      ></div>
    </div>
  );
}

export default DetailsCard;
