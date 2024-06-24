import React, { useState } from "react";

function Faq({ question, answer,}) {
    const [isOpen,setIsOpen]=useState(false)
    const handleToggle=()=>{
        setIsOpen((prev)=>!prev)
    }
  return (
    <div>
      <div className="py-4 md:px-12 px-4  border text-left rounded border-secondaryWhite bg-secondaryBlack">
        <div
          className={`md:text-22 font-medium cursor-pointer text-sm flex items-center justify-between ${
            isOpen ? "text-white" : "text-secondaryGray "
          }`}
          onClick={handleToggle}
        >
          {question}
          <span className=" ">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
          <div
            className={`max-h-0  overflow-hidden ${
              isOpen ? "max-h-[120px]" : ""
            }  w-full pt-3 `}
          >
            <p className="text-secondaryGray md:text-lg text-sm border-t border-secondaryWhite pt-4">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Faq;