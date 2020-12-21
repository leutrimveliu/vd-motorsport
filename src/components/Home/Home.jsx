import React, { useEffect } from "react";
import Slider from "./Slider";
import Cards from "./Cards";
import ServiceList from "./ServiceList";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
