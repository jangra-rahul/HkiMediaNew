// import React, { useEffect } from "react";
// import Navbar from "../common/Navbar";
// import "./adv.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import adv_img3 from "../../assets/images/png/adv_img3.png";
// import adv_img1 from "../../assets/images/png/adv_img1.png";
// import adv_img2 from "../../assets/images/png/adv_img2.png";

// gsap.registerPlugin(ScrollTrigger);

// const AdvertisementHero = () => {
//   useEffect(() => {
//     const items = document.querySelectorAll(".timeline-item .timeline-content");

//     items.forEach((content) => {
//       gsap.fromTo(
//         content,
//         { scale: 1, opacity: 1 }, // Initial state
//         {
//           scale: 0.8,
//           opacity: 0.4,
//           duration: 3,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: content,
//             start: "top 30%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       <div className="bg-black py-5">
//         <h4 className=" fs_35 fw-bold ff_n text-white text-center pb-5 mb-0">
//           Advertisement
//         </h4>
//         <div className="Cretives bg-black pb-md-5 ">
//           <div className="container">
//             <div className="row align-items-center ">
//               <div data-aos="fade-up" className="col-md-6">
//                 <img className="w-100" src={adv_img1} alt="adv_img1" />
//               </div>
//               <div data-aos="fade-up" className="col-md-6 mt-4 mt-md-0">
//                 <h4 className=" fs_24 fw-bold ff_n text-white mb-0">
//                   Brand Advertisements
//                 </h4>
//                 <p className=" fs_16 mt-3 fw-normal ff_n  clr_darkgray">
//                   At HKI Media, we specialize in crafting advanced marketing
//                   campaigns and original creative ideas that bring brand visions
//                   to life. With the Media Matrix App, we facilitate seamless
//                   collaborations between brands, agencies, and top-tier creative
//                   talent, ensuring impactful storytelling and unparalleled
//                   outreach. Our focus on innovation, data-driven strategies, and
//                   regional insights ensures brands resonate deeply with their
//                   target audiences. From concept to execution, we create ads
//                   that don’t just sell but inspire.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="Strategy bg_theme py-5">
//           <div className="container">
//             <div className="row align-items-center ">
//               <div data-aos="fade-up" className="col-md-6 mt-4 mt-md-0">
//                 <h4 className=" fs_24 fw-bold ff_n text-white mb-0">
//                   Government Advertisements
//                 </h4>
//                 <p className=" fs_16 mt-3 fw-normal ff_n  text-white">
//                   Our deep experience working with government departments
//                   enables us to align creative strategies with their vision and
//                   objectives. HKI Media excels in producing campaigns that
//                   communicate complex initiatives with clarity and creativity.
//                   From digital outreach to multimedia storytelling, we ensure
//                   maximum reach and engagement. Our continuous exposure to
//                   government projects gives us a unique edge in creating
//                   campaigns that are socially impactful, widely appreciated, and
//                   result-oriented.
//                 </p>
//               </div>
//               <div data-aos="fade-up" className="col-md-6">
//                 <img className="w-100" src={adv_img3} alt="adv_img1" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Digital bg-black py-5">
//           <div className="container">
//             <div className="row align-items-center ">
//               <div data-aos="fade-up" className="col-md-6 mt-4 mt-md-0">
//                 <img className="w-100" src={adv_img2} alt="adv_img1" />
//               </div>
//               <div data-aos="fade-up" className="col-md-6">
//                 <h4 className=" fs_24 fw-bold ff_n text-white mb-0">
//                   Political Campaigns
//                 </h4>
//                 <p className=" fs_16 mt-3 fw-normal ff_n clr_darkgray">
//                   Understanding the pulse of the nation is at the heart of our
//                   success in political campaigns. With an extensive all-India
//                   presence, HKI Media designs powerful, regionally tailored
//                   campaigns that connect leaders with their electorate. Our
//                   expertise lies in blending ground-level insights with
//                   cutting-edge digital strategies to deliver results-driven
//                   messaging. Whether it’s rally visuals, digital ads, or
//                   grassroots outreach, we ensure campaigns are as impactful as
//                   they are memorable.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="timeline mb-0 mt-0 d-md-block d-none">
//           {/* Timeline Item 1 */}
//           <div className="timeline-item">
//             <div className="timeline-content">
//               <div className="d-flex align-items-center gap-3 flex-row-reverse">
//                 <div>
//                   <h4 className="fs_24 fw-bold ff_n text-white mb-0">
//                     Creatives
//                   </h4>
//                   <p className="fs_16 mt-3 fw-normal ff_n text-white">
//                     At HKI Media, we specialize in crafting advanced...
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Timeline Item 2 */}
//           <div className="timeline-item">
//             <div className="timeline-content">
//               <div className="d-flex align-items-center gap-3">
//                 <div>
//                   <h4 className="fs_24 fw-bold ff_n text-white mb-0">
//                     Digital
//                   </h4>
//                   <p className="fs_16 mt-3 fw-normal ff_n text-white">
//                     Our deep experience working with government departments...
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Timeline Item 3 */}
//           <div className="timeline-item mb-0">
//             <div className="timeline-content">
//               <div className="d-flex align-items-center gap-3 flex-row-reverse">
//                 <div>
//                   <h4 className="fs_24 fw-bold ff_n text-white mb-0">
//                     Strategy
//                   </h4>
//                   <p className="fs_16 mt-3 fw-normal ff_n text-white">
//                     Understanding the pulse of the nation is at the heart...
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Timeline Item 2 */}
//           <div className="timeline-item">
//             <div className="timeline-content">
//               <div className="d-flex align-items-center gap-3">
//                 <div>
//                   <h4 className="fs_24 fw-bold ff_n text-white mb-0">Media</h4>
//                   <p className="fs_16 mt-3 fw-normal ff_n text-white">
//                     Our deep experience working with government departments...
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Timeline Item 3 */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdvertisementHero;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./adv.css";
import adv_img3 from "../../assets/images/png/adv_img3.png";
import adv_img1 from "../../assets/images/png/adv_img1.png";
import adv_img2 from "../../assets/images/png/adv_img2.png";
import Navbar from "../common/Navbar";

