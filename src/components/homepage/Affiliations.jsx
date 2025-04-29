import React, { useRef } from "react";

import pratner_logo1 from "../../assets/images/svg/partners_logo1.svg";
import pratner_logo2 from "../../assets/images/svg/partners_logo2.svg";
import pratner_logo3 from "../../assets/images/svg/partners_logo3.svg";
import pratner_logo4 from "../../assets/images/svg/partners_logo4.svg";
import pratner_logo5 from "../../assets/images/svg/partners_logo5.svg";
import pratner_logo6 from "../../assets/images/svg/partners_logo6.svg";
import pratner_logo7 from "../../assets/images/svg/partners_logo7.svg";
import pratner_logo8 from "../../assets/images/svg/partners_logo8.svg";
import pratner_logo9 from "../../assets/images/svg/partners_logo9.svg";
import pratner_logo10 from "../../assets/images/svg/partners_logo10.svg";
import pratner_logo11 from "../../assets/images/svg/partners_logo11.svg";
import pratner_logo12 from "../../assets/images/svg/partners_logo12.svg";
import pratner_logo13 from "../../assets/images/svg/partners_logo13.svg";
import pratner_logo14 from "../../assets/images/svg/partners_logo14.svg";
import pratner_logo15 from "../../assets/images/svg/partners_logo15.svg";
import pratner_logo16 from "../../assets/images/svg/partners_logo16.svg";
import pratner_logo17 from "../../assets/images/svg/partners_logo17.svg";
import pratner_logo18 from "../../assets/images/svg/partners_logo18.svg";
import slider_right_img from "../../assets/images/svg/slider_right_img.svg";
import slider_left_img from "../../assets/images/svg/slider_left_img.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Affiliations = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200, // For screens less than 1200px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 576, // For screens less than 768px
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-black py-5">
      <div className="container py-md-5">
        <div className="row justify-content-center pb-md-5">
          <div className="col-md-11">
            <h3
              data-aos="fade-up"
              className="text-center fs_35 ff_s fw-bold text-white mb-0"
            >
              Our Partners
            </h3>
            <p
              data-aos="fade-up"
              className=" fs_24 ff_n fw-normal text-center text-white mb-0 mt-1"
            >
              Collaborating with Industry Leaders to Shape the Future of Media
            </p>

            <div className="partners_slider mt-md-4 mt-2">
              <Slider ref={sliderRef} {...settings}>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo1}
                    alt="pratner_logo1"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo2}
                    alt="pratner_logo2"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo3}
                    alt="pratner_logo3"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo4}
                    alt="pratner_logo4"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo5}
                    alt="pratner_logo5"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo6}
                    alt="pratner_logo6"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo7}
                    alt="pratner_logo7"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo8}
                    alt="pratner_logo8"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo9}
                    alt="pratner_logo9"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo10}
                    alt="pratner_logo10"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo11}
                    alt="pratner_logo11"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo12}
                    alt="pratner_logo12"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo13}
                    alt="pratner_logo12"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo14}
                    alt="pratner_logo12"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo15}
                    alt="pratner_logo12"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo16}
                    alt="pratner_logo12"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo17}
                    alt="pratner_logo12"
                  />
                </div>
                <div className=" px-2 mt-3">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    className="w-100 "
                    src={pratner_logo18}
                    alt="pratner_logo12"
                  />
                </div>
              </Slider>
            </div>
            <div className="d-flex position-relative z-3 justify-content-end mt-3 gap-2">
              <img
                className="cursor-pointer"
                src={slider_left_img}
                alt="slider_left_img"
                onClick={() => sliderRef.current.slickPrev()} // Slide to previous
              />
              <img
                className="cursor-pointer"
                src={slider_right_img}
                alt="slider_right_img"
                onClick={() => sliderRef.current.slickNext()} // Slide to next
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
