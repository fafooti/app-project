import { useEffect } from "react";

function ProductDuration({
  duration,
  price,
  stock,
  id,
  onClick,
  selectedDuration,
}) {
  useEffect(() => {
  }, []);
  return (
    <div
      className={`bg-secondaryBlack w-full rounded border py-2 px-3 flex flex-col ${
        selectedDuration === id
          ? "border-primaryPurple"
          : "border-secondaryGray"
      }`}
      onClick={() => onClick(id)}
    >
      <div className="pb-5 text-sm text-secondaryGray flex justify-start ">
        <p>{duration}</p>
      </div>
      <div className="flex justify-between   items-center">
        <p className="text-white text-xl  ">${price}</p>
        <p className="text-secondaryGray text-sm ">{stock} in stocks</p>
      </div>
    </div>
  );
}

export default ProductDuration;
