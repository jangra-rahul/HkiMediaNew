import React from "react";
import "../hkianimatica/animatica.css";
import Navbar from "../common/Navbar";

const AdvertisementHeader = () => {
  return (
    <>
      <div className="d-flex flex-column  min-vh-100 Creations_bg">
        <div>
          <Navbar />
        </div>
        <div className="container py-5 d-flex flex-grow-1 flex-column justify-content-md-end justify-content-center mb-md-5 aliign-items-center">
          <div className="row justify-content-center">
            <div className=" custom_bgColor col-md-6 col-11 p-3 rounded-3">
              <h3
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-center fs_44 fw-bold ff_s mb-0 text-black"
              >
                Welcome to <span className=" clr_theme">HKI Creations</span>
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-center fs_24 mb-0 fw-semibold ff_n text-black mt-2"
              >
                “Visualizing Ideas, Delivering Excellence”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertisementHeader;
