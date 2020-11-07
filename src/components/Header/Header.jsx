import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/vd-logo.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg">
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="" sizes="" srcset="" width="250px" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="navigation-menu">
            <NavLink to="/" className="header__option">
              Home
            </NavLink>
            <NavLink to="/" className="header__option">
              Projects
            </NavLink>
            <NavLink to="/" className="header__option">
              Videos
            </NavLink>
            <NavLink to="/contact" className="header__option">
              Contact
            </NavLink>
            <NavLink to="/" className="header__option">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
