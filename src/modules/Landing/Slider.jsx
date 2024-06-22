import Marquee from "react-fast-marquee";
import Slide from "./Slide";
import shadow from "/public/common/shadow.svg";
const data = [
  {
    id: 1,
    name: "Product A",
    rate: 1.5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo vel lectus malesuada tincidunt nec vel justo.",
  },
  {
    id: 2,
    name: "Product B",
    rate: 3.8,
    desc: "Sed at nisi sit amet augue bibendum tristique. In sed purus sit amet orci commodo varius non in magna.",
  },
  {
    id: 3,
    name: "Product C",
    rate: 5.0,
    desc: "Vestibulum eu massa nec magna tincidunt malesuada. Sed sit amet lacus nec tortor commodo feugiat.",
  },
  {
    id: 4,
    name: "Product D",
    rate: 4.2,
    desc: "Integer nec libero nec eros ullamcorper iaculis sed non ligula. Duis ultricies mauris at feugiat tincidunt.",
  },
  {
    id: 5,
    name: "Product E",
    rate: 3.9,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 6,
    name: "Product F",
    rate: 4.7,
    desc: "Quisque sed semper risus, at tincidunt sapien. Vivamus nec faucibus orci, ac vestibulum ligula.",
  },
  {
    id: 7,
    name: "Product G",
    rate: 4.0,
    desc: "Proin lobortis odio sit amet interdum condimentum. Integer sit amet massa pretium, efficitur velit at, tristique velit.",
  },
  {
    id: 8,
    name: "Product H",
    rate: 4.9,
    desc: "Donec volutpat, sem sed vehicula consectetur, risus purus placerat dolor, id maximus lorem nunc ut tortor.",
  },
  {
    id: 9,
    name: "Product I",
    rate: 3.5,
    desc: "Maecenas lobortis quam nec nulla varius, ac pretium sem luctus. Nullam bibendum enim quis risus iaculis rhoncus.",
  },
  {
    id: 10,
    name: "Product J",
    rate: 3.5,
    desc: "Maecenas lobortis quam nec nulla varius, ac pretium sem luctus. Nullam bibendum enim quis risus iaculis rhoncus.",
  },
  {
    id:11,
    name: "Product K",
    rate: 3.5,
    desc: "Maecenas lobortis quam nec nulla varius, ac pretium sem luctus. Nullam bibendum enim quis risus iaculis rhoncus.",
  },
  {
    id: 12,
    name: "Product L",
    rate: 3.5,
    desc: "Maecenas lobortis quam nec nulla varius, ac pretium sem luctus. Nullam bibendum enim quis risus iaculis rhoncus.",
  },
];
function Slider() {
  return (
    <div className="pt-20 flex flex-col gap-16">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="text-xl md:text-42 inline-block lg:w-[855px] text-center">
          <p className="text-white md:text-42 lg:text-5xl font-semibold text-xl ">
            WHAT{" "}
            <span className="text-primaryPurple  z-10 relative whitespace-nowrap ">
              OUR CUSTOMERS
            </span>{" "}
            HAVE TO SAY ABOUT OUR PRODUCTS
          </p>
          <p className="md:text-base text-sm font-medium text-secondaryPurple pt-7">
            Still don’t believe in our products? See what our customer have to
            say.
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src={shadow.src}
          className="top-1.5  md:-top-5 right-0 left-0 absolute  z-10"
        />
        <img
          src={shadow.src}
          className="bottom-1.5  md:-bottom-5 rotate-180 right-0 left-0 absolute  z-10"
        />
        <div className="overflow-hidden  ">
          <Marquee
            autoFill
            direction="up"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3  gap-x-8  gap-y-5 grid-col-1 relative `}
            >
              {data.map((item, index) => (
                <Slide
                  key={index}
                  name={item.name}
                  rate={item.rate}
                  desc={item.desc}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Slider;
