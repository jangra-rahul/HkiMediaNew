import React from "react";
import invest_icon1 from "../../assets/images/svg/invest_icon.svg";
import invest_icon2 from "../../assets/images/svg/insta_icon1.svg";
import invest_icon3 from "../../assets/images/svg/insta_icon2.svg";

const AnimaticaWhyInvestHero = () => {
  return (
    <div className="invest_bg py-5">
      <div className="container py-md-5 py-4">
        <h2
          data-aos="fade-up"
          data-aos-duration="2000"
          className="fs_35 ff_s fw-bold text-center text-white mb-0"
        >
          Why Invest in <span className=" clr_theme">HKI Animatica?</span>
        </h2>
        <div className="row mt-md-5 pt-4">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-md-4 col-sm-6 mt-5 position-relative"
          >
            <img
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon1}
              alt="invest_icon1"
            />
            <div className="card h-100 p-4 pt-5 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bolder mb-0"
                style={{ color: "#FFC107" }}
              >
                Government-sponsored <br></br>schemes
              </h3>
              <p className="fs_18  fw-medium mb-0 mt-2 text-white">
                Tap into state-backed funding<br></br> opportunities.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-md-4 col-sm-6 mt-5 position-relative"
          >
            <img
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon2}
              alt="invest_icon1"
            />
            <div className="card h-100 p-4 pt-5 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bolder mb-0"
                style={{ color: "#FFC107" }}
              >
                Content monetization
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white">
                Create and market premium animated content through platforms
                like YouTube and OTT giants.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-md-4 col-sm-6 mt-5 position-relative"
          >
            <img
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon3}
              alt="invest_icon1"
            />
            <div className="card h-100 p-4 pt-5 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bolder mb-0"
                style={{ color: "#FFC107" }}
              >
                AICTE-approved diploma <br></br>courses
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white">
                Attract students seeking industry-ready certifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimaticaWhyInvestHero;
