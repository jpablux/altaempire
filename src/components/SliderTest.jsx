import React from "react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/img/image1.png";
import logo2 from "../assets/img/image2.png";
import logo3 from "../assets/img/image3.png";
import logo4 from "../assets/img/image4.png";
import logo5 from "../assets/img/image5.png";

function SliderTest() {
  return (
    <Swiper
      breakpoints={{
        1920: {
          slidesPerView: 3,
        },

        1280: {
          slidesPerView: 3,
        },

        1024: {
          slidesPerView: 3,
        },

        768: {
          slidesPerView: 2,
        },

        300: {
          slidesPerView: 1,
        },
      }}
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      centeredSlides={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={logo1} alt="Timezone Guatemala" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo2} alt="MAO School" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo3} alt="VidaGlass" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo4} alt="Firutienda" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo5} alt="Threading Clouds" />
      </SwiperSlide>
    </Swiper>
  );
}

export { SliderTest };
