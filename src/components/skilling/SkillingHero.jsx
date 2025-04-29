// // import React, { useState, useEffect } from "react";
// // import "./skilling.css";
// // import Navbar from "../common/Navbar";

// // // Import background images
// // import skillingBg1 from "../../assets/images/png/skilling_bg.png";
// // import skillingBg2 from "../../assets/images/png/skilling_bg1.png";
// // import skillingBg3 from "../../assets/images/png/skilling_bg2.png";

// // const SkillingHero = () => {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   // List of imported images
// //   const backgroundImages = [skillingBg1, skillingBg3, skillingBg2];

// //   // Update the image index every 2 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex(
// //         (prevIndex) => (prevIndex + 1) % backgroundImages.length
// //       );
// //     }, 2000);
// //     return () => clearInterval(interval); // Cleanup interval on component unmount
// //   }, [backgroundImages.length]);

// //   return (
// //     <>
// //       <div
// //         className="d-flex flex-column min-vh-100 skilling_bg"
// //         style={{
// //           backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
// //           transition: "background-image 1s ease-in-out", // Smooth transition
// //         }}
// //       >
// //         <div>
// //           <Navbar />
// //         </div>
// //         <div className="container py-5 d-flex flex-grow-1 flex-column justify-content-md-end justify-content-center mb-md-5 align-items-center">
// //           <h1 className="text-white">Welcome to Skilling Platform</h1>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default SkillingHero;

// import React from "react";
// import Navbar from "../common/Navbar";
// import achivement_icon1 from "../../assets/images/svg/achivement_icon1.svg";
// import achivement_icon2 from "../../assets/images/svg/achivement_icon2.svg";
// import achivement_icon3 from "../../assets/images/svg/achivement_icon3.svg";
// import achivement_icon4 from "../../assets/images/svg/achivement_icon4.svg";

// const SkillingHero = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="partners_bg py-5">
//         <div className="container py-md-5">
//           <h5 className="text-center fs_44 fw-bold ff_s text-white">
//             Our Achivements
//           </h5>
//           <p className="text-center fs_24 fw-semibold ff_n text-white">
//             In Collaboration with MESC and State Governments
//           </p>
//           <div className="row justify-content-center">
//             <div className="col-md-10">
//               <div className="row">
//                 <div className="col-md-3 col-6 mt-4">
//                   <div className="d-flex align-items-center gap-3">
//                     <img src={achivement_icon2} alt="achivement_icon1" />
//                     <div className="">
//                       <h4 className="fs_27 mb-0 ff_s fw-bold text-white">
//                         10000+
//                       </h4>
//                       <p className="fs_16 ff_n text-white mb-0 mt-1">
//                         Ongoing Training
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-3 col-6 mt-4">
//                   <div className="d-flex align-items-center gap-3">
//                     <img src={achivement_icon3} alt="achivement_icon1" />
//                     <div className="">
//                       <h4 className="fs_27 mb-0 ff_s fw-bold text-white">
//                         1000+
//                       </h4>
//                       <p className="fs_16 ff_n text-white mb-0 mt-1">
//                         Students Placed
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-3 col-6 mt-4">
//                   <div className="d-flex align-items-center gap-3">
//                     <img src={achivement_icon4} alt="achivement_icon1" />
//                     <div className="">
//                       <h4 className="fs_27 mb-0 ff_s fw-bold text-white">
//                         40+
//                       </h4>
//                       <p className="fs_16 ff_n text-white mb-0 mt-1">
//                         Training Centres
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-3 col-6 mt-4">
//                   <div className="d-flex align-items-center gap-3">
//                     <img src={achivement_icon1} alt="achivement_icon1" />
//                     <div className="">
//                       <h4 className="fs_27 mb-0 ff_s fw-bold text-white">
//                         10+
//                       </h4>
//                       <p className="fs_16 ff_n text-white mb-0 mt-1">
//                         State Presence
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SkillingHero;
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../common/Navbar";
import achivement_icon1 from "../../assets/images/svg/achivement_icon1.svg";
import achivement_icon2 from "../../assets/images/svg/achivement_icon2.svg";
import achivement_icon3 from "../../assets/images/svg/achivement_icon3.svg";
import achivement_icon4 from "../../assets/images/svg/achivement_icon4.svg";

const SkillingHero = () => {
  const [counters, setCounters] = useState({
    ongoingTraining: 0,
    studentsPlaced: 0,
    trainingCentres: 0,
    statePresence: 0,
  });
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (startCounting) {
      const intervals = {
        ongoingTraining: setInterval(() => {
          setCounters((prev) => ({
            ...prev,
            ongoingTraining:
              prev.ongoingTraining < 10000 ? prev.ongoingTraining + 50 : 10000,
          }));
        }, 10),
        studentsPlaced: setInterval(() => {
          setCounters((prev) => ({
            ...prev,
            studentsPlaced:
              prev.studentsPlaced < 1000 ? prev.studentsPlaced + 10 : 1000,
          }));
        }, 20),
        trainingCentres: setInterval(() => {
          setCounters((prev) => ({
            ...prev,
            trainingCentres:
              prev.trainingCentres < 40 ? prev.trainingCentres + 3 : 40,
          }));
        }, 100),
        statePresence: setInterval(() => {
          setCounters((prev) => ({
            ...prev,
            statePresence:
              prev.statePresence < 10 ? prev.statePresence + 1 : 10,
          }));
        }, 200),
      };

      return () => {
        Object.values(intervals).forEach(clearInterval);
      };
    }
  }, [startCounting]);

  return (
    <>
      <div className="partners_bg py-5" ref={sectionRef}>
        <div className="container py-md-5">
          <h5 className="text-center fs_44 fw-bold ff_s text-white">
            Our Achivements
          </h5>
          <p className="text-center fs_24 fw-semibold ff_n text-white">
            In Collaboration with MESC and State Governments
          </p>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 col-6 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <img src={achivement_icon2} alt="achivement_icon1" />
                    <div className="">
                      <h4 className="fs_27 mb-0 ff_s fw-bold text-white">
                        {counters.ongoingTraining}+
                      </h4>
                      <p className="fs_16 ff_n text-white mb-0 mt-1">
                        Ongoing Training
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <img src={achivement_icon3} alt="achivement_icon1" />
                    <div className="">
                      <h4 className="fs_27 mb-0 ff_s fw-bold text-white">
                        {counters.studentsPlaced}+
                      </h4>
                      <p className="fs_16 ff_n text-white mb-0 mt-1">
                        Students Placed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <img src={achivement_icon4} alt="achivement_icon1" />
                    <div className="">
                      <h4 className="fs_27 mb-0 ff_s fw-bold text-white">
                        {counters.trainingCentres}+
                      </h4>
                      <p className="fs_16 ff_n text-white mb-0 mt-1">
                        Training Centres
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <img src={achivement_icon1} alt="achivement_icon1" />
                    <div className="">
                      <h4 className="fs_27 mb-0 ff_s fw-bold text-white">
                        {counters.statePresence}+
                      </h4>
                      <p className="fs_16 ff_n text-white mb-0 mt-1">
                        State Presence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillingHero;
