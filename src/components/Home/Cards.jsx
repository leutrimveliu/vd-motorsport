import React from "react";
import { Card, CardDeck, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import i5 from "../../assets/audi2.jpg";
import motor from "../../assets/motor.jpeg";
import "./Cards.scss";

const Cards = () => {
  return (
    <div>
      <div className="moto" style={{ backgroundColor: "black" }}>
        <div className="d-flex justify-content-center py-5">
          <h1
            style={{
              color: "red",
              fontFamily: "Georgia, serif",
            }}
          >
            {" "}
            More power,{" "}
            <span style={{ color: "white", fontStyle: "italic" }}>
              {" "}
              more fun...
            </span>
          </h1>
        </div>
      </div>
      <div className="cards" style={{ backgroundColor: "black" }}>
        <CardDeck as={Col} md={12} sm={6} className="pb-5">
          <Card>
            <Card.Img
              style={{ height: "250px" }}
              className="card__image"
              variant="top"
              src={i5}
              alt=""
            />
            <Card.Body className="card__body">
              <Card.Title className="card__body">
                <Link to="/projects" className="event-opener">
                  <h3>Our Projects</h3>
                </Link>
              </Card.Title>
              <Card.Text className="card__description">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <p>Some thing to say</p>
            </Card.Footer> */}
          </Card>

          <Card>
            <Card.Img
              style={{ height: "250px" }}
              className="card__image"
              variant="top"
              src={motor}
              alt=""
            />
            <Card.Body className="card__body">
              <Card.Title className="card__body">
                <Link to="/projects" className="event-opener">
                  <h3>Our Services</h3>
                </Link>
              </Card.Title>
              <Card.Text className=" card__description">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <p>Some thing to say</p>
            </Card.Footer> */}
          </Card>

          <Card>
            <Card.Img
              style={{ height: "250px" }}
              className="card__image"
              variant="top"
              src={i5}
              alt=""
            />
            <Card.Body className="card__body">
              <Card.Title className="card__body">
                <Link to="/projects" className="event-opener">
                  <h3>Some videos</h3>
                </Link>
              </Card.Title>
              <Card.Text className="card__description">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <p>Some thing to say</p>
            </Card.Footer> */}
          </Card>
        </CardDeck>
      </div>
    </div>
  );
};

export default Cards;
