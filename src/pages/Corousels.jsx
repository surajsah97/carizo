import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import homebanner from "../assets/images/homebanner.jpg"
import banner1 from '../assets/images/banner1.jpg'
import banner6 from '../assets/images/banner6.jpg'
import banner4 from '../assets/images/banner4.jpg'

const Corousels = () => {
  return (
    <>
      <div className="sliderContainer">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showStatus={false}
          showArrows={true}
          showThumbs={false}
          interval={1000}
          // centerMode={true}
          // centerSlidePercentage={100}
        >
          <div>
            <img src={homebanner} alt="Item1" height={"100%"} />
          </div>
          <div>
            <img src={banner1} alt="Item2" height={"100%"} />
          </div>
          <div>
            <img src={banner6} alt="Item2" height={"100%"} />
          </div>
          <div>
            <img src={banner4} alt="Item2" height={'100%'} />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Corousels;
