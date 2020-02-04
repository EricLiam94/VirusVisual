import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselPlay = props => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {props.success && (
        <Carousel>
          {props.pics.map(item => (
            <div>
              <img src={item} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CarouselPlay;
