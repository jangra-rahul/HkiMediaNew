// import React from "react";
// import welcome_img1 from "../../assets/images/png/welcome_img1.png";
// import welcome_img2 from "../../assets/images/png/welcome_img2.png";
// import welcome_img3 from "../../assets/images/png/welcome_img3.png";
// import welcome_img4 from "../../assets/images/png/welcome_img4.png";
// import welcome_img5 from "../../assets/images/png/welcome_img5.png";
// import welcome_img6 from "../../assets/images/png/welcome_img6.png";

// const WelcomeToHkiMedia = () => {
//   return (
//     <div className="bg-black py-5 py-3">
//       <div className="container py-md-4 text-center">
//         <h2 data-aos="fade-up" className="ff_s text-white fs_35 mb-0 fw-bold">
//           Welcome to <span className=" clr_theme"> HKI Media</span>
//         </h2>
//         <h5
//           data-aos="fade-up"
//           className="ff_n fw-semibold mt-3 fs_24 mb-0 text-white"
//         >
//           Welcome to HKI Media: Redefining Creativity, Technology and the Media
//           Industry
//         </h5>
//         <p
//           data-aos="fade-up"
//           className="ff_n fs_16 fw-normal clr_darkgray mt-mt-4 mt-3 mx-auto"
//           style={{ maxWidth: "714px" }}
//         >
//           Sparking a revolution in the media industry. Were a game-changing
//           startup with our sights set high, transforming the ndian media
//           landscape with bold innovation and visionary thinking. With our finger
//           on the pulse of the industry, were crafting a dynamic business
//           blueprint thats got everyone buzzing. So, fasten your seatbelts—HKI
//           Media is here to shake up the industry, ignite imaginations, and
//           create a legacy of unforgettable stories, one creative masterpiece at
//           a time.
//         </p>
//         <div className="row">
//           <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
//             <img
//               data-aos="zoom-in"
//               className="w-100"
//               src={welcome_img1}
//               alt="welcome_img1"
//             />
//           </div>
//           <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
//             <img
//               data-aos="zoom-in"
//               className="w-100"
//               src={welcome_img2}
//               alt="welcome_img2"
//             />
//           </div>
//           <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
//             <img
//               data-aos="zoom-in"
//               className="w-100"
//               src={welcome_img3}
//               alt="welcome_img3"
//             />
//           </div>

//           <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
//             <img
//               data-aos="zoom-in"
//               className="w-100"
//               src={welcome_img4}
//               alt="welcome_img4"
//             />
//           </div>
//           <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
//             <img
//               data-aos="zoom-in"
//               className="w-100"
//               src={welcome_img5}
//               alt="welcome_img5"
//             />
//           </div>
//           <div className="col-lg-2 col-md-3 col-md-4 col-6 px-3 mt-4 ">
//             <img
//               data-aos="zoom-in"
//               className="w-100"
//               src={welcome_img6}
//               alt="welcome_img6"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomeToHkiMedia;

import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import welcome_img1 from "../../assets/images/png/welcome_img1.png";
// import welcome_img2 from "../../assets/images/png/welcome_img2.png";
// import welcome_img3 from "../../assets/images/png/welcome_img3.png";
// import welcome_img4 from "../../assets/images/png/welcome_img4.png";
// import welcome_img5 from "../../assets/images/png/welcome_img5.png";
// import welcome_img6 from "../../assets/images/png/welcome_img6.png";
import "./home.css";
import homeSlider1 from "../../assets/images/png/homeSlider1.png";
import homeSlider2 from "../../assets/images/png/homeSlider2.png";
import homeSlider3 from "../../assets/images/png/homeSlider3.png";
import red_arrow from "../../assets/images/svg/red_arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useLocation } from "react-router-dom";

