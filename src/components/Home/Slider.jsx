import Carousel from "react-bootstrap/Carousel";
import bmw from "../../assets/bmw.png";
import i6 from "../../assets/audi3.jpg";
import m5 from "../../assets/m5.mp4";
import cars from "../../assets/cars.jpg";
import "./Slider.scss";

const Slider = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={700000000}
      controls={true}
      style={{ marginTop: 89 }}
    >
      <Carousel.Item>
        <video
          className="m5-video flex-video widescreen"
          controls
          style={{ width: "75%" }}
          autoPlay={true}
          src={m5}
          type="video/mp4"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cars} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={bmw} alt="Third slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={i6} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
