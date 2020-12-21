import React from "react";
import Carousel from "react-bootstrap/Carousel";
import i1 from "../../assets/car1.jpg";
import i2 from "../../assets/car2.jpg";
import i5 from "../../assets/audi2.jpg";
import i6 from "../../assets/audi3.jpg";
import "./SliderProjects.scss";

function SliderProjects() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "contain" }}
            src={i1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "contain" }}
            src={i2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "contain" }}
            src={i6}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ objectFit: "contain" }}
            src={i5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderProjects;
