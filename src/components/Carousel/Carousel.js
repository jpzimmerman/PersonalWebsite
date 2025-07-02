import React from "react";
import CarouselImage from "./CarouselImage/CarouselImage";
import "./carousel.css";

const Carousel = ({ imagePaths, onClickToExpand }) => {
  return (
    <section className="media-carousel-container">
      <ul className="media-carousel">
        <li className="media-carousel-item">
          <CarouselImage
            source={
              "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr00.JPG"
            }
            onclick={onClickToExpand}
          ></CarouselImage>
        </li>
        <li className="media-carousel-item">
          <CarouselImage
            source={
              "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr01.JPG"
            }
            onclick={onClickToExpand}
          ></CarouselImage>
        </li>
        <li className="media-carousel-item">
          <CarouselImage
            source={
              "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr02.JPG"
            }
            onclick={onClickToExpand}
          ></CarouselImage>
        </li>
        <li className="media-carousel-item">
          <CarouselImage
            source={
              "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr03.JPG"
            }
            onclick={onClickToExpand}
          ></CarouselImage>
        </li>
        <li className="media-carousel-item">
          <CarouselImage
            source={
              "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr04.JPG"
            }
            onclick={onClickToExpand}
          ></CarouselImage>
        </li>
      </ul>
    </section>
  );
};

export default Carousel;