const Timeline = () => {
  useEffect(() => {
    const timeline = document.querySelector(".timeline");
    const timelineDiv = document.querySelector(".timeline-div");
    const timelineItems = document.querySelectorAll(".timeline-item");

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      let activeItemIndex = -1;

      // Check which item is currently active based on the scroll position
      timelineItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;

        // Check if the item is in the viewport
        if (itemCenter >= 0 && itemCenter <= windowHeight) {
          if (activeItemIndex !== index) {
            gsap.to(item, {
              scale: 1.1,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
              overwrite: true,
            });
            activeItemIndex = index;
          }
        }
      });

      // Calculate scroll percentage
      const scrollHeight = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = scrollHeight
        ? (scrollHeight / documentHeight) * 100
        : 0;

      // Only calculate for the active item
      if (timeline && activeItemIndex >= 0) {
        const activeItem = timelineItems[activeItemIndex];
        const itemRect = activeItem.getBoundingClientRect();
        const itemHeight = itemRect.height;
        const itemOffsetTop = activeItem.offsetTop;

        // Calculate scroll progress relative to the active item
        const scrollRelativeToActive = Math.min(
          (scrollHeight - itemOffsetTop) / itemHeight,
          1
        );

        // Calculate the height of the timeline's line, using scroll progress relative to the active item
        const lineHeight =
          (activeItemIndex + scrollRelativeToActive) *
          (100 / timelineItems.length);

        gsap.to(timeline, {
          "--timeline-before-height": `${lineHeight}%`,
          duration: 0.5,
          ease: "power3.out",
        });

        // Set the height of timeline-div before the active item only (not including next item)
        const timelineDivHeight =
          (activeItemIndex + scrollRelativeToActive) *
          (100 / timelineItems.length);

        console.log("timelineDivHeight", timelineDivHeight);
        console.log("timelineItems", timelineItems.length);

        // Update the timeline-div height dynamically based on the active item only
        gsap.to(timelineDiv, {
          "--timeline-div-before-height": `${timelineDivHeight}%`,
          duration: 0.5,
          ease: "power3.out",
        });

        // Apply the gradient to the timeline line (for smooth scrolling)
        const nextItem = timelineItems[activeItemIndex + 1];

        if (nextItem) {
          const gradientStart =
            (activeItemIndex + scrollRelativeToActive) *
            (100 / timelineItems.length);
          const gradientEnd =
            (activeItemIndex + 1 + scrollRelativeToActive) *
            (100 / timelineItems.length);

          gsap.to(timeline, {
            "--timeline-gradient": `linear-gradient(180deg, #e50a14 ${gradientStart}%, #2196f3 ${gradientEnd}%, #ff9800 ${gradientEnd}%, #ccc)`,
            duration: 0.5,
            ease: "power3.out",
          });
        } else {
          // Final segment of the timeline line if it's the last item
          gsap.to(timeline, {
            "--timeline-gradient": `linear-gradient(180deg, #e50a14 100%, #2196f3 100%, #ff9800 100%, #ccc)`,
            duration: 0.5,
            ease: "power3.out",
          });
        }
      }

      // Animate other items to reduce scale and opacity when they are not active
      timelineItems.forEach((item, index) => {
        if (index !== activeItemIndex) {
          gsap.to(item, {
            scale: 1,
            opacity: 0.5,
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on page load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black overflow-hidden ">
      <div className="bg-black py-5">
        <div className="container pb-4 pt-md-3">
          {/* <h4 className="text-center fs_44 fw-bold ff_s mb-0 text-white ">
            Sub Heading
          </h4> */}
          <p className=" fs_20 text_justify ff_n fw-medium  clr_lightgray text-center">
            In a realm where imagination meets precision, we stand as architects
            of impact. Our essence flows from
            <strong style={{ color: "#ccc" }}>
              {" "}
              “We Breed Creative, We Bleed Creative,”{" "}
            </strong>{" "}
            breathing life into campaigns that resonate and reform. As a
            game-changing startup, we merge artistry with analytics, creating
            brand narratives that inspire, government outreach that transforms,
            and political campaigns that captivate. Powered by cutting-edge
            technology and fueled by innovation, we are sculpting the future of
            advertising—one bold, breakthrough idea at a time.
          </p>
        </div>
        {/* <div className="Cretives bg-black pb-md-5 ">
          <div className="container">
            <div className="row align-items-center ">
              <div data-aos="fade-up" className="col-md-6">
                <img className="w-100" src={adv_img1} alt="adv_img1" />
              </div>
              <div data-aos="fade-up" className="col-md-6 mt-4 mt-md-0">
                <h4 className=" fs_24 fw-bold ff_n text-white mb-0">
                  Brand Advertisements
                </h4>
                <p className=" fs_16 mt-3 fw-normal ff_n  clr_darkgray">
                  At HKI Media, we specialize in crafting advanced marketing
                  campaigns and original creative ideas that bring brand visions
                  to life. With the Media Matrix App, we facilitate seamless
                  collaborations between brands, agencies, and top-tier creative
                  talent, ensuring impactful storytelling and unparalleled
                  outreach. Our focus on innovation, data-driven strategies, and
                  regional insights ensures brands resonate deeply with their
                  target audiences. From concept to execution, we create ads
                  that don’t just sell but inspire.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Strategy bg_theme py-5">
          <div className="container">
            <div className="row align-items-center ">
              <div data-aos="fade-up" className="col-md-6 mt-4 mt-md-0">
                <h4 className=" fs_24 fw-bold ff_n text-white mb-0">
                  Government Advertisements
                </h4>
                <p className=" fs_16 mt-3 fw-normal ff_n  text-white">
                  Our deep experience working with government departments
                  enables us to align creative strategies with their vision and
                  objectives. HKI Media excels in producing campaigns that
                  communicate complex initiatives with clarity and creativity.
                  From digital outreach to multimedia storytelling, we ensure
                  maximum reach and engagement. Our continuous exposure to
                  government projects gives us a unique edge in creating
                  campaigns that are socially impactful, widely appreciated, and
                  result-oriented.
                </p>
              </div>
              <div data-aos="fade-up" className="col-md-6">
                <img className="w-100" src={adv_img3} alt="adv_img1" />
              </div>
            </div>
          </div>
        </div>
        <div className="Digital bg-black py-5">
          <div className="container">
            <div className="row align-items-center ">
              <div data-aos="fade-up" className="col-md-6 mt-4 mt-md-0">
                <img className="w-100" src={adv_img2} alt="adv_img1" />
              </div>
              <div data-aos="fade-up" className="col-md-6 mt-3 mt-md-0">
                <h4 className=" fs_24 fw-bold ff_n text-white mb-0">
                  Political Campaigns
                </h4>
                <p className=" fs_16 mt-3 fw-normal ff_n clr_darkgray">
                  Understanding the pulse of the nation is at the heart of our
                  success in political campaigns. With an extensive all-India
                  presence, HKI Media designs powerful, regionally tailored
                  campaigns that connect leaders with their electorate. Our
                  expertise lies in blending ground-level insights with
                  cutting-edge digital strategies to deliver results-driven
                  messaging. Whether it’s rally visuals, digital ads, or
                  grassroots outreach, we ensure campaigns are as impactful as
                  they are memorable.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container">
        <h4 className="text-center fs_54 fw-bold ff_s mb-0 custom_textColor ">
          Services
        </h4>
        <div className="pb-5" style={{ paddingTop: "30px" }}>
          <div className="timeline-div  position-relative">
            <div className="timeline mb-0 mt-0 ">
              {/* Timeline Items */}
              <div className="timeline-item">
                <div className="timeline-content text-start">
                  <div className="d-flex align-items-center gap-3 flex-row-reverse">
                    <div>
                      <h4 className="fs_35 fw-bold ff_n text-white mb-0">
                        Strategy
                      </h4>
                      <p className="fs_20 mt-3 fw-normal ff_n text-white">
                        Crafting tailored roadmaps for enduring brand success
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <h4 className="fs_35 fw-bold ff_n text-white mb-0">
                        Creative
                      </h4>
                      <p className="fs_20 mt-3 fw-normal ff_n text-white">
                        Designing visuals and stories that connect and convert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item mb-0">
                <div className="timeline-content">
                  <div className="d-flex text-start align-items-center gap-3 flex-row-reverse">
                    <div>
                      <h4 className=" fs_35 fw-bold ff_n text-white mb-0">
                        Digital
                      </h4>
                      <p className="fs_20 mt-3 fw-normal ff_n text-white">
                        Leveraging tech-savvy solutions for dynamic audience
                        engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <h4 className="fs_35 fw-bold ff_n text-white mb-0">
                        Media
                      </h4>
                      <p className="fs_20 mt-3 fw-normal ff_n text-white">
                        Amplifying messages across channels with precision
                        targeting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="d-flex text-start align-items-center gap-3">
                    <div>
                      <h4 className="fs_35 fw-bold ff_n text-white mb-0">
                        Events
                      </h4>
                      <p className="fs_20 mt-3 fw-normal ff_n text-white">
                        Curating experiences that leave a lasting legacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
