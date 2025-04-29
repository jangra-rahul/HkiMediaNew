import React from "react";
import article_img1 from "../../assets/images/png/course_img1.png";
import article_img2 from "../../assets/images/png/course_img2.png";
import article_img3 from "../../assets/images/png/course_img3.png";
import right_arrow from "../../assets/images/svg/right_arrow.svg";
import { Link } from "react-router-dom";

const OurCourses = () => {
  return (
    <div className=" py-5" style={{ backgroundColor: "#171717" }}>
      <div className="container">
        <h4 className=" fs_35 ff_s fw-bold text-white fw-bold text-center">
          Our Courses
        </h4>
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="card h-100 p-2 rounded-4">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <img
                    className="w-100"
                    src={article_img1}
                    alt="article_img1"
                  />
                  <h3 className=" px-2 pt-2 fs_24 ff_s fw-bold clr_theme ">
                    Film Production
                  </h3>
                  <p className="mb-0 px-2 text_justify fs_16 ff_n clr_darkgray ">
                    Unleash creativity with courses tailored for aspiring
                    Actors, Directors, Directors of Photography (DOP), Editors,
                    and Prosthetics Artists. These programs provide
                    comprehensive training in cinematic storytelling, technical
                    mastery, and on-set expertise, setting students on a path to
                    success in the film industry.
                  </p>
                </div>
                <Link to={"/contact-us"}>
                  <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                    Inquire Now
                  </button>
                </Link>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-4  mt-4">
            <div className="card h-100 p-2 rounded-4">
              <div className=" d-flex flex-column h-100 justify-content-between">
                <div>
                  <img
                    className="w-100"
                    src={article_img2}
                    alt="article_img1"
                  />

                  <h3 className=" px-2 pt-2 fs_24 ff_s fw-bold clr_theme ">
                    Digital Media
                  </h3>
                  <p className="mb-0 px-2 text_justify fs_16 ff_n clr_darkgray ">
                    Shape the future of marketing with courses in SEO, Digital
                    Marketing, Social Media Management, Graphic Design, and
                    Content Strategy. Designed to meet industry demands, these
                    programs equip students with the skills to create impactful
                    campaigns and thrive in the digital space.
                  </p>
                </div>
                <Link to={"/contact-us"}>
                  <button className="but px-4 mx-2 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                    Inquire Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-4">
            <div className="card h-100 p-2 rounded-4">
              <img className="w-100" src={article_img3} alt="article_img1" />
              <div className="p-2 pb-0 d-flex flex-column justify-content-between h-100">
                <div>
                  <h3 className=" fs_24 pt-2 ff_s fw-bold clr_theme ">
                    AVGC-XR
                  </h3>
                  <p className="mb-0 text_justify fs_16 ff_n clr_darkgray ">
                    Enter the next generation of entertainment with courses in
                    Animation, VFX, Gaming, Comics, Augmented Reality (AR),
                    Virtual Reality (VR), and Extended Reality (XR). Our
                    state-of-the-art curriculum ensures students become pioneers
                    in crafting immersive, high-tech experiences.
                  </p>
                </div>
                <Link to={"/contact-us"}>
                  <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                    Inquire Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/courses">
              <p className="mb-0  cursor-pointer fs_17 ff_n text-white fw-bold">
                View All Courses &nbsp;
                <img src={right_arrow} alt="right_arrow" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
