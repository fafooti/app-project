import React from "react";
import VideoDetails from "./VideoDetails";
import { useState } from "react";
import Image from "next/image";
import video from "/public/common/video.svg"
const items = [
  {
    id: 1,
    title: "MW3 | STEALTH CHAIR",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    id: 2,
    title: "MW3 | STEALTH CHAIR",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    id: 3,
    title: "MW3 | STEALTH CHAIR",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
];

function VideoContainer() {
    const [activeItemId, setActiveItemId] = useState(null);

    const handleItemClick = (itemId) => {
      setActiveItemId(itemId);
    };

  return (
    <div className=" pt-16 flex lg:flex-row  justify-between items-center  md:w-full xl:max-w-7xl lg:gap-2 lg:px-8 flex-col gap-4">
      <div className="w-full lg:w-[697px] h-[200px] md:h-[394px] ">
        <Image width={697} height={394} src={video} />
      </div>
      <div className=" lg:max-w-[404px] flex flex-col gap-8 ">
        {items.map((item) => (
          <VideoDetails
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            isActive={activeItemId === item.id}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoContainer;
