// import React, { useEffect, useState } from "react";
// import "../hkianimatica/animatica.css";
// import invest_icon1 from "../../assets/images/png/icon1.png";
// import invest_icon2 from "../../assets/images/png/icon2.png";
// import invest_icon3 from "../../assets/images/png/icon3.png";
// import invest_icon4 from "../../assets/images/png/icon4.png";
// import skillingBg1 from "../../assets/images/png/grid_img_group.png";
// import skillingBg3 from "../../assets/images/png/grid_img_group1.png";
// import grid_1 from "../../assets/images/png/grid1.png";
// import grid_2 from "../../assets/images/png/grid2.png";
// import grid_3 from "../../assets/images/png/grid3.png";
// import grid_4 from "../../assets/images/png/grid4.png";
// import grid_5 from "../../assets/images/png/grid5.png";
// const GalleryImage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [fade, setFade] = useState(false);

//   const backgroundImages = [skillingBg1, skillingBg3];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true); // Trigger fade-out
//       setTimeout(() => {
//         setCurrentImageIndex(
//           (prevIndex) => (prevIndex + 1) % backgroundImages.length
//         );
//         setFade(false); // Trigger fade-in
//       }, 500); // Wait for fade-out to complete
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [backgroundImages.length]);

//   return (
//     <div className="bg-black py-5">
//       <div className="container">
//         {/* <h4 className=" fs_s fw-bold text-white fs_44 text-center ">
//           Our Achivements
//         </h4> */}
//         <div className="row justify-content-center mt-4 mb-5">
//           <div
//             data-aos="fade-up"
//             data-aos-duration="2000"
//             className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
//           >
//             <img
//               width={70}
//               height={74}
//               className=" position-absolute start-50 translate-middle-x"
//               style={{ top: "-40px", zIndex: "3456" }}
//               src={invest_icon1}
//               alt="invest_icon1"
//             />
//             <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
//               <h3
//                 className="mt-3 fs_20 fw-bold mb-0 ff_s"
//                 style={{ color: "#FFC107" }}
//               >
//                 Multilingual film production
//               </h3>
//               <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
//                 We bring stories to life across languages, ensuring cultural
//                 relevance and emotional resonance.
//               </p>
//             </div>
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-duration="2000"
//             className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
//           >
//             <img
//               width={70}
//               height={74}
//               className=" position-absolute start-50 translate-middle-x"
//               style={{ top: "-40px", zIndex: "3456" }}
//               src={invest_icon3}
//               alt="invest_icon1"
//             />
//             <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
//               <h3
//                 className="mt-3 fs_20 fw-bold mb-0 ff_s"
//                 style={{ color: "#FFC107" }}
//               >
//                 Landmark Films
//               </h3>
//               <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
//                 Our work on landmark films such as Yamuna Putra Angad
//                 demonstrates our capacity to create content that leaves.
//               </p>
//             </div>
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-duration="2000"
//             className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
//           >
//             <img
//               width={70}
//               height={74}
//               className=" position-absolute start-50 translate-middle-x"
//               style={{ top: "-40px", zIndex: "3456" }}
//               src={invest_icon2}
//               alt="invest_icon1"
//             />
//             <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
//               <h3
//                 className="mt-3 fs_20 fw-bold mb-0 ff_s"
//                 style={{ color: "#FFC107" }}
//               >
//                 200+ Music Videos
//               </h3>
//               <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
//                 Having produced over 200 music videos, we showcase our ability
//                 to deliver high-impact visuals and sound
//               </p>
//             </div>
//           </div>

