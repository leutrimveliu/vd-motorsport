import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { Row, Col, Button } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import GoogleMap from "../GoogleMap/GoogleMap";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

export default function Contact() {
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_5jwnosu",
  //       "template_ykr4h1p",
  //       e.target,
  //       "user_ySfJL6uIEftOhx8ITUQOt"
  //     )
  //     .then(
  //       (result) => {
  //         console.log("SUCCESS", result.text, result.status);
  //         alert("Email sent successfully!");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //   e.target.reset();
  // }
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
    <>
      <GoogleMap />
      <div
        className="contact__container py-5"
        style={{ backgroundColor: "black" }}
      >
        <Row className="row m-0">
          <Col lg={1} md={12}></Col>
          <Col lg={5} md={12}>
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
          {/* <Col lg={6} md={12}>
            <div className=" d-flex justify-content-center my-3">
              <h3 style={{ color: "#af231c" }}>{t("Contact Us")}</h3>
            </div>
            <form onSubmit={sendEmail}>
              <div className="row pt-3 mx-auto my-3">
                <div className="col-8 form-group mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Your message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                  <input
                    style={{ backgroundColor: "#AF231C" }}
                    type="submit"
                    variant="danger"
                    className="btn btn-info"
                    value="Send Message"
                  ></input>
                </div>
              </div>
            </form>
          </Col> */}
          <Col lg={5} md={12}>
            <div className="row d-flex justify-content-center  my-3">
              <div className="col-8 justify-content-center " style={{}}>
                <h3 style={{ color: "#af231c" }}>
                  {t("Get in touch with us")}
                </h3>
              </div>
              <div className=" col-8 mt-5 d-flex flex-column">
                {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps/dir/?api=1&destination=47.394526499386%2C8.6548459023979&fbclid=IwAR1iJquZTbwn_uPjsUfgxtDCwm8pBBeWc4mwMXLS1K7NV4QHs7TIQXV4LTk"
                  className=" Link__Edit"
                >
                  <div className="row mb-3">
                    <div className="col-2 col-md-2">
                      {" "}
                      <HomeIcon
                        className="justify-content-lg-start home__icon"
                        style={{
                          fontSize: 50,
                          color: " #af231c",
                        }}
                      />{" "}
                    </div>

                    {/* <span>&nbsp;&nbsp;</span> */}
                    {/* <span
                    style={{
                      fontSize: 20,
                      color: " white",
                    }}
                  >
                    Heidenrietstrasse 10 8600 Dübendorf, Switzerland
                  </span> */}
                    <div
                      className="col-10 col-md-10 home__desc"
                      style={{
                        fontSize: 18,
                        color: " white",
                        textAlign: "left",
                        // paddingTop: 5,
                      }}
                    >
                      {" "}
                      Heidenrietstrasse 10 8600 Dübendorf, Switzerland{" "}
                    </div>
                  </div>
                </a>{" "}
                <br />
                <div className="row d-flex mt-3  mb-3">
                  <div className="mail col-2 col-md-2">
                    <MailIcon
                      className="mail__icons"
                      style={{ fontSize: 50, color: " #af231c" }}
                    />{" "}
                  </div>
                  <div className="mail col-10 col-md-10">
                    <p
                      className="home__desc"
                      style={{
                        fontSize: 18,
                        color: " white",
                        textAlign: "left",
                        paddingTop: 5,
                      }}
                    >
                      ecutechvelija@hotmail.com{" "}
                    </p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-2 col-md-2">
                    <PhoneIcon style={{ fontSize: 50, color: " #af231c" }} />{" "}
                  </div>
                  <div className="col-10 col-md-10">
                    <p
                      style={{
                        fontSize: 20,
                        color: " white",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      +41 76 330 76 82{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={1} md={12}></Col>
        </Row>
      </div>
    </>
  );
}
