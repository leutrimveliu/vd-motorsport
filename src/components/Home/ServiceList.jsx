import React from "react";
import { ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { makeStyles, Grid } from "@material-ui/core/";
import {
  faTruckMonster,
  faDrumSteelpan,
  faTools,
  faCar,
  faInfo,
  faCarBattery,
  faTachometerAlt,
  faOilCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css
import "./Home.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    minHeight: 320,
    // margin: "20px",
    boxShadow: "0 0 5px #555",
    "&:hover": {
      boxShadow: "0 0 10px #000",
    },
    position: "relative",
    [theme.breakpoints.down(1170)]: {
      width: 250,
      height: 320,
    },
    [theme.breakpoints.down(885)]: {
      width: 350,
    },
    [theme.breakpoints.down(820)]: {
      width: "100%",
      height: "auto",
      display: "flex",
    },
    [theme.breakpoints.down(560)]: {
      display: "block",
    },
  },
  rootContainer: {
    paddingTop: 100,
    paddingBottom: 50,

    [theme.breakpoints.down(600)]: {
      width: "100%",
      padding: 0,
    },
  },
  linkStyle: {
    color: "white",
    "&:hover": { textDecoration: "none", color: "white" },
  },
  listStyle: {
    [theme.breakpoints.down(600)]: {
      width: 50,
    },
    color: "white",
    backgroundColor: "black",
    border: "none",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "#af231c",
      cursor: "pointer",
      backgroundColor: "black",
    },
  },
  favContainer: {
    [theme.breakpoints.down(600)]: {
      width: 50,
      margin: 0,
    },
  },
  icons: {
    [theme.breakpoints.down(600)]: {
      fontSize: 20,
    },
    fontSize: 50,
  },
  paragraph: {
    [theme.breakpoints.down(600)]: {
      fontSize: 14,
    },

    fontSize: 24,
    textAlign: "center",
  },
}));

function ServiceList() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <div className="categories__list">
        <Grid
          container
          alignItems="center"
          style={{ backgroundColor: "black" }}
          className={classes.rootContainer}
        >
          <Grid item lg={4} md={4} sm={12} xs={12} className="p-5">
            <h1
              style={{ fontSize: 40, fontWeight: "bold", color: "white" }}
              className="align-content-md-center"
            >
              Our <span style={{ color: "#af231c" }}>Services</span>
            </h1>
            <hr
              style={{
                textAlign: "left",
                marginLeft: 55,
                width: "25%",
                height: 4,
                borderWidth: 0,
                color: "white",
                backgroundColor: "#af231c",
              }}
            ></hr>

            <p style={{ color: "white" }}>
              {" "}
              {t("Learn more about our passion!")}
            </p>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              className="p-2"
            >
              <Grid contain lg={2} className={classes.favContainer}>
                <ListGroup.Item
                  className={classes.listStyle}
                  value="Art"
                  name="categories"
                >
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faCar} className={classes.icons} />{" "}
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <p className={classes.paragraph}>{t("Vehicle")}</p>
                  </div>
                </ListGroup.Item>
              </Grid>

              <Grid item lg={2} className={classes.favContainer}>
                <ListGroup.Item
                  className={classes.listStyle}
                  value="Sports"
                  name="categories"
                >
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faTachometerAlt}
                      className={classes.icons}
                    />
                  </div>

                  <div className="d-flex justify-content-center mt-2">
                    <p className={classes.paragraph}>{t("Speed")}</p>
                  </div>
                </ListGroup.Item>
              </Grid>

              <Grid item lg={2} className={classes.favContainer}>
                <ListGroup.Item
                  className={classes.listStyle}
                  value="Travel"
                  name="categories"
                >
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faCarBattery}
                      className={classes.icons}
                    />{" "}
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <p className={classes.paragraph}>{t("Battery")}</p>
                  </div>
                </ListGroup.Item>
              </Grid>

              <Grid item lg={2} className={classes.favContainer}>
                <ListGroup.Item
                  className={classes.listStyle}
                  value="Education"
                  name="categories"
                >
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faTools} className={classes.icons} />{" "}
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <p className={classes.paragraph}>{t("Service")}</p>
                  </div>
                </ListGroup.Item>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              className="p-2"
            >
              <Grid items lg={2} className={classes.favContainer}>
                <ListGroup.Item
                  className={classes.listStyle}
                  value="Music"
                  name="categories"
                >
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faOilCan}
                      className={classes.icons}
                    />{" "}
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <p className={classes.paragraph}>{t("Engine")}</p>
                  </div>
                </ListGroup.Item>
              </Grid>

              <Grid item lg={2} className={classes.favContainer}>
                <ListGroup.Item
                  className={classes.listStyle}
                  value="Science"
                  name="categories"
                >
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faInfo} className={classes.icons} />
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <p className={classes.paragraph}>{t("Info")}</p>
                  </div>
                </ListGroup.Item>
              </Grid>

              <Grid item lg={2} className={classes.favContainer}>
                <ListGroup.Item
                  className={classes.listStyle}
                  value="Politics"
                  name="categories"
                >
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faDrumSteelpan}
                      className={classes.icons}
                    />{" "}
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <p className={classes.paragraph}>{t("Tire")}</p>
                  </div>
                </ListGroup.Item>
              </Grid>

              <Grid item lg={2} className={classes.favContainer}>
                <ListGroup.Item
                  className={classes.listStyle}
                  value="Programming"
                  name="categories"
                >
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faTruckMonster}
                      className={classes.icons}
                    />{" "}
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <p className={classes.paragraph}>Tuning</p>
                  </div>
                </ListGroup.Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ServiceList;
