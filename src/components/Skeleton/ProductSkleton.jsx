import React from "react";
import style from "./skleton.module.css";
function ProductSkleton({ className }) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={`  bg-secondaryWhite w-[280px] h-[158px]  ${style.pulse}`}
      ></div>
      <div className="flex justify-between">
        <div className="w-20 h-4 bg-secondaryWhite"></div>
        <div className="w-10 h-4 bg-secondaryWhite"></div>
      </div>
      <div
        className={` bg-secondaryWhite  w-[280px] h-[25px]   ${style.pulse}`}
      ></div>
    </div>
  );
}

export default ProductSkleton;
