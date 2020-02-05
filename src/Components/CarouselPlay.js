import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import style from "./Container.module.css";

const CarouselPlay = props => {
  return (
    <div className={style.carousel}>
      {props.success && (
        <Carousel>
          {props.pics.map((item, idx) => (
            <div key={idx}>
              <img src={item} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CarouselPlay;
