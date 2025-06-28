import { React, Component } from "react";

const CarouselImage = ({ source, ref, onclick }) => {
  return (
    <section>
      <img src={source}></img>
    </section>
  );
};

export default CarouselImage;
