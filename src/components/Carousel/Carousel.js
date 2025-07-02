import React from "react";
import CarouselImage from "./CarouselImage/CarouselImage";
import "./carousel.css";

const Carousel = ({ imagePaths, onClickToExpand }) => {
  return (
    <section className="media-carousel-container">
      <ul className="media-carousel">
        {imagePaths.map((item, index) => (
          <li key={index} className="media-carousel-item">
            <CarouselImage
              source={item}
              onclick={onClickToExpand}
            ></CarouselImage>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
