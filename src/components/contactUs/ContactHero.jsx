import React from "react";
import Navbar from "../common/Navbar";
import "../skilling/skilling.css";

const ContactHero = () => {
  return (
    <div>
      <Navbar />
      <div className="py-5 partners_bg">
        <div className="container py-md-4">
          <h3 className=" fs_35 fw-bold ff_s text-white mb-0 text-center">
            Get in Touch with Us
          </h3>
          <p className=" fs_18 ff_n fw-semibold text-white text-center mb-0 mt-2">
            We’re Here to Help You Every Step of the Way
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
