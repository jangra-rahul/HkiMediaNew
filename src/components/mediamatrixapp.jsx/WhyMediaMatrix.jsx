import React from "react";
import invest_icon1 from "../../assets/images/svg/media_icon1.svg";
import invest_icon2 from "../../assets/images/svg/media_icon2.svg";
import invest_icon3 from "../../assets/images/svg/media_icon3.svg";
import invest_icon4 from "../../assets/images/svg/media_icon4.svg";

const WhyMediaMatrix = () => {
  return (
    <div style={{ backgroundColor: "#171717" }} className="py-5">
      <div className="container">
        <h4 className=" fs_44 fw-bold ff_s text-white text-center">
          Why <span className="clr_theme">Media Matrix?</span>
        </h4>
        <p className="fs_16 ff_n fw-semibold mb-0 mt-2 clr_darkgray text-center">
          The Media Matrix App stands out as a transformative platform
          <br className="d-md-block d-none"></br> for the Indian media and
          entertainment industry. Here's why it's
          <br className="d-md-block d-none"></br> the ultimate choice:
        </p>
        <div className="row mt-4">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon1}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-4 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                Seamless Talent Casting
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                Simplify the process of discovering, rating, and hiring artists
                in real-time. Whether you're casting for a film, ad, or event,
                Media Matrix connects you with the right talent effortlessly.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon2}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-4 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                Faster Collaboration
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                Streamline your creative projects from ideation to execution.
                With features designed to enhance teamwork, Media Matrix ensures
                smoother interactions among creative agencies, production teams,
                and clients.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon3}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-4 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                Celebrity Hiring Made Easy
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                Take your campaigns to the next level with an intuitive module
                dedicated to celebrity endorsements and event bookings. Save
                time and resources while securing the biggest names in the
                industry.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon4}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-4 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                Integrated Media Services
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                Aggregate all your media requirements in one platform, fostering
                transparency and inclusivity across the board.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMediaMatrix;
