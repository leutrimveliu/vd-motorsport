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
      <Carousel autoPlay={true} interval={7000} controls={true}>
        <Carousel.Item>
          <img className="d-block " width="300px" src={i1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block " width="300px" src={i2} alt="Third slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" width="300px" src={i6} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block " width="300px" src={i5} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderProjects;
