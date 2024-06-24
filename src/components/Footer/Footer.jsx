import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="border-t border-secondaryWhite py-6">
     <div className="xl:w-[1216px] flex md:flex-row flex-col justify-between  gap-4 text-xs lg:text-sm w-[95%]    mx-auto  ">
        <div className="  flex flex-col  md:flex-row gap-2 md:items-center  ">
          <p className="text-white pl-4 md:pl-0">SSZ.GG</p>
          <p className=" text-center text-secondaryGray">
            {" "}
            | Copyright © SSZ.GG 2023 | All Rights Reserved
          </p>
        </div>
        <div className=" text-secondaryGray flex gap-3 items-center text-sm justify-center md:justify-end whitespace-nowrap">
          <Link className="hover:text-white hover:underline" href="/">
            {" "}
            privacy policy |{" "}
          </Link>
          <Link className="hover:text-white hover:underline" href="/">
            terms of service
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
