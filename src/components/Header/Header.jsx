import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logo from "../../assets/vd-logo.png";
import EN from "../../assets/icon-england-flag.png";
import GE from "../../assets/icon-germany-flag.png";

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
            {/* <NavLink to="/" className="header__option">
              <ChooseLanguage />
            </NavLink> */}
            {/* <NavDropdown>
              <ChooseLanguage />
            </NavDropdown> */}
            {/* <div>
              <button type="button">{t("translation:de")}</button>

              <button type="button">{t("translation:en")}</button>
            </div> */}

            <button
              onClick={() => changeLanguage("en")}
              style={{
                backgroundColor: "black",
                border: "none",
                outline: "none",
              }}
            >
              <img src={EN} alt="" srcset="" />
            </button>
            <button
              onClick={() => changeLanguage("ge")}
              style={{
                backgroundColor: "black",
                border: "none",
                outline: "none",
              }}
            >
              <img src={GE} alt="" srcset="" />
            </button>

            {/* <div className="language_container ">
              <ChooseLanguage />
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
