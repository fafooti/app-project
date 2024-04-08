import React from 'react'
import style from "./skleton.module.css"
function Skeleton({className}) {
  return (
    <div className={`  bg-secondaryWhite ${className}  ${style.pulse}`}></div>
  );
}

export default Skeleton
