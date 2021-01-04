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
            <div className="appoint__img d-flex justify-content-center my-5">
              <img
                className="appointment__image"
                component="img"
                src={vdbenz}
                style={{ width: "100%" }}
                alt=""
                srcset=""
              />
            </div>
          </Col>
          <Col lg={1} md={12}></Col>

          <Col lg={6} md={12}>
            <div className=" d-flex justify-content-center mt-2 mb-4">
              <h3 style={{ color: "#af231c" }}>
                {" "}
                {t("Request an Appointment")}
              </h3>
            </div>

            <form onSubmit={sendEmail} className="pt-3">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  {/* <label htmlFor="" style={{ textAlign: "left" }}>
                    Date:
                  </label> */}
                  <input
                    name="date"
                    onFocus="(this.type='date')"
                    className="form-control"
                    placeholder="MM/DD/YYYY"
                    type="Date"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input name="time" className="form-control" type="Time" />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="vehiclebrand"
                  placeholder="Vehicle Brand"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="vehiclemodel"
                  placeholder="Vehicle Model"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  name="vehicleyear"
                  placeholder="Vehicle Year"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  type="textarea"
                  as="textarea"
                  cols="30"
                  rows="8"
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
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Appointment;
