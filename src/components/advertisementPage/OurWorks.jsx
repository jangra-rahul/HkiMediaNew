import React, { useState, useEffect } from "react";
import "../entertainmentpage/entertainment.css";
import grid_1 from "../../assets/images/png/our_work_img1.png";
import grid_2 from "../../assets/images/png/our_work_img2.jpg";
import grid_3 from "../../assets/images/png/our_work_img3.JPG";
import grid_4 from "../../assets/images/png/our_work_img4.JPG";
import grid_5 from "../../assets/images/png/our_work_img5.jpg";
import grid_6 from "../../assets/images/png/our_work_img6.JPG";
import grid_7 from "../../assets/images/png/our_work_img7.png";
import grid_8 from "../../assets/images/png/our_work_img8.jpg";
import grid_9 from "../../assets/images/png/our_work_img9.jpg";
import grid_10 from "../../assets/images/png/our_work_img10.jpg";
import grid_11 from "../../assets/images/png/our_work_img11.png";
import grid_12 from "../../assets/images/png/our_work_img12.png";
import grid_13 from "../../assets/images/png/our_work_img13.png";
import grid_14 from "../../assets/images/png/our_work_img14.png";
import grid_15 from "../../assets/images/png/our_work_img15.png";
import grid_16 from "../../assets/images/png/our_work_img16.png";
import grid_17 from "../../assets/images/png/our_work_img17.png";
import grid_18 from "../../assets/images/png/our_work_img18.png";
import grid_19 from "../../assets/images/png/our_work_img19.png";
import grid_20 from "../../assets/images/png/our_work_img20.png";

const imageSets = [
  [grid_1, grid_6, grid_11, grid_16], // First image slot options
  [grid_2, grid_7, grid_12, grid_17], // Second image slot options
  [grid_4, grid_9, grid_14, grid_19], // Third image slot options
  [grid_5, grid_10, grid_15, grid_20], // Fourth image slot options
  [grid_3, grid_8, grid_13, grid_18], // Large image slot options
];

const OurWorks = () => {
  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0, 0]);
  const [flipState, setFlipState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipState([true, true, true, true, true]); // Trigger flip animation
      setTimeout(() => {
        setCurrentImages((prevImages) =>
          prevImages.map(
            (currentIndex, slot) => (currentIndex + 1) % imageSets[slot].length
          )
        );
        setFlipState([false, false, false, false, false]); // Reset flip state
      }, 500); // Match this duration with the CSS animation duration
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-5">
      <div className="container">
        <h4 className="fs_35 ff_s fw-bold custom_textColor text-center">
          Our Work
        </h4>

        <div className="row gallery_grid mt-5">
          {/* First column */}
          <div className="col-md-6 h-100">
            <div className="row">
              <div className="col-md-7">
                <div
                  className={`flip-container ${flipState[0] ? "flipping" : ""}`}
                >
                  <img
                    className="flip-image w-100"
                    src={imageSets[0][currentImages[0]]}
                    alt="grid_1"
                  />
                </div>
              </div>
              <div className="col-md-5 mt-3 mt-md-0">
                <div
                  className={`flip-container ${flipState[1] ? "flipping" : ""}`}
                >
                  <img
                    className="flip-image w-100"
                    src={imageSets[1][currentImages[1]]}
                    alt="grid_2"
                  />
                </div>
              </div>
              <div className="col-md-5 mt-3">
                <div
                  className={`flip-container ${flipState[2] ? "flipping" : ""}`}
                >
                  <img
                    className="flip-image w-100"
                    src={imageSets[2][currentImages[2]]}
                    alt="grid_4"
                  />
                </div>
              </div>
              <div className="col-md-7 mt-3">
                <div
                  className={`flip-container ${flipState[3] ? "flipping" : ""}`}
                >
                  <img
                    className="flip-image w-100"
                    src={imageSets[3][currentImages[3]]}
                    alt="grid_5"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="col-md-6 h-100 mt-3 mt-md-0">
            <div className={`flip-container ${flipState[4] ? "flipping" : ""}`}>
              <img
                style={{ height: "410px" }}
                className=" w-100 object-fit-cover rounded-4 flip-image"
                src={imageSets[4][currentImages[4]]}
                alt="grid_3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
