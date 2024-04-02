import React from "react";
import DetailsCard from "./DetailsCard";
const info = [
  {
    icon: "",
    id:1,
    title: "1000 + product ",
    desc: "We are proud to have sold over 4,000 products to our customers",
  },
  {
    icon: "",
    id:2,
    title: "3000+ product solo",
    desc: "We are proud to to our customers",
  },
  {
    icon: "",
    id:3,
    title: "4000+ product  ",
    desc: "We are proud to have sold over 4,000 products to our customers",
  },
  {
    icon: "",
   id:4,
    title: "2000+ product solo",
    desc: "We are proud to have sold over 4,000 products to our customers",
  },
];
function DeatilsContainer() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 pb-20 md:w-4/5 xl:max-w-7xl max-w-[90%] mx-auto pt-32 ">
      {info.map((item) => (
        <DetailsCard key={item.id} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}

export default DeatilsContainer;
