import React, { useEffect } from "react";
import { Tab, Row, ListGroup, Col } from "react-bootstrap";
import "./Services.scss";
import aircondition from "../../assets/airconditioning.jpg";
import battery from "../../assets/battery.jpg";
import brake from "../../assets/brake.jpg";
import engined from "../../assets/engined.jpg";
import clutch from "../../assets/clutch.jpg";
import emission from "../../assets/emission.jpg";
import motor from "../../assets/motor.jpeg";
import fuel from "../../assets/fuel.jpg";
import steering from "../../assets/steering.jpg";
import tyre from "../../assets/tyre.jpg";
import transmission from "../../assets/transmission.jpg";
import chip from "../../assets/chip.jpg";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  if (window.matchMedia("(max-width: 600px)").matches) {
    // do functionality on screens smaller than 600px
    window.scrollTo(0, 500);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services" style={{ paddingTop: 150 }}>
      <Tab.Container
        id="list-group-tabs-example"
        defaultActiveKey="#AirConditioning"
        className="services__container"
      >
        <Row>
          <Col sm={1}></Col>
          <Col sm={4}>
            <ListGroup className="services__types">
              <ListGroup.Item action href="#AirConditioning">
                {t("Air Conditioning")}
              </ListGroup.Item>
              <ListGroup.Item action href="#BatteryServices">
                {t("Battery Services")}
              </ListGroup.Item>
              <ListGroup.Item action href="#BrakeService">
                {t("Brake Service and Repair")}
              </ListGroup.Item>
              <ListGroup.Item action href="#ChipTuning">
                {t("Chip Tuning")}
              </ListGroup.Item>
              <ListGroup.Item action href="#ClutchServices">
                {t("Clutch Services")}
              </ListGroup.Item>
              <ListGroup.Item action href="#ComputerDiagnostics">
                {t("Computer Diagnostics")}
              </ListGroup.Item>
              <ListGroup.Item action href="#EmissionExhaust">
                {t("Emission & Exhaust System Services")}
              </ListGroup.Item>
              <ListGroup.Item action href="#EngineRepairsReplacement">
                {t("Engine Repairs and Replacement")}
              </ListGroup.Item>
              <ListGroup.Item action href="#FuelInjectionServices">
                {t("Fuel Injection Services")}
              </ListGroup.Item>
              <ListGroup.Item action href="#SteeringaSuspension">
                {t("Steering and Suspension")}
              </ListGroup.Item>
              <ListGroup.Item action href="#TransmissionServiceandRepair">
                {t("Transmission Service and Repair")}
              </ListGroup.Item>
              <ListGroup.Item action href="#TireRepairs">
                {t("Wheel Balancing & Tire Repairs")}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={6}>
            <Tab.Content className="services__description">
              <Tab.Pane eventKey="#AirConditioning">
                <h2 className="services__titles ">{t("Air Conditioning")}</h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  src={aircondition}
                  className="img"
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#BatteryServices">
                <h2 className="services__titles">{t("Battery Services")}</h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  src={battery}
                  className="img"
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#BrakeService">
                <h2 className="services__titles">
                  {t("Brake Service and Repair")}
                </h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={brake}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#ComputerDiagnostics">
                <h2 className="services__titles">
                  {" "}
                  {t("Computer Diagnostics")}
                </h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={engined}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#ChipTuning">
                <h2 className="services__titles">{t("Chip Tuning")}</h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={chip}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#ClutchServices">
                <h2 className="services__titles"> {t("Clutch Services")}</h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={clutch}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>

              <Tab.Pane eventKey="#EmissionExhaust">
                <h2 className="services__titles">
                  {t("Emission & Exhaust System Services")}
                </h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={emission}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#EngineRepairsReplacement">
                <h2 className="services__titles">
                  {t("Engine Repairs and Replacement")}
                </h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={motor}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#FuelInjectionServices">
                <h2 className="services__titles">
                  {t("Fuel Injection Services")}
                </h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={fuel}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#SteeringaSuspension">
                <h2 className="services__titles">
                  {t("Steering and Suspension")}
                </h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={steering}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#TireRepairs">
                <h2 className="services__titles">
                  {t("Wheel Balancing & Tire Repairs")}
                </h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={tyre}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#TransmissionServiceandRepair">
                <h2 className="services__titles">
                  {t("Transmission Service and Repair")}
                </h2>
                <p className="services__paragraph">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quidem facilis, provident, cumque dolore vero rem obcaecati
                  numquam beatae fugit nulla esse est laborum? Repudiandae
                  mollitia at debitis tempore corrupti? */}
                </p>
                <img
                  className="img"
                  src={transmission}
                  alt=""
                  style={{ height: "400px", objectFit: "contain" }}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Services;
