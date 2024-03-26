import React from "react";
import DetailsCard from "./DetailsCard";
const info = [
  {
    icon: "",
  
    title: "1000 + product ",
    desc: "We are proud to have sold over 4,000 products to our customers",
  },
  {
    icon: "",
   
    title: "3000+ product solo",
    desc: "We are proud to to our customers",
  },
  {
    icon: "",
   
    title: "4000+ product  ",
    desc: "We are proud to have sold over 4,000 products to our customers",
  },
  {
    icon: "",
  
    title: "2000+ product solo",
    desc: "We are proud to have sold over 4,000 products to our customers",
  },
];
function DeatilsContainer() {
  return (
    <div className="grid md:grid-cols-2  xl:grid-cols-4 gap-8 pb-20 md:w-4/5 xl:max-w-7xl max-w-[90%] mx-auto ">
      {info.map((item) => (
        <DetailsCard title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}

export default DeatilsContainer;
