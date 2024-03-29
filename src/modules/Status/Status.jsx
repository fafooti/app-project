import React from "react";

function Status({title,details}) {
    const getStatusColor = (status) => {
      switch (status) {
        case "undetected":
          return "text-primaryGreen";
        case "detected":
          return "text-[#E4343F]";
        case "use-at-own-risk":
          return "text-[#E47E34]";
          case "updating":
            return "text-primaryPurple";
        default:
          break;
      }
    };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-xl text-white md:text-3xl">{title}</p>
         {
            details.map((item)=>(
                 <div className="rounded md:text-22 text-sm bg-secondaryBlack w-full md:px-7 py-5 flex justify-between items-center border border-secondaryBlack">
          <p className={`text-white `} >{item.name}</p>
          <p className={getStatusColor(item.status)} >{item.status}</p>
        </div>
            ))
         }
           
        
        
      </div>
    </>
  );
}

export default Status;
