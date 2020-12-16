import React from "react";
import emailjs from "emailjs-com";
import { Row, Col } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import GoogleMap from "../GoogleMap/GoogleMap";
import "./Contact.scss";

export default function Contact() {
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

  return (
    <>
      <GoogleMap />
      <div
        className="contact__container py-5"
        style={{ backgroundColor: "black" }}
      >
        <Row className="row m-0">
          <Col lg={6} md={12}>
            <div className=" d-flex justify-content-center my-3">
              <h3 style={{ color: "#af231c" }}>Contact US</h3>
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
          </Col>
          <Col lg={6} md={12}>
            <div className="row d-flex justify-content-center my-3">
              <div className="col-8 justify-content-center " style={{}}>
                <h3 style={{ color: "#af231c" }}>Get in touch with us</h3>
              </div>
              <div className="col-8 mt-5 d-flex align-items-start flex-column">
                <div className="justify-content-lg-start">
                  {" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/dir/?api=1&destination=47.394526499386%2C8.6548459023979&fbclid=IwAR1iJquZTbwn_uPjsUfgxtDCwm8pBBeWc4mwMXLS1K7NV4QHs7TIQXV4LTk"
                    className="Link__Edit"
                  >
                    <HomeIcon style={{ fontSize: 50, color: " #af231c" }} />{" "}
                    <span>&nbsp;&nbsp;</span>
                    {/* <span
                    style={{
                      fontSize: 20,
                      color: " white",
                    }}
                  >
                    Heidenrietstrasse 10 8600 Dübendorf, Switzerland
                  </span> */}
                    <i style={{ fontSize: 18, color: " white" }}>
                      {" "}
                      Heidenrietstrasse 10 8600 Dübendorf, Switzerland
                    </i>
                  </a>{" "}
                </div>
                <br />

                <div>
                  <MailIcon style={{ fontSize: 50, color: " #af231c" }} />{" "}
                  <span>&nbsp;&nbsp;</span>
                  <i style={{ fontSize: 20, color: " white" }}>
                    {" "}
                    ecutechvelija@hotmail.com
                  </i>
                </div>
                <br />

                <div>
                  <PhoneIcon style={{ fontSize: 50, color: " #af231c" }} />{" "}
                  <span>&nbsp;&nbsp;</span>
                  <i style={{ fontSize: 20, color: " white" }}>
                    {" "}
                    +41 76 330 76 82{" "}
                  </i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
