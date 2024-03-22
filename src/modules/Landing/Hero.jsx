import React from "react";
import { Button } from "/src/components";
import icon from "/public/icons/buttonicon.svg";
import "./hero";
function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/background/hero.svg')" }}
      className=" bg-no-repeat bg-center bg-cover h-screen  "
    >
      <section className="w-full ">
        <div className="flex flex-col mx-auto items-center text-center justify-start pt-8 md:w-4/5">
          <a
            href=""
            className="bg-primaryBlack py-2 px-4 mb-7  rounded border-secondaryWhite border-2 md:mt-8 text-primaryGreen w-fit"
          >
            wide variaty gamees
          </a>
          <p className="text-white text-5xl mb-5 font-semibold uppercase">
            ELEVATE YOUR GAMEPLAY WITH OUR CHEATS FOR{" "}
            <span className="text-primaryPurple">RUST</span>
          </p>
          <p className="text-secondaryPurple  md:max-w-2/5 mb-8 font-moderat text-lg font-medium ">
            SSZ Solutions offers high-quality, reliable products for amazing
            prices and the best customer
          </p>
          <div className="flex gap-2 justify-center  ">
            <Button className="text-white uppercase  bg-primaryPurple">
              <img src={icon.src} />
              our Cheats
            </Button>
            <Button className="bg-primaryBlack uppercase border-2 border-secondaryWhite text-white ">
              Join our discord
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
