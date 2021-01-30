import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Cards from "./Cards";
import vdlogo from "../../assets/vd-logo-bw.png";
import vdlogo1 from "../../assets/vd-logo.png";
import dv from "../../assets/dv.jpeg";
import kv from "../../assets/kv.jpeg";
import qv from "../../assets/qv.jpg";
import arb from "../../assets/arb.jpeg";
import turbo from "../../assets/turbo.png";
import { useTranslation } from "react-i18next";
import "./about.scss";

const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about">
        <div className="about__showcase">
          <img
            className="about__logoimage"
            src={vdlogo}
            onMouseOver={(e) => (e.currentTarget.src = vdlogo1)}
            onMouseOut={(e) => (e.currentTarget.src = vdlogo)}
            alt="programming svg"
            style={{ width: "450px", paddingTop: "120px" }}
          />{" "}
          <br></br>
          <img
            className="about__turboimage"
            src={turbo}
            alt="programming svg"
            style={{ width: "100px", paddingTop: "30px" }}
          />
          {/* <h1 className="about__title">VD MOTORSPORT</h1> */}
        </div>

        <div className="about__content col-lg-8 mx-auto my-5">
          <p
            className="about__content__title"
            style={{
              color: "white",
              paddingTop: "70px",
              textAlign: "center",
            }}
          >
            {t("Willkommen bei")}{" "}
            <span
              style={{
                color: "#af231c",
              }}
            >
              VD/
            </span>
            Motorsport. {t("Du wolltest schon immer eine")}{" "}
            <span
              style={{
                color: "#af231c",
              }}
            >
              {t("Softwareoptimierung")}
            </span>{" "}
            {t("oder eine")}{" "}
            <span
              style={{
                color: "#af231c",
              }}
            >
              {t("Abgasanlagebearbeitung")}
            </span>
            ,{" "}
            {t(
              "dann bist du bei uns an der richtige Stelle, Wir arbeiten mit hochwertigen Produkten und passen das"
            )}{" "}
            <span
              style={{
                color: "#af231c",
              }}
            >
              Tuning
            </span>{" "}
            {t(
              "individuell auf dein Auto an, Unser Ziel ist es, ein optimales und standhaftes"
            )}{" "}
            <span
              style={{
                color: "#af231c",
              }}
            >
              Tuning
            </span>{" "}
            {t("aus dem Auto rauszuholen und den Spassfaktor für jeden")}{" "}
            <span
              style={{
                color: "#af231c",
              }}
            >
              {t("Kunden")}
            </span>{" "}
            {t("zu erhöhen")}.
          </p>
          <p className="about__content__subtitle my-5" style={{}}>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the to electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum
            passages,and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. */}
          </p>
          <div />
        </div>
        <hr />
        <div className="about__team">
          <h2 className="font-weight-bold my-5" style={{ color: "#af231c" }}>
            VD/<span style={{ color: "#fff" }}>MOTORSPORT</span>
          </h2>
          <p className="font-weight-bold my-5">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam. */}
          </p>
          <Row className="m-0">
            <Cards
              imageUrl={dv}
              name="Durim Velija"
              info={t("CEO/Mechaniker")}
            />
            <Cards imageUrl={qv} name="Gendrim Velija" info={t("Mechaniker")} />
            <Cards
              imageUrl={kv}
              name="Kushtrim Velija"
              info={t("Verkaufsleiter")}
            />
            <Cards
              imageUrl={arb}
              name="Arbër Gashi"
              info={t("Marketing Manager")}
            />
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;
