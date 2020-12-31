import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i5 from "../../assets/s3.jpg";
import Slider from "./SliderProjects";
import SliderHome from "./SlideProject";
import m6 from "../../assets/m6.jpeg";
import "./Content.scss";

function Content() {
  const { t } = useTranslation();
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
          <Col lg={12} className="text__container pt-3">
            <h3
              className="title d-flex justify-content-center mt-2"
              style={{ color: "#fff" }}
            >
              {t("Our Projects")} - &nbsp;
              <span style={{ color: "#af231c" }}> VD/</span>{" "}
              <span style={{ color: "#fff" }}> Motorsport</span>
            </h3>
          </Col>
          <Col lg={12} className="img__container pt-3 pb-3">
            {" "}
            <SliderHome style={{ width: "80%" }} />
            {/* <img src={m6} alt="" srcset="" style={{ width: "100%" }} /> */}
            {/* <img src={projects} alt="" srcset="" style={{ width: "80%" }} /> */}
          </Col>
        </Row>
        <Row className="card__borders">
          <Col lg={6} className="img__container py-3 ">
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
              className="title d-flex justify-content-start pt-2"
              style={{ color: "#af231c" }}
            >
              Audi RS3 Sportback
            </h3>
            <p className="description d-flex  ">
              - Stage 2 VDM <br /> - 100-200 in 6.8 sec. (corrected)
              <br />- Downpipe
              <br /> - Air-Intake <br />- ECU & TCU
              <br /> - Intercooler
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
              <br /> - Sportfilter
              <br /> - Chargepipe
              <br /> - Methanol Injection
              <br /> - Costum Downpipe <br />- Costum Clutch <br />- ECU and TCU
              by VDM
            </p>
          </Col>
          <Col lg={6} className="img__container py-4  ">
            {" "}
            <img
              src={m6}
              alt=""
              srcset=""
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Col>
        </Row>
        <Row className="card__borders">
          <Col lg={6} className="img__container py-3 ">
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
              {t(
                "This is going to be a big project! Our goal is over 1XXX PS to have"
              )}
              <br />
              <br />
              {t("How much it will be exactly is still Secret, so stay tuned")}
              🔥🔥🔥
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
