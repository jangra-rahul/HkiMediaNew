import React, { useState } from "react";
import "./home.css";
import Navbar from "../common/Navbar";
import play_icon from "../../assets/images/svg/play_icon.svg";
import star_icon from "../../assets/images/svg/star_icon.svg";
import phone_icon from "../../assets/images/svg/phone_icon.svg";
import homeSlider1 from "../../assets/images/png/homeSlider1.png";
import homeSlider2 from "../../assets/images/png/homeSlider2.png";
import homeSlider3 from "../../assets/images/png/homeSlider3.png";
import red_arrow from "../../assets/images/svg/red_arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import hero_video from "../../assets/images/videos/hero_video.mp4";
import "swiper/css";
import "swiper/css/effect-cards";

const HomePageHero = () => {
  return (
    <div
      id="home"
      className="d-flex flex-column  min-vh-100 custom_bgHero video-container"
    >
      <div>
        <Navbar />
      </div>
      {/* <div className=""> */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={hero_video} type="video/mp4" />
      </video>
      {/* <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is an example of a background video.</p>
      </div> */}
      {/* </div> */}

      <div className="container content py-5 d-flex flex-grow-1 flex-column justify-content-center aliign-items-center">
        {/* <div className="row align-items-center justify-content-between"> */}
        <div className=" text-center ">
          <h1 data-aos="fade-up" className="fs_44 ff_s fw-bold text-white mt-2">
            HKI Media
          </h1>
          <p
            data-aos="fade-up"
            className=" fs_23 mb-0 ff_n text-capitalize text-white"
          >
            Incubating talent, nurturing <br></br>revolutions - the great Indian
            digital leap
          </p>
          <a href="#about">
            <button
              data-aos="fade-up"
              className=" learnmore_btn mt-3 fs_14 border-0 text-white ff_s fw-bold gap-2 p-2 px-3"
            >
              Learn More
            </button>
          </a>
        </div>
        {/* <div className="col-lg-4 col-md-5 mt-5 mt-md-0 col-sm-7 col-11  position-relative">
            <img
              className=" position-absolute "
              style={{ top: "120px", left: "-140px" }}
              src={red_arrow}
              alt="red_arrow"
            />
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="mySwiper ps-5"
            >
              <SwiperSlide>
                <img className="w-100" src={homeSlider1} alt="homeSlider1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100" src={homeSlider2} alt="homeSlider1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100" src={homeSlider3} alt="homeSlider1" />
              </SwiperSlide>
            </Swiper>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomePageHero;
