import React, { useRef, useEffect } from "react";
import "./carouselimage.css";

const CarouselImage = ({ source, ref, onclick }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    itemRef.current.addEventListener("click", onclick, false);
  });

  function onClick() {}

  return (
    <section className="carousel-image">
      <img src={source} ref={itemRef}></img>
    </section>
  );
};

export default CarouselImage;
