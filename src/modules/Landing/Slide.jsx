import Image from "next/image";
import emptyStar from "/public/icons//emptystar.svg";
import filledStar from "/public/icons/filledstar.svg";

function Slide({ name, rate, desc }) {
  const starCount = 5;
  const filledStars = Math.floor(rate);
  const hasHalfStar = rate - filledStars >= 0.5;
  return (
    <div
      className={`bg-secondaryBlack py-4 px-6 w-fit justify-center h-[166px] gap-4  flex flex-col border-x border-dashed border-[#666F78]/[12%]`}
    >
      <div className="flex item-center justify-between">
        <p className="text-lg text-white">{name}</p>
        <div className="flex gap-0.5">
          {[...Array(starCount)].map((_, index) => {
            if (index < filledStars) {
              return (
                <Image
                  alt="slide"
                  key={index}
                  width={16.75}
                  height={15.75}
                  src={filledStar}
                />
              );
            } else if (index === filledStars && hasHalfStar) {
              return (
                <Image
                  alt="score"
                  key={index}
                  width={16.75}
                  height={15.75}
                  src={filledStar}
                />
              );
            } else {
              return (
                <Image
                  alt="score"
                  key={index}
                  width={16.75}
                  height={15.75}
                  src={emptyStar}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="text-primaryGray text-base max-w-[341px] ">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Slide;
