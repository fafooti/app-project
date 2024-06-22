import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import VideoDetails from "./VideoDetails";
import video from "/public/common/video.svg";

const items = [
  {
 
    id: 1,
    title: "MW1 | STEALTH CHAIR",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
   
    id: 2,
    title: "MW2 | STEALTH CHAIR",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
   
    id: 3,
    title: "MW3 | STEALTH CHAIR",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
];

function VideoContainer() {
  const [activeItemId, setActiveItemId] = useState(1);
  const intervalRef = useRef(null);

  const handleItemClicked = (itemId) => {
    setActiveItemId(itemId);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const currentIndex = items.findIndex((item) => item.id === activeItemId);
      const nextIndex = (currentIndex + 1) % items.length;
      setActiveItemId(items[nextIndex].id);
    },10000);
    return () => clearInterval(intervalRef.current);
  }, [activeItemId]);
  return (
    <div className=" mt-20 flex lg:flex-row  items-start  justify-between   md:w-full xl:max-w-7xl lg:gap-0 lg:px-8 flex-col md:gap-4 gap-16 ">
      <div className="w-full lg:w-[697px] lg:h-[200px] md:h-[394px]  ">
        <Image alt="video" className="" width={697} height={294} src={video} />
      </div>
      <div className=" lg:max-w-[404px]   flex flex-col gap-8 ">
        {items.map((item) => (
          <VideoDetails
          
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            isActive={activeItemId === item.id}
            onItemClick={handleItemClicked}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoContainer;
