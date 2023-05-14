import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/img/image1.png";
import logo2 from "../assets/img/image2.png";
import logo3 from "../assets/img/image3.png";
import logo4 from "../assets/img/image4.png";
import logo5 from "../assets/img/image5.png";

function SliderTest(){
 
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding:"10px",
      dots: false,
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 500,
      speed:3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };

    return (
      <div className="slider-carousel">
        <h2 className="header-2 pb-1"> Clients who trust us</h2>
        <Slider {...settings}>
          <div>
            <img src={logo1} alt="Timezone Guatemala" />
          </div>
          <div>
          <img src={logo2} alt="MAO International" />
          </div>
          <div>
          <img src={logo3} alt="Vida Glass" />
          </div>
          <div>
          <img src={logo4} alt="FiruTienda" />
          </div>
          <div>
          <img src={logo5} alt="ThreadingClouds" />
          </div>
          
        </Slider>
      </div>
    );
  }

  export {SliderTest};