const WelcomeToHkiMedia = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   centerMode: true,
  //   centerPadding: "0px",
  //   arrows: false,
  //   slidesToShow: 5,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1200, // For screens less than 1200px
  //       settings: {
  //         slidesToShow: 4,
  //         centerMode: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768, // For screens less than 768px
  //       settings: {
  //         slidesToShow: 3,
  //         centerMode: true,
  //       },
  //     },
  //     {
  //       breakpoint: 576, // For screens less than 768px
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: true,
  //       },
  //     },
  //   ],
  // };

  return (
    <div id="about" className="bg-black py-5 py-3">
      <div className="container py-md-4 ">
        <div className="row align-items-center text-center justify-content-between">
          <div className="col-md-12 px-3 text-center ">
            <h2
              data-aos="fade-up"
              className="ff_s text-white  fs_35 mb-0 fw-bold"
            >
              Welcome to <span className="clr_theme">HKI Media</span>
            </h2>
            <h5
              data-aos="fade-up"
              className="ff_n fw-semibold  mt-3 fs_24 mb-0 text-white"
            >
              Welcome to HKI Media: Redefining Creativity, Technology and the
              Media Industry
            </h5>
            <p
              data-aos="fade-up"
              className="ff_n fs_16 fw-normal text_justify clr-darkgray mt-mt-4 mt-3"
            >
              <strong className="" style={{ color: "#ccc" }}>
                HKI Media
              </strong>{" "}
              is a visionary startup revolutionizing India’s media industry with
              a bold, dynamic approach. Committed to redefining creativity and
              technology, HKI Media operates through five strategic verticals:{" "}
              <strong className="" style={{ color: "#ccc" }}>
                {" "}
                Skilling, Advertisement, AVGC-XR, Entertainment{" "}
              </strong>
              , and the groundbreaking{" "}
              <strong className="" style={{ color: "#ccc" }}>
                {" "}
                Media Matrix App{" "}
              </strong>
              . These interconnected pillars enable us to lead in media
              education, content production, and seamless industry
              collaboration, making us a one-stop destination for all things
              media.
            </p>
            <p
              data-aos="fade-up"
              className="ff_n fs_16 text_justify fw-normal clr-darkgray mt-mt-4 mt-3"
            >
              Our{" "}
              <strong className="" style={{ color: "#ccc" }}>
                {" "}
                Skilling{" "}
              </strong>{" "}
              vertical offers transformative media training academies, focusing
              on AVGC-XR, filmmaking, and creative technologies, ensuring
              students earn while they learn and step into assured job
              opportunities. Through{" "}
              <strong className="" style={{ color: "#ccc" }}>
                {" "}
                Advertisement{" "}
              </strong>
              , we craft compelling campaigns for government and corporate
              clients, blending creativity with precision to deliver impactful
              narratives. The{" "}
              <strong className="" style={{ color: "#ccc" }}>
                {" "}
                AVGC-XR vertical{" "}
              </strong>
              pioneers immersive storytelling by producing and licensing
              cutting-edge content while building studios and academies to
              nurture innovation. Our{" "}
              <strong className="" style={{ color: "#ccc" }}>
                {" "}
                Entertainment{" "}
              </strong>{" "}
              vertical brings feature films, music videos, and original
              animation IPs to life, partnering with leading celebrities and
              industry players to create captivating content. The{" "}
              <strong className="" style={{ color: "#ccc" }}>
                {" "}
                Media Matrix App{" "}
              </strong>{" "}
              connects artists, media agencies, and corporates, aggregating the
              media production value chain for unparalleled efficiency.
            </p>
            <p
              data-aos="fade-up"
              className="ff_n fs_16 text_justify fw-normal clr-darkgray mt-mt-4 mt-3"
            >
              With an inclusive business model targeting untapped regional
              markets, HKI Media promises high growth potential. Our USP lies in
              combining cutting-edge technology, regional engagement, and
              industry-academia collaboration to deliver quality, innovation,
              and scalability. At HKI Media, we breed creativity and bleed
              innovation, crafting unforgettable stories and reshaping the
              future of media. <strong>Join us in building a legacy</strong>.
            </p>
          </div>
          {/* <div className="col-lg-4 col-md-5 mt-4 mt-md-0 col-sm-7 col-10  position-relative">
            <img
              className=" position-absolute "
              style={{ top: "190px", left: "-140px" }}
              src={red_arrow}
              alt="red_arrow"
            />
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="mySwiper ps-5"
            >
              <SwiperSlide>
                <img className="w-100" src={homeSlider1} alt="homeSlider1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100" src={homeSlider2} alt="homeSlider1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100" src={homeSlider3} alt="homeSlider1" />
              </SwiperSlide>
            </Swiper>
          </div> */}
        </div>
        {/* <Slider {...settings}>
          <div className="p-3 pt-5">
            <img
              data-aos="zoom-in"
              className="w-100 border border-2 border-white rounded-3 "
              src={welcome_img1}
              alt="welcome_img1"
            />
          </div>
          <div className="p-3 pt-5">
            <img
              data-aos="zoom-in"
              className="w-100 border border-2 border-white rounded-3 "
              src={welcome_img2}
              alt="welcome_img2"
            />
          </div>
          <div className="p-3 pt-5">
            <img
              data-aos="zoom-in"
              className="w-100 border border-2 border-white rounded-3 "
              src={welcome_img3}
              alt="welcome_img3"
            />
          </div>
          <div className="p-3 pt-5">
            <img
              data-aos="zoom-in"
              className="w-100 border border-2 border-white rounded-3 "
              src={welcome_img4}
              alt="welcome_img4"
            />
          </div>
          <div className="p-3 pt-5">
            <img
              data-aos="zoom-in"
              className="w-100 border border-2 border-white rounded-3 "
              src={welcome_img5}
              alt="welcome_img5"
            />
          </div>
          <div className="p-3 pt-5">
            <img
              data-aos="zoom-in"
              className="w-100 border border-2 border-white rounded-3 "
              src={welcome_img6}
              alt="welcome_img5"
            />
          </div>
        </Slider> */}
      </div>
    </div>
  );
};

export default WelcomeToHkiMedia;
