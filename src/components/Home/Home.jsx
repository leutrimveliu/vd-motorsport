import React from "react";
import Slider from "./Slider";
import Cards from "./Cards";
import ServiceList from "./ServiceList";

const Home = () => {
  return (
    <div>
      <div>
        {" "}
        <Slider />
      </div>
      <div>
        <ServiceList />
        <Cards />
      </div>
      <div></div>
    </div>
  );
};
export default Home;
