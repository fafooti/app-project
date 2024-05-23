import React, { useEffect, useState } from "react";
import categoryData from "/src/pages/api/categoey.json";
import allData from "/src/pages/api/products.json";
function Status({ title, categoryId }) {
  const [details, setDetails] = useState([]);

const handleDetails=()=>{

  const category=categoryData.data.find((item)=>item.id===categoryId)

   const productIds = category?.products?.map((product) => product?.id);

   const filteredProducts = allData.products.filter((product) =>
     productIds.includes(product.id.toString())
   );
  
   setDetails(filteredProducts);
 console.log(filteredProducts);
}
useEffect(()=>{
handleDetails()
},[])
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-xl  text-white md:text-3xl">{title}</p>
        {details?.map((item) => (
          <div
            key={item.id}
            className="rounded md:text-22 text-sm bg-secondaryBlack w-full px-7 py-4 flex justify-between items-center border border-secondaryWhite"
          >
            <p className={`text-white `}>{item.title}</p>
            <p
              style={{ color: item.other_settings[0].badge.color }}
      
            >
              {item.other_settings[0].badge.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Status;
