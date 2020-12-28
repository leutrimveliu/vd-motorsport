import React from "react";
import Carousel from "react-bootstrap/Carousel";
import turbo from "../../assets/turbo11.jpeg";
import turbo2 from "../../assets/turbo12.jpeg";
import projects from "../../assets/projekte.jpeg";
import bmw2 from "../../assets/bmw2.jpeg";
import bmw3 from "../../assets/bmwfita.jpeg";
import lambo from "../../assets/lambo1.jpg";

function SlideProject() {
  return (
    <div>
      <Carousel
        // autoPlay={false}
        interval={100000000}
        controls={true}
        indicators={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "contain" }}
            src={turbo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" justify-content-center"
            style={{ objectFit: "contain", width: "80%" }}
            src={bmw2}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className=" justify-content-center"
            style={{ objectFit: "contain", width: "80%" }}
            src={lambo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="justify-content-center"
            style={{ objectFit: "contain", width: "75%" }}
            src={bmw3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "contain" }}
            src={projects}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ objectFit: "contain" }}
            src={turbo2}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SlideProject;
