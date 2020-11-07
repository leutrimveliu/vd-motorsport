import React from "react";
import emailjs from "emailjs-com";
import { Row, Col } from "react-bootstrap";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

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
    <div className="contact__container " style={{ backgroundColor: "" }}>
      <Row className="row m-0">
        <Col lg={6} md={12}>
          <div className=" d-flex justify-content-center my-3">
            <h3 style={{ color: "" }}>Contact US</h3>
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
              <h3>Get in touch with us</h3>
            </div>
            <div className="col-8">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/dir/42.5894951,21.0698859/47.3945265,8.6548459/@44.7029299,6.2942556,5z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
                className="Link__Edit"
              >
                <RoomOutlinedIcon style={{ fontSize: 30 }} />
                <i> Heidenrietstrasse 10 8600 Dübendorf, Switzerland</i>
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center "></div>
        </Col>
      </Row>
    </div>
  );
}
