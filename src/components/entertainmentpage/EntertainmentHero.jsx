import React from "react";
import Navbar from "../common/Navbar";
import invest_icon1 from "../../assets/images/png/icon1.png";
import invest_icon2 from "../../assets/images/png/icon2.png";
import invest_icon3 from "../../assets/images/png/icon3.png";
import invest_icon4 from "../../assets/images/png/icon4.png";
import bottom_red_arrow from "../../assets/images/svg/bottom_red_arrow.svg";

const EntertainmentHero = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" bg-black py-5">
        <div className="container py-md-4">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h4 className="text-center text-white ff_s fs_44 fw-bold mb-0">
                Our Success <span className="clr_theme">Mantra</span>
              </h4>
              {/* <p className="text-center text-white ff_n fs_24 fw-semibold">
                Revolutionizing India’s Animation Frontier
              </p> */}
              <p className="text-center text_justify mt-3 clr-darkgray ff_n fs_16 fw-normal">
                At HKI Media, our mantra{" "}
                <strong className="" style={{ color: "#ccc" }}>
                  “We Breed Creative, We Bleed Creative”&nbsp;
                </strong>
                reflects our relentless pursuit of excellence in both media
                training and production. As India’s only major player seamlessly
                bridging these two domains, we are setting benchmarks in the
                creative industry. Our{" "}
                <strong className="" style={{ color: "#ccc" }}>
                  HKI Entertainment
                </strong>{" "}
                is powered by a robust pipeline of talent from our
                <strong className="" style={{ color: "#ccc" }}>
                  {" "}
                  Skilling{" "}
                </strong>{" "}
                and{" "}
                <strong className="" style={{ color: "#ccc" }}>
                  {" "}
                  Animatica{" "}
                </strong>
                verticals, positioning us as market leaders in producing
                multilingual, high-quality, and low-cost content across music,
                films, and animation.
              </p>
              <p className="text-center text_justify mt-3 clr_darkgray ff_n fs_16 fw-normal">
                With a sharp focus on
                <strong className="" style={{ color: "#ccc" }}>
                  {" "}
                  profitability and scalability from day one{" "}
                </strong>
                , our unique business model has propelled an all-India expansion
                that’s perfectly timed with the explosive growth of regional
                North Indian industries. Backed by internet penetration and a
                massive population shift towards consuming regional content,
                we’re driving demand like never before. HKI Media stands at the
                confluence of creativity and opportunity, proving that
                innovation, strategy, and timing can redefine India’s media
                landscape.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="container py-5 ">
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="fs_44 fw-bold ff_s mb-0 text-white"
          >
            Services <span className=" clr_theme">Offered</span>
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" fs_24 ff_n mb-0 text-white"
          >
            Revolutionizing India’s Animation Frontier
          </p>
          <div className="row ">
            <div className="col-md-6 mt-md-5 mt-3 pt-3 ">
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className=" fs_18 ff_n clr_darkgray mb-0"
              >
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing so including versions of Lorem Ipsum.
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className=" fs_18 ff_n clr_darkgray mb-0 mt-3"
              >
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when a
              </p>
            </div>
            <div className="col-md-6 mt-4 position-relative">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className="d-md-block d-none position-absolute"
                style={{
                  top: "-80px",
                  right: "270px",
                }}
                src={bottom_red_arrow}
                alt="bottom_red_arrow"
              />
              <div className="row">
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className=" col-lg-6 col-sm-4  mb-3 mt-5 position-relative"
                >
                  <img
                    className=" position-absolute start-50 translate-middle-x"
                    style={{ top: "-40px", zIndex: "3456" }}
                    src={invest_icon1}
                    alt="invest_icon1"
                  />
                  <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
                    <h3
                      className="mt-3 fs_20 fw-bolder mb-0"
                      style={{ color: "#FFC107" }}
                    >
                      Multilingual film production
                    </h3>
                    <p className="fs_18 fw-medium mb-0 mt-2 text-white">
                      We bring stories to life across languages, ensuring
                      cultural relevance and emotional resonance.
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className=" col-lg-6 col-sm-4  mb-3 mt-5 position-relative"
                >
                  <img
                    className=" position-absolute start-50 translate-middle-x"
                    style={{ top: "-40px", zIndex: "3456" }}
                    src={invest_icon2}
                    alt="invest_icon1"
                  />
                  <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
                    <h3
                      className="mt-3 fs_20 fw-bolder mb-0"
                      style={{ color: "#FFC107" }}
                    >
                      200+ Music Videos
                    </h3>
                    <p className="fs_18 fw-medium mb-0 mt-2 text-white">
                      Having produced over 200 music videos, we showcase our
                      ability to deliver high-impact visuals and sound
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className=" col-lg-6 col-sm-4  mb-3 mt-5 position-relative"
                >
                  <img
                    className=" position-absolute start-50 translate-middle-x"
                    style={{ top: "-40px", zIndex: "3456" }}
                    src={invest_icon3}
                    alt="invest_icon1"
                  />
                  <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
                    <h3
                      className="mt-3 fs_20 fw-bolder mb-0"
                      style={{ color: "#FFC107" }}
                    >
                      Landmark Films
                    </h3>
                    <p className="fs_18 fw-medium mb-0 mt-2 text-white">
                      Our work on landmark films such as Yamuna Putra Angad
                      demonstrates our capacity to create content that leaves.
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className=" col-lg-6 col-sm-4  mb-3 mt-5 position-relative"
                >
                  <img
                    className=" position-absolute start-50 translate-middle-x"
                    style={{ top: "-40px", zIndex: "3456" }}
                    src={invest_icon4}
                    alt="invest_icon1"
                  />
                  <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
                    <h3
                      className="mt-3 fs_20 fw-bolder mb-0"
                      style={{ color: "#FFC107" }}
                    >
                      Regional Studio Collaborations
                    </h3>
                    <p className="fs_18 fw-medium mb-0 mt-2 text-white">
                      Collaborating with regional studios, we ensure
                      cost-effective production without compromising on quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EntertainmentHero;
