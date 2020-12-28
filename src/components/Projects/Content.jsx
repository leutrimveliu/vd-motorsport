import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import motor from "../../assets/motor.jpeg";
import i5 from "../../assets/s3.jpeg";
import Slider from "./SliderProjects";
import SliderHome from "./SlideProject";
import m6 from "../../assets/m6.jpeg";
import project from "../../assets/project.jpeg";
import projects from "../../assets/projekte.jpeg";

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
          <Col lg={12} className="text__container ">
            <h3
              className="title d-flex justify-content-center mt-2"
              style={{ color: "#af231c" }}
            >
              Our Projects - VD/Motorsport
            </h3>
            <p className="description d-flex justify-content-start">
              {/* Bei diesem BMW M6 Grancoupe wird folgendes gemacht:
              <br /> - Turbos Stage 1+ <br /> - Intercooler
              <br /> - Sportluftfilter
              <br /> - Chargpipe
              <br /> - Wassermethanoleinspritzung
              <br /> - Costum Downpipe <br />- Costum Clutch <br />- ECU and TCU
              by VDM */}
            </p>
          </Col>
          <Col lg={12} className="img__container pt-3 pb-3">
            {" "}
            <SliderHome style={{ width: "80%" }} />
            {/* <img src={m6} alt="" srcset="" style={{ width: "100%" }} /> */}
            {/* <img src={projects} alt="" srcset="" style={{ width: "80%" }} /> */}
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
              Audi RS3 Sportback
            </h3>
            <p className="description d-flex  ">
              - Stage 2 VDM <br /> - 100-200 in 6.8 sek. (korrigiert)
              <br />- Downpipe
              <br /> - Ansaugung <br />- ECU & TCU
              <br /> - Ladeluftkühler
            </p>
          </Col>
        </Row>
        <Row className="card__borders  ">
          <Col lg={6} className="text__container ">
            <h3
              className="title d-flex justify-content-start mt-2"
              style={{ color: "#af231c" }}
            >
              BMW M6 Grancoupe S63
            </h3>
            <p className="description d-flex ">
              Bei diesem BMW M6 Grancoupe wird folgendes gemacht:
              <br /> - Turbos Stage 1+ <br /> - Intercooler
              <br /> - Sportluftfilter
              <br /> - Chargpipe
              <br /> - Wassermethanoleinspritzung
              <br /> - Costum Downpipe <br />- Costum Clutch <br />- ECU and TCU
              by VDM
            </p>
          </Col>
          <Col lg={6} className="img__container py-2 ">
            {" "}
            <img
              src={m6}
              alt=""
              srcset=""
              style={{ height: "245px", objectFit: "contain" }}
            />
          </Col>
        </Row>
        <Row className="card__borders">
          <Col lg={6} className="img__container pt-3 ">
            {" "}
            {/* <img
              src={i5}
              alt=""
              srcset=""
              style={{ width: "100%", objectFit: "contain" }}
            /> */}
            <Slider style={{ width: "100%" }} />
          </Col>
          <Col lg={6} className="text__container">
            <h3
              className="title d-flex justify-content-start mt-2"
              style={{ color: "#af231c" }}
            >
              Porsche 911 Turbo 1xxxPS
            </h3>
            <p className="description d-flex  ">
              Dies wird ein grosser Projekt vom Feinsten! Unser Ziel ist es über
              1XXX PS zu haben. <br />
              <br />
              Wie viel es genau sein wird, ist noch Secret Stay tuned... 🔥🔥🔥
              <br />
              <br /> Team VDM
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
