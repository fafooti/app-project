import React from "react";

function MediaTab() {
  return (
    <div className="grid  lg:grid-cols-2  w-fit mx-auto gap-4 justify-center ">
      <div className="mx-auto ">
        <p className="text-3xl text-white pb-4">title</p>
        <ul className="text-secondaryGray flex flex-col whitespace-pre-wrap items-start justify-center text-base   lg:max-w-[488px]">
          <li>
            <spna className="pr-2">[+]</spna>item1
          </li>
          <li>
            <spna className="pr-2">[+]</spna>Compatible with both Steam and
            Battlenet game launchers
          </li>
          <li>
            <spna className="pr-2">[+]</spna>item1
          </li>
        </ul>
      </div>
      <div className="mx-auto">
        <p className="text-3xl text-white pb-4">title2</p>
        <ul className="text-secondaryGray  text-base">
          <li>
            <spna className="pr-2">[+]</spna>Compatible with both Steam and
            Battlenet game launchers
          </li>
          <li>
            <spna className="pr-2">[+]</spna>item1
          </li>
          <li>
            <spna className="pr-2">[+]</spna>Compatible with both Steam and
            Battlenet game launchers
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MediaTab;
