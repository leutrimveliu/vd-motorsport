import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import "./Appointment.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Appointment() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_wtsyypc",
        e.target,
        "user_VXg0wM7bQvV6iklruaU3c"
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

  return (
    <div className="appointment" style={{ marginTop: 89 }}>
      {" "}
      <Container lg={8}>
        <Row className="row m-0 d-flex justify-content-center">
          {/* <Col lg={6} md={12}></Col> */}
          <Col lg={6} md={12}>
            <div className=" d-flex justify-content-center my-3">
              <h3 style={{ color: "#af231c" }}>Request an Appointment</h3>
            </div>
            <form onSubmit={sendEmail}>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="text" name="name" placeholder="Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Control type="text" name="phone" placeholder="Phone" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Control
                      name="date"
                      type="date"
                      // value={eventDetails.eventStart}
                      id="date"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Control
                      name="time"
                      type="time"
                      // value={eventDetails.eventStart}
                      id="time"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridEmail">
                  <Form.Control
                    type="text"
                    name="vehiclebrand"
                    placeholder="Vehicle Brand"
                  />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Control
                    type="text"
                    name="vehiclemodel"
                    placeholder="Vehicle Model"
                  />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Control
                    type="number"
                    name="vehicleyear"
                    placeholder="Vehicle Year"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="service"
                    placeholder="Services/Comments"
                  />
                </Form.Group>

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
              </Form>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Appointment;
