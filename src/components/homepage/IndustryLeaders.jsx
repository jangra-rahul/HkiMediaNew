import React, { useRef } from "react";
import VinaySinghal from "../../assets/images/svg/vinaysimghal_img.svg";
import PareshRawal from "../../assets/images/svg/preshraval_img.svg";
import KunalLalani from "../../assets/images/svg/kunallalani_img.svg";
import deafult_img from "../../assets/images/svg/deafult_img.svg";
import ManojJoshi from "../../assets/images/svg/manojjoshi_img.svg";
import SapnaChoudhary from "../../assets/images/svg/sapna_img.svg";
import ParagSanghvi from "../../assets/images/svg/praghsanghvi_img.svg";
import VinodBhanushali from "../../assets/images/svg/vinodbhanushali_img.svg";
import rajkumar_img from "../../assets/images/svg/rajkumar.jpg";
import icon from "../../assets/images/svg/icon.svg";
import slider_left_img from "../../assets/images/svg/slider_left_img.svg";
import slider_right_img from "../../assets/images/svg/slider_right_img.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustryLeaders = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200, // For screens less than 1200px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 576, // For screens less than 768px
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className=" partners_bg py-5">
      <div className="container ">
        <h2 className="text-center text-white fs_44 fw-bold ff_s">
          What Industry Leaders Say?
        </h2>
        {/* <p className="text-center text-white fs_24 fw-semibold ff_n">
          Loved by Our Users
        </p> */}
        <div className="partners_slider mt-md-4 mt-2">
          <Slider ref={sliderRef} {...settings}>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={VinaySinghal} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Vinay Singhal
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1 heading">
                        Founder, Stage App
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12  text_justify ff_n fw-semibold clr_darkgray paragraph mt-3 mb-0">
                  HKI Media is redefining regional media excellence. Their
                  approach to skilling and storytelling is unparalleled and
                  transformative for the Indian ...
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={PareshRawal} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Paresh Rawal
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1 heading">
                        National Award-Winning Actor
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 text_justify paragraph">
                  HKI Media’s commitment to nurturing talent and producing
                  world-class content makes it a cornerstone of India’s evolving
                  entertainment industry.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={ManojJoshi} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Manoj Joshi
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1 heading">
                        Renowned Actor
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 text_justify paragraph">
                  HKI Media is bridging the gap between creativity and
                  technology. Their dedication to low-cost, high-impact regional
                  content is a true game changer.
                </p>
              </div>
            </div>

            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={KunalLalani} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Kunal Lalani
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1 heading">
                        Founder, Crayons Network
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 text_justify paragraph">
                  HKI Media’s visionary model integrates skilling, production,
                  and innovation seamlessly. They are a powerhouse shaping the
                  future of media in India.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      width={55}
                      className="rounded-5"
                      src={rajkumar_img}
                      alt="leader_icon"
                    />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme heading">
                        Rajkumar Singh
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1 heading">
                        Founder, Global Music Junction "
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 text_justify paragraph">
                  With their focus on profitability and scalability, HKI Media
                  is empowering the next generation of creators and changing the
                  dynamics of content monetization.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={SapnaChoudhary} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Sapna Choudhary
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1 heading">
                        Renowned Celebrity
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 text_justify paragraph">
                  HKI Media is a beacon of opportunity for budding talent. Their
                  media matrix is revolutionizing how artists and agencies
                  connect and collaborate.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={ParagSanghvi} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Parag Sanghvi
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1 heading">
                        Renowned Producer
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 text_justify paragraph">
                  HKI Media’s unique approach to regional and multilingual
                  storytelling is exactly what India needs in today’s
                  content-driven world
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={VinodBhanushali} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Vinod Bhanushali
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1 heading">
                        CEO, Hitz Music
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 text_justify paragraph">
                  HKI Media is setting new benchmarks in creative excellence.
                  Their blend of skilling and production ensures the
                  entertainment industry stays ..
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="d-flex pe-2 position-relative z-3 justify-content-end mt-3 gap-2">
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
  );
};

export default IndustryLeaders;
