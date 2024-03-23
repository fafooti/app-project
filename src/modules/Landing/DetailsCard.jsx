import React from 'react'
import Image from 'next/image';
import status from "/public/icons/status.svg";

function DetailsCard({icon,title,desc}) {
  return (
    <div className=" bg-secondaryBlack text-left flex flex-col gap-3 pl-7 pr-9 py-7 border-t border-secondaryWhite relative w-full h-full ">
      <div className="bg-white absolute -top-0.5 w-2.5 left-0 h-0.5"></div>
      <div className="flex items-center gap-2.5">
        <Image width={17.5} height={15.5} src={status} />
        <p className="text-white">
        
          {title}
        </p>
      </div>
      <p className=" text-primaryGray max-w-72">{desc}</p>
    </div>
  );
}

export default DetailsCard;
