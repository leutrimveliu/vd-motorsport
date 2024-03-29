import React from "react";
import Carousel from "react-bootstrap/Carousel";
import porsche1 from "../../assets/porsche1.jpg";
import porsche3 from "../../assets/porsche3.jpeg";
import porsche4 from "../../assets/porsche4.jpeg";
import "./SliderProjects.scss";

function SliderProjects() {
  return (
    <div>
      <Carousel interval={100000000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "contain" }}
            src={porsche1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "contain" }}
            src={porsche3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "contain" }}
            src={porsche4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderProjects;
