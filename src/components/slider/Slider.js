import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slider = (props) => {
  const movie = props?.movie;
  console.log(movie)
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {movie?.map(mov => (
          <SwiperSlide>{mov.name}</SwiperSlide>
        )) }
        
        <SwiperSlide>Slide 1</SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default Slider
