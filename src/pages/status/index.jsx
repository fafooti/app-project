import Layout from "@/layouts/Layout";
import Status from "@/modules/Status/Status";
import React from "react";
const statuses = [
  {
    id:1,
    title: "rust",
    details: [
      {
        id: 1,
        name: "V6 Chair + Spoofer",
        status: "updating",
      },
      {
        id: 2,
        name: "V6 Chair + Spoofer",
        status: "undetected",
      },
      {
        id: 3,
        name: "V6 Chair + Spoofer",
        status: "undetected",
      },
    ],
  },
  {
    id:2,
    title: "MODERN WARFARE",
    details: [
      {
        id: 4,
        name: "SSZ SCRIPT",
        status: "use-at-own-risk",
      },
      {
        id: 5,
        name: "SSZ SCRIPT",
        status: "detected",
      },
    ],
  },
];
function index() {
  return (
    <Layout>
      <div
        style={{ background: "url('/background/hero.svg')" }}
        className="!bg-no-repeat !bg-contain xl:w-[1216px]  w-11/12 min-h-screen  mx-auto  py-28 "
      >
        {" "}
        <div className="flex flex-col mx-auto items-center text-center justify-start pt-24 pb-10 md:w-4/5">
          <p className="text-white md:text-5xl text-3xl mb-5 font-semibold uppercase">
            STATUS
          </p>
          <p className="text-secondaryPurple  md:w-[713px] mb-8 font-moderat text-lg  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="flex flex-col gap-5 pt-4">
          {statuses.map((item) => (
            <div key={item.id} className="">
              <Status title={item.title} details={item.details} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default index;
