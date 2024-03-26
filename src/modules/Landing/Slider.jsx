import React from 'react'
import Slide from './Slide'
import style from "./hero.module.css"

function Slider() {
  return (
    <div className={`relative mt-20 bg-white md:w-full xl:max-w-7xl  ${style.slideshow}`}>
        <div className={` ${style.move}`}>
             <Slide />
      <Slide />
      <Slide />
      <Slide />
        </div>
     
    </div>
  );
}

export default Slider
