import filledStar from "/public/icons/filledstar.svg"
import emptyStar from "/public/icons//emptystar.svg"
import Image from "next/image";


function Slide({ name, rate, desc }) {
   const starCount = 5;
   const filledStars = Math.floor(rate);
   const hasHalfStar = rate - filledStars >= 0.5;
  return (
    <div
      className={`bg-secondaryBlack p-5 w-full justify-center h-full gap-4  flex flex-col border-x border-dashed`}
    >
      <div className="flex justify-between">
        <p className="text-lg text-white">{name}</p>
        <div className="flex">
           {[...Array(starCount)].map((_, index) => {
          if (index < filledStars) {
            return <Image width={16.75} height={15.75} src={filledStar} />;
          } else if (index === filledStars && hasHalfStar) {
            return <Image width={16.75} height={15.75} src={filledStar} />;
          } else {
            return <Image width={16.75} height={15.75} src={emptyStar} />;
          }
        })}
        </div>
       
      </div>
      <div className="text-primaryGray max-w-[341px] ">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Slide;
