import React from "react";
import DetailsCard from "./DetailsCard";
import index from "@/pages/faq";
const info = [
  {
 
    id:1,
    title: "1000 + product ",
    desc: "We are proud to have sold over 4,000 products to our customers",
  },
  {
  
    id:2,
    title: "3000+ product solo",
    desc: "We are proud to to our customers",
  },
  {

    id:3,
    title: "4000+ product  ",
    desc: "We are proud to have sold over 4,000 products to our customers",
  },
  {
   id:4,
    title: "2000+ product solo",
    desc: "We are proud to have sold over 4,000 products to our customers",
  },
];
function DeatilsContainer() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8  max-w-[90%] 1440:max-w-[1281px]  mx-auto pt-32 ">
      {info.map((item, index) => (
        <DetailsCard key={index} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}

export default DeatilsContainer;
