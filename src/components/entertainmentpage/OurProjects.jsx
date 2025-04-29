// import React, { useState } from "react";
// import "./entertainment.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Achievements_img from "../../assets/images/png/OurProjects_img.png";
// import Achievements_img1 from "../../assets/images/png/OurProjects_img1.png";
// import Achievements_img2 from "../../assets/images/png/OurProjects_img2.png";
// // import Achievements_img3 from "../../assets/images/png/OurProjects_img3.JPG";
// const OurProjects = () => {
//   const [activeTab, setActiveTab] = useState("video");
//   var settings = {
//     dots: true,
//     infinite: true,
//     arrows: false,

//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 1200, // Screens less than 1200px
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768, // Screens less than 768px
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="Advantage_bg py-5">
//       <div className="container">
//         <h3 className=" fs_35 fw-bold ff_s text-center text-white mb-0 ">
//           Our Projects
//         </h3>
//         {/* <p className="mt-2 fs_24 fw-semibold ff_n text-center text-white">
//           Where music meets the soul.
//         </p> */}
//         {/* <div className="d-flex mt-4 justify-content-center gap-3">
//           <button
//             className={`video_btn px-5 fw-semibold py-2 ${
//               activeTab === "video" ? "active-tab" : ""
//             }`}
//             onClick={() => setActiveTab("video")}
//           >
//             Latest
//           </button>

//           <button
//             className={`article_btn px-5 py-2 fs_16 fw-semibold ff_n text-white rounded-1 ${
//               activeTab === "article" ? "active-tab" : ""
//             }`}
//             onClick={() => setActiveTab("article")}
//           >
//             Upcoming
//           </button>
//         </div> */}
//         <div className="entertainment_slider pe-4 mt-4 ps-md-5">
//           <Slider className="row" {...settings}>
//             <div>
//               <img
//                 className="w-100 p-3"
//                 src={Achievements_img}
//                 alt="Achievements_img"
//               />
//             </div>
//             <div>
//               <img
//                 className="w-100 p-3"
//                 src={Achievements_img1}
//                 alt="Achievements_img"
//               />
//             </div>
//             <div>
//               <img
//                 className="w-100 p-3"
//                 src={Achievements_img2}
//                 alt="Achievements_img"
//               />
//             </div>
//           </Slider>
//         </div>{" "}
//       </div>
//     </div>
//   );
// };

// export default OurProjects;
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination"; // Import pagination styles
import "./entertainment.css"; // Add your custom styles
import { Grid, Pagination, Autoplay } from "swiper/modules"; // Import Grid and Pagination modules
import Achievements_img from "../../assets/images/png/OurProjects_img.png";
import Achievements_img1 from "../../assets/images/png/OurProjects_img1.png";
import Achievements_img2 from "../../assets/images/png/OurProjects_img2.png";
import Achievements_img3 from "../../assets/images/png/OurProjects_img3.JPG";
import Achievements_img4 from "../../assets/images/png/OurProjects_img4.png";
import Achievements_img5 from "../../assets/images/png/OurProjects_img5.png";
import Achievements_img6 from "../../assets/images/png/OurProjects_img6.png";
import Achievements_img7 from "../../assets/images/png/OurProjects_img7.png";
import Achievements_img8 from "../../assets/images/png/OurProjects_img8.png";
import Achievements_img9 from "../../assets/images/png/OurProjects_img9.jpg";
import Achievements_img10 from "../../assets/images/png/OurProjects_img10.png";
import Achievements_img11 from "../../assets/images/png/OurProjects_img11.png";
import Achievements_img12 from "../../assets/images/png/OurProjects_img12.png";
import Achievements_img13 from "../../assets/images/png/OurProjects_img13.png";
import Achievements_img14 from "../../assets/images/png/OurProjects_img14.png";
import Achievements_img15 from "../../assets/images/png/OurProjects_img15.png";
import Achievements_img16 from "../../assets/images/png/OurProjects_img16.png";
import Achievements_img17 from "../../assets/images/png/OurProjects_img17.png";
import Achievements_img18 from "../../assets/images/png/OurProjects_img18.png";
import Achievements_img19 from "../../assets/images/png/OurProjects_img19.png";
import Achievements_img20 from "../../assets/images/png/OurProjects_img20.png";
import Achievements_img21 from "../../assets/images/png/OurProjects_img21.png";
import Achievements_img22 from "../../assets/images/png/OurProjects_img22.png";
import Achievements_img23 from "../../assets/images/png/OurProjects_img23.png";
import Achievements_img24 from "../../assets/images/png/OurProjects_img24.png";
import slider_left_img from "../../assets/images/svg/slider_left_img.svg";
import slider_right_img from "../../assets/images/svg/slider_right_img.svg";

const OurProjects = () => {
  const sliderRef = useRef(null);
  const [swiperReady, setSwiperReady] = React.useState(false);
  const handlePrev = () => {
    if (sliderRef.current?.initialized) {
      sliderRef.current.slidePrev();
    } else {
      console.error("Swiper instance not ready for slidePrev.");
    }
  };

  const handleNext = () => {
    if (sliderRef.current?.initialized) {
      sliderRef.current.slideNext();
    } else {
      console.error("Swiper instance not ready for slideNext.");
    }
  };

  return (
    <div className=" py-5" style={{ backgroundColor: "#C00000" }}>
      <div className="container">
        <h3 className="fs_35 fw-bold ff_s text-center text-white mb-0">
          Our Projects
        </h3>
        <div className="projects_slider mt-4">
          <Swiper
            onSwiper={(swiper) => {
              sliderRef.current = swiper;
              setSwiperReady(true); // Enable buttons when ready
            }}
            modules={[Grid, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              1200: {
                slidesPerView: 3,
                grid: { rows: 2 },
              },
              768: {
                slidesPerView: 2,
                grid: { rows: 2 },
              },
              576: {
                slidesPerView: 1,
                grid: { rows: 1 },
              },
            }}
            className="grid-swiper"
          >
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img1}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img2}
                alt="Achievements_img"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img3}
                alt="Achievements_img"
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img4}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img5}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img6}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img7}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img8}
                alt="Achievements_img"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img9}
                alt="Achievements_img"
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img10}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img11}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img12}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img13}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img14}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img15}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img16}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img17}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img18}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img19}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img20}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img21}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img22}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img23}
                alt="Achievements_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100 rounded"
                src={Achievements_img24}
                alt="Achievements_img"
              />
            </SwiperSlide>
          </Swiper>
          <div className="d-flex pe-2 position-relative z-3 justify-content-end mt-3 gap-2">
            <img
              className="cursor-pointer"
              src={slider_left_img}
              alt="slider_left_img"
              onClick={handlePrev}
              disabled={!swiperReady}
            />
            <img
              className="cursor-pointer"
              src={slider_right_img}
              alt="slider_right_img"
              onClick={handleNext}
              disabled={!swiperReady} // Slide to next
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
