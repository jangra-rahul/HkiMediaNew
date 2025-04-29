import React from "react";
import img from "../../assets/images/png/colaj.png";
import bottom_red_arrow from "../../assets/images/svg/bottom_red_arrow.svg";

const DynamicContent = () => {
  return (
    <div className="py-5 bg-black">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-5">
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-100"
              src={img}
              alt="img"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0 position-relative">
            {/* <img
              data-aos="fade-up"
              data-aos-duration="2000"
              className="d-md-block d-none position-absolute"
              style={{
                top: "-80px",
                right: "50px",
              }}
              src={bottom_red_arrow}
              alt="bottom_red_arrow"
            /> */}
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" fs_35 fw-bold ff_s text-white"
            >
              HKI Animatica Content Studio
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" fs_16 ff_n text_justify text-white mb-0 mt-3"
            >
              With a focus on regional relevance and global appeal, each HKI
              Animatica Center of Excellence (CoE) will produce 500 minutes of
              premium content annually, spanning:
            </p>
            <ul className="mt-4">
              {/* <li
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-3 list_type  fs_16 ff_n clr-darkgray mb-0"
              >
                <strong className="" style={{ color: "#ccc" }}>
                  Regional Celebrity Animation:&nbsp;
                </strong>{" "}
                Transform fan-favorites like Sapna Choudhary and Pawan Singh
                into animated stars.
              </li> */}
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-3 list_type  fs_16 ff_n clr-darkgray mb-0"
              >
                {" "}
                <strong className="" style={{ color: "#ccc" }}>
                  Educational & Infotainment Videos:&nbsp;
                </strong>{" "}
                Multilingual, market-ready content for regional and global
                audiences.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-3 list_type  fs_16 ff_n clr-darkgray mb-0"
              >
                {" "}
                <strong className="" style={{ color: "#ccc" }}>
                  Period Dramas & Religious Stories:&nbsp;
                </strong>{" "}
                Bring legends like Veer Teja Ji and mythological tales like Shiv
                Puran to life.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-3 list_type  fs_16 ff_n clr-darkgray mb-0"
              >
                {" "}
                <strong className="" style={{ color: "#ccc" }}>
                  Localized Kids' Heroes:&nbsp;
                </strong>{" "}
                Develop cultural icons in regional languages inspired by hits
                like Chhota Bheem.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-3 list_type  fs_16 ff_n clr-darkgray mb-0"
              >
                {" "}
                <strong className="" style={{ color: "#ccc" }}>
                  High RPM Content:&nbsp;
                </strong>{" "}
                Target lucrative international markets, including the USA and
                Western Europe.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-3 list_type  fs_16 ff_n clr-darkgray mb-0"
              >
                {" "}
                <strong className="" style={{ color: "#ccc" }}>
                  Development of Gaming & Comic IPs:&nbsp;
                </strong>{" "}
                Developing immersive gaming experiences and original comic IPs,
                we are at the forefront of entertainment innovation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContent;
