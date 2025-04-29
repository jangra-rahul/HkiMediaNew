import React from "react";
import animatica_img from "../../assets/images/png/DynamicContent_img.png";
import red_arrow from "../../assets/images/svg/red_arrow.svg";

const AnimaticaFuture = () => {
  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-12 text-center">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_35 ff_s fw-bold text-white"
            >
              Unleash the Future of AVGC-XR and<br></br> Content Production with
              us
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_16 ff_n text_justify clr-darkgray mb-0 mt-3"
            >
              <strong style={{ color: "#ccc" }}>HKI Animatica</strong> stands
              for&nbsp;
              <strong style={{ color: "#ccc" }}>
                Animation, Media Innovation, AVGC-XR, and Creative Arts,
              </strong>
              &nbsp; embodying HKI Media’s mission to revolutionize the{" "}
              <strong style={{ color: "#ccc" }}>
                &nbsp; media and entertainment landscape.
              </strong>
              &nbsp; As a premier training and skilling brand,{" "}
              <strong style={{ color: "#ccc" }}> Animatica </strong>
              empowers students with world-class expertise in{" "}
              <strong style={{ color: "#ccc" }}>
                {" "}
                animation, VFX, gaming, and filmmaking.{" "}
              </strong>{" "}
              Through its visionary{" "}
              <strong style={{ color: "#ccc" }}>
                {" "}
                Media Matrix App,{" "}
              </strong>{" "}
              another&nbsp;
              <strong style={{ color: "#ccc" }}>HKI Media vertical,</strong>
              &nbsp; Animatica ensures forward market linkages by connecting its
              trained talent to work opportunities. This app leverages their
              skills, alma mater, and past work ratings, creating a seamless
              pathway for career growth in the AVGC-XR and creative industries.
              Animatica is where artistry meets opportunity!
            </p>
          </div>
          {/* <div className="col-md-4 mt-4 mt-md-0 position-relative">
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              className="d-md-block d-none position-absolute"
              style={{ top: "50px", left: "-150px" }}
              src={red_arrow}
              alt="red_arrow"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-100"
              src={animatica_img}
              alt="animatica_img"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AnimaticaFuture;
