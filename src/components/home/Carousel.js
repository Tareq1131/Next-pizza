/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const imageProp = [
  { src: "/pizza.jpg", alt: "Pizza" },
  { src: "/bugger.jpg", alt: "Burger" },
  { src: "/milkshake.jpg", alt: "Milkshake" },
];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {imageProp.map((image, index) => {
        return (
          <div
            key={index}
            style={{ maxHeight: "36rem" }}
            className="object-center brightness-50"
          >
            <img
              src={image.src} // Path from public folder
              alt={image.alt} // Descriptive alt text
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
