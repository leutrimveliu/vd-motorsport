import React, { useEffect } from "react";
import Content from "./Content";
import "./Projects.scss";
import SliderProjects from "./SliderProjects";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Content />
    </div>
  );
};

export default Projects;
