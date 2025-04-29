import React from "react";
import animatica_img from "../../assets/images/png/media_img.png";
import red_arrow from "../../assets/images/svg/red_arrow.svg";

const FutureofMedia = () => {
  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 text-center text-md-start">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_35 ff_s fw-bold text-white"
            >
              Step Into the&nbsp;
              <span className=" clr_theme">
                Future of<br></br> Media & Entertainment
              </span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_16 ff_n text_justify clr-darkgray mb-0 mt-3"
            >
              <strong style={{ color: "#ccc" }}>
                Introducing the Media Matrix App{" "}
              </strong>
              — a revolutionary platform transforming the media and
              entertainment landscape. By enabling seamless, rating-based hiring
              and real-time casting of artists, it bridges the gap between
              talent and opportunity like never before.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_16 ff_n text_justify clr_darkgray mb-0 mt-3"
            >
              The app fosters faster collaboration among creative agencies,
              streamlining projects from ideation to execution. It also offers a
              dedicated module for celebrity hiring for events and endorsements,
              simplifying high-impact campaigns.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="fs_16 ff_n text_justify clr_darkgray mb-0 mt-3"
            >
              With features that aggregate media services, enhance transparency,
              and promote inclusivity, the Media Matrix App is set to redefine
              how the industry connects, collaborates, and creates. It’s not
              just a platform—it’s the future of media synergy.
            </p>
          </div>
          <div className="col-md-4 mt-4 mt-md-0 position-relative">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureofMedia;
