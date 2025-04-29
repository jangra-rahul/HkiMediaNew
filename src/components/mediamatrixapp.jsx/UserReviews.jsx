import React, { useRef } from "react";
import DeeGaur from "../../assets/images/svg/Dee_Gaur.svg";
import chchi from "../../assets/images/svg/ChaChi.svg";
import RyanLohan from "../../assets/images/svg/RyanLohan.svg";
import RawFilm from "../../assets/images/svg/RawFilms.svg";
import Crayons from "../../assets/images/svg/Crayons.svg";
import BinderDanoda from "../../assets/images/svg/Binder.svg";
import kd from "../../assets/images/svg/kd.svg";
import RenukaPanwar from "../../assets/images/svg/RenukaPanwar.svg";
import RomeoLane from "../../assets/images/svg/RomeoLane.svg";
import ShikariMusic from "../../assets/images/svg/ShikariMusic.svg";
import RameshChahal from "../../assets/images/svg/RameshChahal.svg";
import leader_icon from "../../assets/images/svg/leader_icon.svg";
import leader_icon1 from "../../assets/images/svg/deafult_img.svg";
import icon from "../../assets/images/svg/icon.svg";
import slider_left_img from "../../assets/images/svg/slider_left_img.svg";
import slider_right_img from "../../assets/images/svg/slider_right_img.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserReviews = () => {
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
                    <img src={DeeGaur} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Dee Gaur
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Music Producer
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  The Media Matrix App has made discovering fresh talent and
                  collaborating with top-notch creative agencies a breeze. It’s
                  a game-changer for the music..
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={RyanLohan} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Ryan Lohan
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Director
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  This app streamlines the entire production process, from
                  casting to location management. It’s the ultimate toolkit for
                  directors.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={leader_icon1} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Manu Jangra
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Graphic Designer
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Finding­­ high-paying projects has never been easier! The app
                  connects me with clients who truly value creativity and
                  innovation.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={leader_icon1} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Mohit Mor
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Sales Director
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  The Media Matrix App simplifies accessing creative talent for
                  marketing campaigns. It’s my go-to for building impactful ad
                  strategies.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={ShikariMusic} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Shikari Music
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Production House
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Thanks to Media Matrix, we’ve expanded our network of
                  composers and lyricists. It’s an invaluable asset for
                  production houses
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={Crayons} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Crayons
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Advertisement Agency
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  The app has revolutionized how we source talent and ideas for
                  our ad campaigns. It keeps us ahead in the competitive ad
                  world.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={RawFilm} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Raw Film Farmers
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Production House
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Media Matrix connects us with skilled professionals and
                  ensures seamless collaboration on every project. Highly
                  recommended!
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={chchi} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Cha Chi
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        PR Agency
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  With Media Matrix, managing PR campaigns with influencers and
                  media experts has become incredibly efficient.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={leader_icon1} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Amadeep
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        VFX Artist
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  This app has opened doors to international-level projects.
                  It’s the perfect platform to showcase VFX skills.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={leader_icon1} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Rohit Yadav
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Editor
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Media Matrix helps me find projects that align with my
                  creative vision. It’s a must-have for editors!
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={leader_icon1} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Ashish Ashu
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Actor
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Audition notifications and direct access to casting directors
                  make this app a dream come true for actors.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={RameshChahal} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Ramesh Chahal
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Script Writer
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Media Matrix has streamlined script pitching and brought
                  exciting collaboration opportunities my way.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={leader_icon1} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Siddharth Kukreja
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Assistant Director
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  The app simplifies networking with directors and producers,
                  helping me land better projects effortlessly.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={RomeoLane} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Romeo Lane
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Media Hub User
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Media Matrix is the perfect bridge for linking corporate
                  brands with the best creative minds in the industry.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={kd} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        KD
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Celebrity
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  This app connects me with the right agencies to grow my brand
                  and manage my media presence effectively.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={BinderDanoda} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Binder Danoda
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Celebrity
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Media Matrix ensures a seamless connection with event
                  organizers and production houses. It’s a lifesaver!
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={leader_icon1} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Aamin Barodi
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Lyrics Writer
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  The app has given me unparalleled access to music producers
                  and directors, helping me showcase my lyrics to a wider
                  audience.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={leader_icon1} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Shubh Labh Films
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Production House
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  With Media Matrix, we’ve streamlined hiring and creative
                  collaboration. It’s revolutionized how we operate!
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={leader_icon1} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Anantadrishti Films
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Post Production House
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Media Matrix has made finding skilled editors, VFX artists,
                  and sound designers a hassle-free experience.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="card p-4 rounded-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={RenukaPanwar} alt="leader_icon" />
                    <div className="mt-1">
                      <h5 className="mb-0 fs_18 fw-semibold ff_s clr_theme">
                        Renuka Panwar
                      </h5>
                      <p className="mb-0 fs_14 ff_n fw-semibold clr_darkgray mt-1">
                        Celebrity
                      </p>
                    </div>
                  </div>
                  <img src={icon} alt="icon" />
                </div>
                <p className="fs_12 ff_n fw-semibold clr_darkgray mt-3 mb-0 paragraph">
                  Media Matrix is my go-to platform for managing my media
                  collaborations and expanding my reach. It’s truly a one-stop
                  solution for every creative need!
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

export default UserReviews;
