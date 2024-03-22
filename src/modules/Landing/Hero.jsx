import React from "react";
import { Button } from "/src/components";
import icon from "/public/icons/buttonicon.svg";
function Hero() {
  return (
    <div className="w-full">
      <section
        style={{ backgroundImage: "url('/background/hero.svg')" }}
        className="bg-no-repeat bg-center bg-cover h-screen text-center "
      >
        <a
          href=""
          className="bg-primaryBlack py-2 px-4 rounded border-secondaryWhite border-2 text-primaryGreen"
        >
          wide variaty gamees
        </a>
        <p className="text-white text-5xl font-semibold leading-none uppercase">
          ELEVATE YOUR GAMEPLAY WITH OUR CHEATS FOR{" "}
          <span className="text-primaryPurple">RUST</span>
        </p>
        <p className="text-secondaryPurple">
          SSZ Solutions offers high-quality, reliable products for amazing
          prices and the best customer support
        </p>
        <div className="flex gap-2 justify-center ">
          <Button className="text-white  uppercase bg-primaryPurple">
            <img src={icon.src} />
            our Cheats
          </Button>
          <Button className="bg-primaryBlack border-2 text-white ">
            Join our discord
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
