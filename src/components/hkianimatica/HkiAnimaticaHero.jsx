import React from "react";
import "./animatica.css";
import Navbar from "../common/Navbar";

const HkiAnimaticaHero = () => {
  return (
    <>
      <div className="d-flex flex-column  min-vh-100 animaticahero_bg">
        <div>
          <Navbar />
        </div>
        <div className="container py-5 d-flex flex-grow-1 flex-column justify-content-md-end justify-content-center mb-md-5 aliign-items-center">
          <div className="">
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-center fs_44 fw-bold ff_s mb-0 text-white"
            >
              Welcome to <span className=" clr_theme">HKI Animatica</span>
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-center fs_24 fw-semibold ff_n text-white mt-2"
            >
              "Revolutionizing Media & Entertainment Education
              <br className="d-md-block d-none"></br> with Industry-Led Training
              and In-House Content Creation"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HkiAnimaticaHero;
