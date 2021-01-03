import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import "./Appointment.scss";
import vdbenz from "../../assets/vdbenz.jpg";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Appointment() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5jwnosu",
        "template_4723srw",
        e.target,
        "user_ySfJL6uIEftOhx8ITUQOt"
      )
      .then(
        (result) => {
          console.log("SUCCESS", result.text, result.status);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  return (
    <div className="appointment" style={{ marginTop: 89 }}>
      {" "}
      <Container lg={12}>
        <Row className="row m-0 d-flex justify-content-center">
          <Col lg={5} md={12}>
            <div className=" d-flex justify-content-center">
              <img
                className="appointment__image"
                src={vdbenz}
                style={{ width: "110%" }}
                alt=""
                srcset=""
              />
            </div>
          </Col>
          <Col lg={1} md={12}></Col>

          <Col lg={5} md={12}>
            <div className=" d-flex justify-content-center my-3">
              <h3 style={{ color: "#af231c" }}>
                {" "}
                {t("Request an Appointment")}
              </h3>
            </div>
            <form onSubmit={sendEmail}>
              <div>
                <div>
                  <div as={Col} controlId="formGridEmail">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div as={Col} controlId="formGridPassword">
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                </div>
                <div>
                  <input type="text" name="phone" placeholder="Phone" />
                </div>

                <div>
                  <div as={Col} controlId="formGridAddress2">
                    <input name="date" type="date" />
                  </div>
                  <div as={Col} controlId="formGridAddress2">
                    <input
                      name="time"
                      type="time"
                      // value={eventDetails.eventStart}
                    />
                  </div>
                </div>
                <div controlId="formGridEmail">
                  <input
                    type="text"
                    name="vehiclebrand"
                    placeholder="Vehicle Brand"
                  />
                </div>
                <div controlId="formGridEmail">
                  <input
                    type="text"
                    name="vehiclemodel"
                    placeholder="Vehicle Model"
                  />
                </div>
                <div controlId="formGridEmail">
                  <input
                    type="number"
                    name="vehicleyear"
                    placeholder="Vehicle Year"
                  />
                </div>
                <div>
                  <input
                    as="textarea"
                    rows={6}
                    name="service"
                    placeholder="Services/Comments"
                  />
                </div>

                <Button
                  style={{
                    backgroundColor: "#af231c",
                    width: 200,
                    border: "none",
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Appointment;
