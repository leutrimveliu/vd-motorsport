import React from "react";
import Carousel from "react-bootstrap/Carousel";
import turbo from "../../assets/turbo11.jpeg";
import turbo2 from "../../assets/turbo12.jpeg";
import projects from "../../assets/projekte.jpeg";
import bmw2 from "../../assets/bmw2.jpeg";
import bmw3 from "../../assets/bmwfita.jpeg";
import lambo from "../../assets/lambo1.jpg";
import "./SlideProjects.scss";

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
            component="img"
            style={{
              height: "500px",
              objectFit: "contain",
              backgroundColor: "black",
            }}
            className="img"
            src={turbo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            component="img"
            style={{
              height: "500px",
              objectFit: "contain",
              backgroundColor: "black",
            }}
            className="img"
            src={bmw2}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            component="img"
            style={{
              height: "500px",
              objectFit: "contain",
              backgroundColor: "black",
            }}
            className="img"
            src={lambo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            component="img"
            style={{
              height: "500px",
              objectFit: "contain",
              backgroundColor: "black",
            }}
            className="img"
            src={bmw3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            component="img"
            style={{
              height: "500px",
              objectFit: "contain",
              backgroundColor: "black",
            }}
            className="img"
            src={projects}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            component="img"
            style={{
              height: "500px",
              objectFit: "contain",
              backgroundColor: "black",
            }}
            className="img"
            src={turbo2}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SlideProject;
