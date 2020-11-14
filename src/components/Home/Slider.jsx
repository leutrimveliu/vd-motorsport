import React, { useState } from "react";
import ImgComp from "./ImgComp";
import "./Slider.scss";
import i1 from "../../assets/car1.jpg";
import i2 from "../../assets/car2.jpg";
import i3 from "../../assets/mercedes.png";
import i4 from "../../assets/audi.jpg";
import i5 from "../../assets/audi2.jpg";
import i6 from "../../assets/audi3.jpg";

function Slider() {
  const [x, setX] = useState(0);
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
    <ImgComp src={i6} />,
  ];

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Slider;
