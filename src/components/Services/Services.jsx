import React from "react";
import { Tab, Row, ListGroup, Col } from "react-bootstrap";
import "./Services.scss";
function Services() {
  return (
    <div className="services" style={{ paddingTop: 150 }}>
      <Tab.Container
        id="list-group-tabs-example"
        defaultActiveKey="#link1"
        className="services__container"
      >
        <Row>
          <Col sm={1}></Col>
          <Col sm={4}>
            <ListGroup className="services__titles">
              <ListGroup.Item action href="#AirConditioning">
                Air Conditioning
              </ListGroup.Item>
              <ListGroup.Item action href="#BatteryServices">
                Battery Services
              </ListGroup.Item>
              <ListGroup.Item action href="#BrakeService">
                Brake Service and Repair
              </ListGroup.Item>
              <ListGroup.Item action href="#EngineDiagnosis">
                Check Engine Diagnosis
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
              <ListGroup.Item action href="#RadiatorServicesEngineCooling">
                Radiator Services & Engine Cooling
              </ListGroup.Item>
              <ListGroup.Item action href="#SteeringaSuspension">
                Steering and Suspension
              </ListGroup.Item>
              <ListGroup.Item action href="#TireRepairs">
                Tire Repairs
              </ListGroup.Item>
              <ListGroup.Item action href="#TransmissionServiceandRepair">
                Transmission Service and Repair
              </ListGroup.Item>
              <ListGroup.Item action href="#WheelBalancing">
                Wheel Balancing
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={6}>
            <Tab.Content className="services__description">
              <Tab.Pane eventKey="#AirConditioning">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quidem facilis, provident, cumque dolore vero rem obcaecati
                numquam beatae fugit nulla esse est laborum? Repudiandae
                mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#BatteryServices">
                cumque dolore vero rem obcaecati numquam beatae fugit nulla esse
                est laborum? Repudiandae mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#BrakeService">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quidem facilis, provident, cumque dolore vero rem obcaecati
                numquam beatae fugit nulla esse est laborum? Repudiandae
                mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#EngineDiagnosis">
                cumque dolore vero rem obcaecati numquam beatae fugit nulla esse
                est laborum? Repudiandae mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#ClutchServices">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quidem facilis, provident, cumque dolore vero rem obcaecati
                numquam beatae fugit nulla esse est laborum? Repudiandae
                mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#ComputerDiagnostics">
                cumque dolore vero rem obcaecati numquam beatae fugit nulla esse
                est laborum? Repudiandae mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#EmissionExhaust">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quidem facilis, provident, cumque dolore vero rem obcaecati
                numquam beatae fugit nulla esse est laborum? Repudiandae
                mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#EngineRepairsReplacement">
                cumque dolore vero rem obcaecati numquam beatae fugit nulla esse
                est laborum? Repudiandae mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#FuelInjectionServices">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quidem facilis, provident, cumque dolore vero rem obcaecati
                numquam beatae fugit nulla esse est laborum? Repudiandae
                mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#RadiatorServicesEngineCooling">
                cumque dolore vero rem obcaecati numquam beatae fugit nulla esse
                est laborum? Repudiandae mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#SteeringaSuspension">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quidem facilis, provident, cumque dolore vero rem obcaecati
                numquam beatae fugit nulla esse est laborum? Repudiandae
                mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#TireRepairs">
                cumque dolore vero rem obcaecati numquam beatae fugit nulla esse
                est laborum? Repudiandae mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#TransmissionServiceandRepair">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quidem facilis, provident, cumque dolore vero rem obcaecati
                numquam beatae fugit nulla esse est laborum? Repudiandae
                mollitia at debitis tempore corrupti?
              </Tab.Pane>
              <Tab.Pane eventKey="#WheelBalancing">
                cumque dolore vero rem obcaecati numquam beatae fugit nulla esse
                est laborum? Repudiandae mollitia at debitis tempore corrupti?
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