//           <div
//             data-aos="fade-up"
//             data-aos-duration="2000"
//             className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
//           >
//             <img
//               width={70}
//               height={74}
//               className=" position-absolute start-50 translate-middle-x"
//               style={{ top: "-40px", zIndex: "3456" }}
//               src={invest_icon4}
//               alt="invest_icon1"
//             />
//             <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
//               <h3
//                 className="mt-3 fs_20 fw-bold mb-0 ff_s"
//                 style={{ color: "#FFC107" }}
//               >
//                 Regional Studio Collaborations
//               </h3>
//               <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
//                 Collaborating with regional studios, we ensure cost-effective
//                 production without compromising on quality.
//               </p>
//             </div>
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-duration="2000"
//             className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
//           >
//             <img
//               width={70}
//               height={74}
//               className=" position-absolute start-50 translate-middle-x"
//               style={{ top: "-40px", zIndex: "3456" }}
//               src={invest_icon4}
//               alt="invest_icon1"
//             />
//             <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
//               <h3
//                 className="mt-3 fs_20 fw-bold mb-0 ff_s"
//                 style={{ color: "#FFC107" }}
//               >
//                 Regional Studio Collaborations
//               </h3>
//               <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
//                 Collaborating with regional studios, we ensure cost-effective
//                 production without compromising on quality.
//               </p>
//             </div>
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-duration="2000"
//             className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
//           >
//             <img
//               width={70}
//               height={74}
//               className=" position-absolute start-50 translate-middle-x"
//               style={{ top: "-40px", zIndex: "3456" }}
//               src={invest_icon4}
//               alt="invest_icon1"
//             />
//             <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
//               <h3
//                 className="mt-3 fs_20 fw-bold mb-0 ff_s"
//                 style={{ color: "#FFC107" }}
//               >
//                 Regional Studio Collaborations
//               </h3>
//               <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
//                 Collaborating with regional studios, we ensure cost-effective
//                 production without compromising on quality.
//               </p>
//             </div>
//           </div>
//         </div>
//         <h3
//           data-aos="fade-up"
//           data-aos-duration="2000"
//           className=" fs_35 fw-bold ff_s text-white text-center mb-0"
//         >
//           Behind the Scenes
//         </h3>
//         <div className="row gallery_grid mt-5">
//           <div className="col-md-6">
//             <div className="row">
//               <div className="col-md-7 ">
//                 <img
//                   data-aos="fade-up"
//                   data-aos-duration="2000"
//                   className="w-100 h-100"
//                   src={grid_1}
//                   alt="grid_1"
//                 />
//               </div>
//               <div className="col-md-5 mt-3 mt-md-0">
//                 <img
//                   data-aos="fade-up"
//                   data-aos-duration="2000"
//                   className="w-100 h-100"
//                   src={grid_2}
//                   alt="grid_2"
//                 />
//               </div>
//               <div className="col-md-5 mt-3">
//                 <img
//                   data-aos="fade-up"
//                   data-aos-duration="2000"
//                   className="w-100 h-100"
//                   src={grid_4}
//                   alt="grid_4"
//                 />
//               </div>
//               <div className="col-md-7 mt-3">
//                 <img
//                   data-aos="fade-up"
//                   data-aos-duration="2000"
//                   className="w-100"
//                   src={grid_5}
//                   alt="grid_5"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 mt-3 mt-md-0">
//             <img
//               data-aos="fade-up"
//               data-aos-duration="2000"
//               className=" w-100 object-fit-cover rounded-4"
//               height={410}
//               src={grid_3}
//               alt="grid_3"
//             />
//           </div>
//         </div>
//         {/* <div className=" mt-3">
//           <img
//             style={{
//               transition: "opacity 0.5s ease-in-out",
//               opacity: fade ? 0 : 1,
//             }}
//             className="w-100"
//             src={backgroundImages[currentImageIndex]}
//             alt="background"
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default GalleryImage;

