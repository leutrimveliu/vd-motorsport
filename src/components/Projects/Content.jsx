import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import motor from "../../assets/motor.jpeg";
import i5 from "../../assets/audi2.jpg";

import "./Content.scss";

function Content() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "auto",
      }}
    >
      <Container
        lg={8}
        className="Content px-5"
        style={{
          backgroundColor: "black",
          height: "auto",
          paddingTop: 150,
          //   backgroundColor: "black",
        }}
      >
        <Row className="card__borders  ">
          <Col lg={8} className="text__container ">
            <h3
              className="title d-flex justify-content-start mt-2"
              style={{ color: "#af231c" }}
            >
              Engine Project
            </h3>
            <p className="description d-flex ">
              A beautiful design and classic-inspired branding capture the
              visitor’s attention when arriving on All Round Auto Repair’s
              website. A navigation panel that follows users as they scroll down
              the page makes it easy to quickly locate any page within the
              website. The blog page contains informative articles that aim to
              educate visitors, adding value to the user experience.
            </p>
          </Col>
          <Col lg={4} className="img__container py-2">
            {" "}
            <img
              src={motor}
              alt=""
              srcset=""
              style={{ height: "250px", objectFit: "contain" }}
            />
          </Col>
        </Row>
        <Row className="card__borders">
          <Col lg={6} className="img__container pt-3 ">
            {" "}
            <img
              src={i5}
              alt=""
              srcset=""
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Col>
          <Col lg={6} className="text__container">
            <h3
              className="title d-flex justify-content-start mt-2"
              style={{ color: "#af231c" }}
            >
              Engine Project
            </h3>
            <p className="description d-flex  ">
              A beautiful design and classic-inspired branding capture the
              visitor’s attention when arriving on All Round Auto Repair’s
              website. A navigation panel that follows users as they scroll down
              the page makes it easy to quickly locate any page within the
              website. The blog page contains informative articles that aim to
              educate visitors, adding value to the user experience.
            </p>
          </Col>
        </Row>
        <Row className="card__borders  ">
          <Col lg={8} className="text__container ">
            <h3
              className="title d-flex justify-content-start mt-2"
              style={{ color: "#af231c" }}
            >
              Engine Project
            </h3>
            <p className="description d-flex ">
              A beautiful design and classic-inspired branding capture the
              visitor’s attention when arriving on All Round Auto Repair’s
              website. A navigation panel that follows users as they scroll down
              the page makes it easy to quickly locate any page within the
              website. The blog page contains informative articles that aim to
              educate visitors, adding value to the user experience.
            </p>
          </Col>
          <Col lg={4} className="img__container py-2">
            {" "}
            <img
              src={motor}
              alt=""
              srcset=""
              style={{ height: "250px", objectFit: "contain" }}
            />
          </Col>
        </Row>
        <Row className="card__borders">
          <Col lg={6} className="img__container pt-3 ">
            {" "}
            <img
              src={i5}
              alt=""
              srcset=""
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Col>
          <Col lg={6} className="text__container">
            <h3
              className="title d-flex justify-content-start mt-2"
              style={{ color: "#af231c" }}
            >
              Engine Project
            </h3>
            <p className="description d-flex  ">
              A beautiful design and classic-inspired branding capture the
              visitor’s attention when arriving on All Round Auto Repair’s
              website. A navigation panel that follows users as they scroll down
              the page makes it easy to quickly locate any page within the
              website. The blog page contains informative articles that aim to
              educate visitors, adding value to the user experience.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
