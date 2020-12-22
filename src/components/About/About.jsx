import React from "react";
import { Row } from "react-bootstrap";
import Cards from "./Cards";
import vdlogo from "../../assets/vd-logo-bw.png";
import vdlogo1 from "../../assets/vd-logo.png";
import turbo from "../../assets/turbo.png";
import "./about.scss";

const About = () => {
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
            Willkommen bei{" "}
            <span
              style={{
                color: "#af231c",
              }}
            >
              VD/
            </span>
            Motorsport. Du wolltest schon immer eine{" "}
            <span
              style={{
                color: "#af231c",
              }}
            >
              Softwareoptimierung
            </span>{" "}
            oder eine{" "}
            <span
              style={{
                color: "#af231c",
              }}
            >
              Abgasanlagebearbeitung
            </span>
            , dann bist du an der richtige Stelle bei uns. Wir arbeiten mit
            hochwertigen Produkten und das alles im Haus.
          </p>
          <p className="about__content__subtitle my-5" style={{}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the to electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum
            passages,and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div />
        </div>
        <hr />
        <div className="about__team">
          <h2 className="font-weight-bold my-5" style={{ color: "#af231c" }}>
            VD/<span style={{ color: "#fff" }}>MOTORSPORT</span>
          </h2>
          <p className="font-weight-bold my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <Row className="m-0">
            <Cards
              imageUrl="https://mdbootstrap.com/img/Photos/Others/photo1.jpg"
              name="Durim Velija"
              info="Team Leader"
              smOne="facebook"
              smTwo="linkedin"
              smThree="twitter"
            />
            <Cards
              imageUrl="https://mdbootstrap.com/img/Photos/Others/photo2.jpg"
              name="test test"
              info="Scrum Master & Web Developer"
              smOne="facebook"
              smTwo="linkedin"
              smThree="twitter"
            />
            <Cards
              imageUrl="https://mdbootstrap.com/img/Photos/Others/photo10.jpg"
              name="test test"
              info="Web Developer & Intern"
              smOne="facebook"
              smTwo="linkedin"
              smThree="twitter"
            />
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;
