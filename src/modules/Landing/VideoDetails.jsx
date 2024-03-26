import React, { useState } from 'react'

function VideoDetails({ id, title, desc, isActive, onItemClick }) {
     const handleClick = () => {
       onItemClick(id);
     };
  return (
    <div
      className={` flex flex-col  pl-5  ${
        isActive ? "border-l border-primaryPurple" : ""
      } `}
      onClick={handleClick}
    >
      <p className="text-base font-semibold text-white text-left pb-4">{title}</p>
      <p className="text-primaryGray">{desc}</p>
    </div>
  );
}

export default VideoDetails
