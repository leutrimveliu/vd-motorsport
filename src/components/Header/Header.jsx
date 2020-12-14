import React, { useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logo from "../../assets/vd-logo.png";
import EN from "../../assets/icon-england-flag.png";
import GE from "../../assets/icon-germany-flag.png";
import FR from "../../assets/icon-france-flag.png";
import IT from "../../assets/icon-italy-flag.png";
import AL from "../../assets/icon-albania-flag.png";
import { IconButton } from "@material-ui/core";

import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" expanded={expanded}>
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="" sizes="" srcset="" width="250px" />
        </NavLink>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="navigation-menu">
            <NavLink
              to="/"
              className="header__option"
              onClick={() => setExpanded(false)}
            >
              {t("Home")}
              {/* Home */}
            </NavLink>
            <NavLink
              to="/projects"
              className="header__option"
              onClick={() => setExpanded(false)}
            >
              {t("Projects")}
              {/* Projects */}
            </NavLink>
            <NavLink
              to="/"
              className="header__option"
              onClick={() => setExpanded(false)}
            >
              {/* Services */}
              {t("Services")}
            </NavLink>
            <NavLink
              to="/"
              className="header__option"
              onClick={() => setExpanded(false)}
            >
              {/* Videos */}
              {t("Videos")}
            </NavLink>
            <NavLink
              to="/contact"
              className="header__option"
              onClick={() => setExpanded(false)}
            >
              {/* Contact */}
              {t("Contact")}
            </NavLink>
            <NavLink
              to="/"
              className="header__option"
              onClick={() => setExpanded(false)}
            >
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
                {/* {t(`lang`)} */}{" "}
                <img
                  src={t(`img`)}
                  alt=""
                  style={{ width: "24px", height: "16px", marginBottom: 5 }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  backgroundColor: "black",
                  maxWidth: "100%",
                  minWidth: "100%",
                }}
                className="header__Lang"
              >
                <Dropdown.Item
                  className="header__Lang d-flex justify-content-center"
                  onClick={() => setExpanded(false)}
                >
                  <IconButton onClick={() => changeLanguage("en")}>
                    <img src={EN} alt="" srcset="" />
                  </IconButton>
                </Dropdown.Item>
                <Dropdown.Item
                  className="header__Lang d-flex justify-content-center"
                  onClick={() => setExpanded(false)}
                >
                  {" "}
                  <IconButton onClick={() => changeLanguage("ge")}>
                    <img src={GE} alt="" srcset="" />
                  </IconButton>
                </Dropdown.Item>
                <Dropdown.Item
                  className="header__Lang d-flex justify-content-center"
                  onClick={() => setExpanded(false)}
                >
                  {" "}
                  <IconButton onClick={() => changeLanguage("fr")}>
                    <img src={FR} alt="" srcset="" />
                  </IconButton>
                </Dropdown.Item>
                <Dropdown.Item
                  className="header__Lang d-flex justify-content-center"
                  onClick={() => setExpanded(false)}
                >
                  {" "}
                  <IconButton onClick={() => changeLanguage("it")}>
                    <img src={IT} alt="" srcset="" />
                  </IconButton>
                </Dropdown.Item>
                <Dropdown.Item
                  className="header__Lang d-flex justify-content-center"
                  onClick={() => setExpanded(false)}
                >
                  {" "}
                  <IconButton onClick={() => changeLanguage("al")}>
                    <img src={AL} alt="" srcset="" />
                  </IconButton>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
