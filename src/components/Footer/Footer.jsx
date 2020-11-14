import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../../assets/vd-shortlogo.png";
import { NavLink, Link } from "react-router-dom";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

// css
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <Container fluid>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <ul className="footer__about">
              <NavLink to="/" className="header__logo ">
                <img
                  src={logo}
                  alt=""
                  sizes=""
                  srcset=""
                  width="250px"
                  className="shortlogo mt-3"
                />
              </NavLink>
              {/* <strong>ABOUT US</strong>
              <hr />
              <li>How VD Motorsport Works</li>
              <li>Videos</li>
              <li>Projects</li>
              <li>Target Audiences</li> */}
            </ul>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ul className="footer__community ">
              <strong style={{ color: "#AF231C" }}>OPENING HOURS</strong>
              <hr />
              <li>Monday - Friday </li>
              <li>09:00 - 12:00 | 13:30 - 18:00</li>
              <li>Saturday</li>
              <li>09:00 - 14:00 (continuous)</li>
            </ul>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <ul className="footer__support">
              <strong style={{ color: "#AF231C" }}>CONTACT US</strong>
              <hr />

              <a
                target="_blank"
                href="
                https://www.google.com/maps/dir/?api=1&destination=47.394526499386%2C8.6548459023979&fbclid=IwAR1iJquZTbwn_uPjsUfgxtDCwm8pBBeWc4mwMXLS1K7NV4QHs7TIQXV4LTk"
                className="Link__Edit"
              >
                <RoomOutlinedIcon style={{ fontSize: 30 }} />
                <i> Heidenrietstrasse 10 8600 Dübendorf, Switzerland</i>
              </a>
              <li>
                <EmailOutlinedIcon />
                <i> ecutechvelija@hotmail.com</i>
              </li>
              <li>
                {" "}
                <CallOutlinedIcon /> <span>&nbsp;&nbsp;</span>
                <i> +41 76 330 76 82 </i>
              </li>
              <a
                target="_blank"
                href="
                https://www.facebook.com/vdmotorsport.ch"
                className="Link__Edit"
              >
                <li>
                  <FacebookIcon /> <span>&nbsp;&nbsp;</span>VD/Motorsport
                </li>
              </a>
              <a
                target="_blank"
                href="
                https://www.instagram.com/vdm_motorsport/"
                className="Link__Edit"
              >
                <li>
                  <InstagramIcon />
                  <span>&nbsp;&nbsp;</span>vdm_motorsport
                </li>
              </a>
            </ul>
          </Col>
        </Row>
      </Container>

      <hr />
      <h6 className="footer__copyright">
        © 2020 <span style={{ color: "#AF231C" }}>VD Motorsport</span> , Inc.
        All rights reserved
      </h6>
    </div>
  );
};

export default Footer;
