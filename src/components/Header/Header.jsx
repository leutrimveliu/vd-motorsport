import React, { useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logo from "../../assets/vd-logo.png";
import EN from "../../assets/icon-england-flag.png";
import GE from "../../assets/icon-germany-flag.png";
import { IconButton } from "@material-ui/core";

import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

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
              {t("Home")}
              {/* Home */}
            </NavLink>
            <NavLink to="/projects" className="header__option">
              {t("Projects")}
              {/* Projects */}
            </NavLink>
            <NavLink to="/" className="header__option">
              {/* Services */}
              {t("Services")}
            </NavLink>
            <NavLink to="/" className="header__option">
              {/* Videos */}
              {t("Videos")}
            </NavLink>
            <NavLink to="/contact" className="header__option">
              {/* Contact */}
              {t("Contact")}
            </NavLink>
            <NavLink to="/" className="header__option">
              {/* About */}
              {t("About")}
            </NavLink>

            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "black",
                  border: "none",
                  outline: "none",
                  button: "none",
                }}
                id="dropdown-basic"
                className="header__option"
              >
                {t(`lang`)} <img src={t(`img`)} style={{ width: 20 }} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ backgroundColor: "black" }}
                className="header__Lang"
              >
                <Dropdown.Item className="header__Lang">
                  <IconButton onClick={() => changeLanguage("en")}>
                    <img src={EN} alt="" srcset="" />
                  </IconButton>
                </Dropdown.Item>
                <Dropdown.Item className="header__Lang">
                  {" "}
                  <IconButton onClick={() => changeLanguage("ge")}>
                    <img src={GE} alt="" srcset="" />
                  </IconButton>
                </Dropdown.Item>
                <Dropdown.Item className="header__Lang">Italian</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
