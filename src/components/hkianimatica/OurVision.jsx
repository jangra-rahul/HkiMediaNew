import React from "react";
import OurVision_img from "../../assets/images/png/OurVision_img.png";
import { Link } from "react-router-dom";

const OurVision = () => {
  return (
    <div className="py-5 bg-black">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-5">
            <img className="w-100" src={OurVision_img} alt="OurVision_img" />
          </div>
          <div className="col-md-7 ps-0 ps-md-5">
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" fs_35 ff_s fw-bold text-white mb-0"
            >
              Our <span className=" clr_theme">Vision</span>
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_16 ff_n text_justify clr_darkgray mb-0 mt-4"
            >
              Over the next two years, we aim to establish 20 HKI Animatica
              Centers of Excellence, with 4 already in the pipeline. Each center
              will serve as a hub of innovation, creativity, and opportunity,
              empowering students and creators to shape the future of the
              AVGC-XR sector and film production.
            </p>
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" fs_24 fw-semibold ff_n text-white mb-0 mt-4"
            >
              Your Opportunity to Lead
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_16 ff_n text_justify clr_darkgray mb-0 mt-3"
            >
              Become a franchise owner and contribute to shaping the digital
              landscape of India. Whether you’re an entrepreneur, an investor,
              or an academic visionary, HKI Animatica offers a platform where
              innovation meets profitability.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_16 ff_n text_justify clr_darkgray mb-0 mt-4"
            >
              Ready to Transform the Industry? Let’s Talk! Take the first step
              toward owning an HKI Animatica franchise by filling out the
              inquiry form below.
            </p>
            <Link to={"/contact-us"}>
              <button
                data-aos="fade-up"
                data-aos-duration="2000"
                className=" cummon_btn border-0 fs_14 fw-bold ff_s text-white px-4 mt-4 py-2 rounded-2"
              >
                Let’s Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