import React, { useState, useEffect } from "react";
import "./entertainment.css";
import grid_1 from "../../assets/images/png/grid1.png";
import grid_2 from "../../assets/images/png/grid2.png";
import grid_3 from "../../assets/images/png/grid3.png";
import grid_4 from "../../assets/images/png/grid4.png";
import grid_5 from "../../assets/images/png/grid5.png";
import grid_6 from "../../assets/images/png/grid6.png";
import grid_7 from "../../assets/images/png/grid7.png";
import grid_8 from "../../assets/images/png/grid8.png";
import grid_9 from "../../assets/images/png/grid9.png";
import grid_10 from "../../assets/images/png/grid10.png";
import grid_11 from "../../assets/images/png/grid11.png";
import grid_12 from "../../assets/images/png/grid12.png";
import grid_13 from "../../assets/images/png/grid13.png";
import grid_14 from "../../assets/images/png/grid14.png";
import grid_15 from "../../assets/images/png/grid15.png";
import grid_16 from "../../assets/images/png/grid16.png";
import grid_17 from "../../assets/images/png/grid17.png";
import grid_18 from "../../assets/images/png/grid18.png";
import grid_19 from "../../assets/images/png/grid19.png";
import grid_20 from "../../assets/images/png/grid20.png";
import invest_icon1 from "../../assets/images/png/icon1.png";
import invest_icon2 from "../../assets/images/png/icon2.png";
import invest_icon3 from "../../assets/images/png/icon3.png";
import invest_icon4 from "../../assets/images/png/icon4.png";
import invest_icon5 from "../../assets/images/png/icon5.png";
import invest_icon6 from "../../assets/images/png/icon6.png";

const imageSets = [
  [grid_1, grid_6, grid_11, grid_16], // First image slot options
  [grid_2, grid_7, grid_12, grid_17], // Second image slot options
  [grid_4, grid_9, grid_14, grid_19], // Third image slot options
  [grid_5, grid_10, grid_15, grid_20], // Fourth image slot options
  [grid_3, grid_8, grid_13, grid_18], // Large image slot options
];

const GalleryImage = () => {
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
        <div className="row justify-content-center mt-4 mb-5">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              width={70}
              height={74}
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon1}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                Multilingual film production
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                We bring stories to life across languages, ensuring cultural
                relevance and emotional resonance.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              width={70}
              height={74}
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon3}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                Landmark Films
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                Our work on landmark films such as Yamuna Putra Angad
                demonstrates our capacity to create content that leaves.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              width={70}
              height={74}
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon2}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                200+ Music Videos
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                Having produced over 200 music videos, we showcase our ability
                to deliver high-impact visuals and sound
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              width={70}
              height={74}
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon4}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                Regional Studio Collaborations
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                Collaborating with regional studios, we ensure cost-effective
                production without compromising on quality.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              width={70}
              height={74}
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon5}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                Booming Regional Content Demand
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                The rise in regional language content consumption, driven by
                Tier II and Tier III audiences, offers a lucrative opportunity
                for HKI Entertainment to cater to a growing untapped market.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" col-lg-3 col-md-4 col-sm-6  mb-3 mt-5 position-relative"
          >
            <img
              width={70}
              height={74}
              className=" position-absolute start-50 translate-middle-x"
              style={{ top: "-40px", zIndex: "3456" }}
              src={invest_icon6}
              alt="invest_icon1"
            />
            <div className="card h-100 p-2 pt-5 text-center bg_theme rounded-2">
              <h3
                className="mt-3 fs_20 fw-bold mb-0 ff_s"
                style={{ color: "#FFC107" }}
              >
                Youth and Digital-First Growth
              </h3>
              <p className="fs_18 fw-medium mb-0 mt-2 text-white ff_n">
                With over 600 million young Indians and the booming ₹30,000
                crore OTT market, HKI Entertainment is strategically poised to
                deliver compelling, culturally resonant content to India’s
                digital-savvy audience.
              </p>
            </div>
          </div>
        </div>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="fs_35 fw-bold ff_s text-white text-center mb-0"
        >
          Behind the Scenes
        </h3>
        <div className="row gallery_grid mt-5">
          {/* First column */}
          <div className="col-md-6 h-100">
            <div className="row">
              <div className="col-md-7">
                <div
                  className={`flip-container ${flipState[0] ? "flipping" : ""}`}
                >
                  <img
                    className="flip-image border-1 border border-light"
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
                    className="flip-image border-1 border border-light"
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
                    className="flip-image border-1 border border-light"
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
                    className="flip-image border-1 border border-light"
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
                style={{ height: "400px" }}
                className=" w-100 object-fit-cover rounded-4 flip-image border-1 border border-light"
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

export default GalleryImage;
