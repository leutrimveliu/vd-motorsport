import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import {
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Drawer,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";

import logo from "../../assets/vd-logo.png";
import EN from "../../assets/icon-england-flag.png";
import GE from "../../assets/icon-germany-flag.png";

import "./Navbar.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#333",
    },
  },
  header: {
    marginBottom: "30px",
    backgroundColor: "#444",
    padding: "5px 25px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drawerContainer: {
    fontWeight: "bold",
    padding: "20px 30px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  IconSearch: {
    color: "white",
    maxHeight: "36px",
    maxWidth: "36px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    minWidth: "220px",
    paddingLeft: "12px",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = ({ user, setUser, props }) => {
  const { root, header, logo, toolbar, drawerContainer } = useStyles();

  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="" sizes="" srcset="" width="250px" />
        </NavLink>

        {/* Navigation */}
        <Nav className="header__links">
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
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            className={classes.root}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <div className="options">
              <MenuItem onClick={handleClose}>
                <NavLink to="" className="header__option">
                  Edit Profile
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="" className="header__option">
                  My Events
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/login" className="header__option">
                  Log Out
                </NavLink>
              </MenuItem>
            </div>
          </Menu>
        </Nav>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className="mobile__responsive">
        <NavLink to="/" className="header__logo"></NavLink>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
          className={root}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <Nav className="nav__mobile">
        <NavLink to="/" className="header__option">
          Products
        </NavLink>

        <NavLink to="/createproduct" className="header__option">
          Create Product
        </NavLink>
        <NavLink to="/login" className="header__option">
          LogOut
        </NavLink>

        <NavLink to={"/login"} className="header__option">
          LogIn
        </NavLink>
        <NavLink to="/register" className="header__option">
          SignUp
        </NavLink>
      </Nav>
    );
  };

  return (
    <>
      <header className="main__header">
        <React.Fragment>
          <HideOnScroll {...props}>
            <AppBar className={header}>
              {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
          </HideOnScroll>
        </React.Fragment>
      </header>
    </>
  );
};

export default Header;
