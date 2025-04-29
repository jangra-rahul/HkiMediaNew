import React, { useRef } from "react";
import top_icon from "../../assets/images/png/top_icon.png";
import Achievements_img from "../../assets/images/png/Achievements_img.png";
import Achievements_img1 from "../../assets/images/png/animatica_img1.png";
import Achievements_img2 from "../../assets/images/png/animatica_img2.png";
import Achievements_img3 from "../../assets/images/png/animatica_img3.png";
import Achievements_img4 from "../../assets/images/png/animatica_img4.png";
import Achievements_img5 from "../../assets/images/png/animatica_img5.png";
import Achievements_img6 from "../../assets/images/png/animatica_img6.png";
import Achievements_img7 from "../../assets/images/png/animatica_img7.png";
import Achievements_img8 from "../../assets/images/png/animatica_img8.png";
import Achievements_img9 from "../../assets/images/png/animatica_img9.png";
import Achievements_img10 from "../../assets/images/png/animatica_img10.png";
import Achievements_img11 from "../../assets/images/png/animatica_img11.png";
import Achievements_img12 from "../../assets/images/png/animatica_img12.png";
import Achievements_img13 from "../../assets/images/png/animatica_img13.png";
import slider_right_img from "../../assets/images/svg/slider_right_img.svg";
import slider_left_img from "../../assets/images/svg/slider_left_img.svg";
import red_arrow from "../../assets/images/svg/red_arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./skilling.css";

const SkillingAchievements = () => {
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="partners_bg  py-5">
      <div className="container pb-5 py-md-4 py-0  rounded-2 p-4 position-relative">
        <h4 className="mt-4 clr_yellow fs_44 fw-bold ff_s mb-0 text-center">
          We Breed Creative, We Bleed Creative
        </h4>
        <p className=" fs_24 fw-semibold mt-2 mt-md-0 ff_n mb-0 text-white text-center">
          Transforming Media Talents
        </p>
        <div className="row  align-items-center justify-content-between mt-md-5 mt-3">
          <div className="col-md-6 mt-4 position-relative">
            <img
              className="d-md-block d-none position-absolute "
              style={{ top: "-80px", right: "-30px" }}
              src={red_arrow}
              alt="red_arrow"
            />
            <ul className="ps-md-4 ps-2">
              <li className="list_type text_justify fs_16 ff_n clr_darkgray fw-bold mb-0 clr_yellow">
                Over 1,000 HKI Media-trained students They:&nbsp;
                <span className="text-white fw-normal">
                  have achieved success, collaborating with leading celebrities
                  in music videos and feature films. Through strong industry
                  partnerships, HKI bridges talent with opportunity, offering
                  real-world exposure and assured placements.
                </span>
              </li>
              <li className="list_type text_justify fs_16 mt-4 ff_n clr_darkgray fw-bold mb-0 clr_yellow">
                Over 2,000 Students Trained in 2023-24:{" "}
                <span className="text-white fw-normal">
                  We have made a significant impact in empowering the next
                  generation of media professionals through our robust training
                  programs.
                </span>
              </li>
              <li className="list_type text_justify fs_16 mt-4 ff_n clr_darkgray fw-bold mb-0 clr_yellow">
                Skilling & Upskilling 10,200+ Artists:{" "}
                <span className="text-white fw-normal">
                  In collaboration with MESC, we are on track to skill and
                  upskill over 10,200 students in film production and animation
                  this year, directly contributing to India's creative economy.
                </span>
              </li>
              <li className="list_type text_justify fs_16 mt-4 ff_n clr_darkgray fw-bold mb-0 clr_yellow">
                Expansion with 20 AVGC-XR CoEs:{" "}
                <span className="text-white fw-normal">
                  With 20 planned Centers of Excellence (CoEs) across North
                  India, we are taking a giant leap toward empowering youth with
                  futuristic skills for the digital age.
                </span>
              </li>
              <li className="list_type text_justify fs_16 mt-4 ff_n clr_darkgray fw-bold mb-0 clr_yellow">
                National Affiliations:{" "}
                <span className="text-white fw-normal">
                  Proudly recognized under Startup India, Skill India, and
                  affiliated with NSDC, MESC, UPSDM, TCIL, and ICASA.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6 animatica_slider pe-4 mt-4 ps-md-5">
            <Slider ref={sliderRef} className="row" {...settings}>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img1}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img2}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img3}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img4}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img5}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img6}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img7}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img8}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img9}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img10}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img11}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img12}
                  alt="Achievements_img"
                />
              </div>
              <div>
                <img
                  className="w-100 p-3"
                  src={Achievements_img13}
                  alt="Achievements_img"
                />
              </div>
            </Slider>
          </div>
          <div className="d-flex position-relative z-3 justify-content-end gap-2">
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
  );
};

export default SkillingAchievements;
