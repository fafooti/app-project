import React from "react";
import { Button } from "/src/components";
import icon from "/public/icons/faq.svg"
function Hero() {
  return (
    <div>
      <section className="  w-wcreen pt-2 ">
        <div className="flex flex-col mx-auto items-center text-center justify-center pt-16 md:w-4/5 1440:w-[1013px]">
          <a
            href=""
            className=" bg-primaryBlack py-2 px-4 mb-7 text-xs rounded border-secondaryWhite border-2  text-primaryGreen w-fit"
          >
            wide variaty gamees
          </a>
          <h1 className=" text-white md:text-52 text-3xl mb-5 font-semibold uppercase">
            ELEVATE YOUR GAMEPLAY WITH OUR CHEATS FOR{" "}
            <span className="text-primaryPurple ">RUST</span>
          </h1>
          <p className="text-secondaryPurple   md:max-w-[80%] mb-8 font-moderat text-lg  ">
            Your #1 Trusted Cheat Provider, offering high-quality, reliable
            products for amazing prices with top notch customer support.
          </p>
          <div className="flex gap-2 justify-center  ">
            <Button className="text-white uppercase   bg-primaryPurple">
              <img src={icon.src} />
              our Cheats
            </Button>
            <Button className="py-2.5 px-3.5 text-sm bg-primaryBlack uppercase border-2 border-secondaryWhite text-white ">
              Join our discord
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
