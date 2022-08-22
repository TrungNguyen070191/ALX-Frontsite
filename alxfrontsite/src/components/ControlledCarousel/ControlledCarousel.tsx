import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ControlledCarousel.scss";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="top-carousel"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.anlacxa.com/_next/image?url=%2Fimages%2Fcarousel%2Fbg2.jpg&w=1920&q=75"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>
            Thải độc và <br /> Thanh lọc Thân Tâm
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.anlacxa.com/_next/image?url=%2Fimages%2Fcarousel%2Fbg1.jpg&w=3840&q=75"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>
            Thải độc và <br /> Thanh lọc Thân Tâm
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.anlacxa.com/_next/image?url=%2Fimages%2Fcarousel%2Fbg3.jpg&w=1920&q=75"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
            Thải độc và <br /> Thanh lọc Thân Tâm
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
