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
function Services() {
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
                Air Conditioning
              </ListGroup.Item>
              <ListGroup.Item action href="#BatteryServices">
                Battery Services
              </ListGroup.Item>
              <ListGroup.Item action href="#BrakeService">
                Brake Service and Repair
              </ListGroup.Item>
              <ListGroup.Item action href="#ChipTuning">
                Chip Tuning
              </ListGroup.Item>
              <ListGroup.Item action href="#ClutchServices">
                Clutch Services
              </ListGroup.Item>
              <ListGroup.Item action href="#ComputerDiagnostics">
                Computer Diagnostics
              </ListGroup.Item>
              <ListGroup.Item action href="#EmissionExhaust">
                Emission & Exhaust
              </ListGroup.Item>
              <ListGroup.Item action href="#EngineRepairsReplacement">
                Engine Repairs and Replacement
              </ListGroup.Item>
              <ListGroup.Item action href="#FuelInjectionServices">
                Fuel Injection Services
              </ListGroup.Item>
              <ListGroup.Item action href="#SteeringaSuspension">
                Steering and Suspension
              </ListGroup.Item>
              <ListGroup.Item action href="#TransmissionServiceandRepair">
                Transmission Service and Repair
              </ListGroup.Item>
              <ListGroup.Item action href="#TireRepairs">
                Wheel Balancing & Tire Repairs
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={6}>
            <Tab.Content className="services__description">
              <Tab.Pane eventKey="#AirConditioning">
                <h2 className="services__titles ">Air Conditioning</h2>
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
                <h2 className="services__titles">Battery Services</h2>
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
                <h2 className="services__titles">Brake Services</h2>
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
                <h2 className="services__titles">Computer Diagnostics</h2>
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
                <h2 className="services__titles">Chip Tuning</h2>
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
                <h2 className="services__titles">Clutch Services</h2>
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
                  Emission & Exhaust System Services
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
                  Engine Repairs & Replacement
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
                <h2 className="services__titles">Fuel Injection Services</h2>
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
                <h2 className="services__titles">Steering & Suspension</h2>
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
                  Wheel Balancing & Tire Repairs
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
                  Transmission Service and Repair
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
