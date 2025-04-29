// import React, { useState } from "react";
// import map_image from "../../assets/images/png/map_img.png";
// import map_loction_icon from "../../assets/images/svg/map_loction_icon.svg";

// const OurPresence = () => {
//   const [hoveredState, setHoveredState] = useState("Haryana"); // Default Haryana

//   const locations = [
//     {
//       className: "J&K",
//       name: "J&K",
//       top: "10%",
//       left: "22%",
//       cities: [],
//     },
//     {
//       className: "Uttarakhand",
//       name: "Uttarakhand",
//       top: "22%",
//       left: "35%",
//       cities: ["Haridwar"],
//     },
//     {
//       className: "UP",
//       name: "UP",
//       top: "34%",
//       left: "40%",
//       cities: [
//         "Lucknow",
//         "Noida",
//         "Moradabad",
//         "Ghaziabad",
//         "Pilibhit",
//         "Varanasi",
//       ],
//     },
//     {
//       className: "MP",
//       name: "MP",
//       top: "48%",
//       left: "33%",
//       cities: ["Bhopal"],
//     },
//     {
//       className: "Bihar",
//       name: "Bihar",
//       top: "39%",
//       left: "57%",
//       cities: ["Patna"],
//     },
//     {
//       className: "Haryana",
//       name: "Haryana",
//       top: "27%",
//       left: "27%",
//       cities: ["Gurugram", "Sirsa", "Chandigarh", "Mohali"],
//     },
//     {
//       className: "Punjab",
//       name: "Punjab",
//       top: "21%",
//       left: "24%",
//       cities: ["Ludhiana"],
//     },
//     {
//       className: "Rajasthan",
//       name: "Rajasthan",
//       top: "36%",
//       left: "20%",
//       cities: ["Jaipur", "Ajmer", "Alwar"],
//     },
//     {
//       className: "Gujarat",
//       name: "Gujarat",
//       top: "48%",
//       left: "12%",
//       cities: ["Ahmedabad"],
//     },
//     {
//       className: "Maharashtra",
//       name: "Maharashtra",
//       top: "60%",
//       left: "25%",
//       cities: ["Mumbai", "Pune"],
//     },
//   ];

//   return (
//     <div className="py-5 bg-black">
//       <div className="container">
//         <div className="row justify-content-between">
//           <div className="col-lg-6 pe-md-4 position-relative">
//             <img className="w-100" src={map_image} alt="Map" />
//             {locations.map((location, index) => (
//               <div
//                 key={index}
//                 style={{
//                   position: "absolute",
//                   top: location.top,
//                   left: location.left,
//                 }}
//                 onMouseEnter={() => setHoveredState(location.name)}
//                 onMouseLeave={() => setHoveredState("Haryana")} // Reset to Haryana
//               >
//                 <img
//                   className="state-icon cursor-pointer"
//                   src={map_loction_icon}
//                   alt={location.name}
//                 />
//                 <div
//                   className={`state-info-box fs_14 fw-bold ff_n ${
//                     hoveredState === location.name ||
//                     location.name === "Haryana"
//                       ? "visible visible-opacity"
//                       : ""
//                   }`}
//                 >
//                   {location.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="col-lg-6">
//             <h4 className="fs_35 text-center fw-bold ff_s text-white mb-0">
//               Our <span className="clr_theme">Presence</span>
//             </h4>
//             <p className="text-white mt-2 text-center fs_18 ff_n">
//               HKI Media's extensive presence across India connects us to both
//               metropolitan and regional media hubs.
//             </p>
//             <div className="row mt-4">
//               <div className="col-4">
//                 <ul className="ps-4">
//                   {locations.map((location, index) => (
//                     <li
//                       key={index}
//                       className="mt-3 list_type"
//                       style={{
//                         color: hoveredState === location.name ? "red" : "white",
//                       }}
//                     >
//                       <a
//                         style={{
//                           color:
//                             hoveredState === location.name ? "red" : "white",
//                         }}
//                         className="fs_16 fw-bold ff_n text-decoration-none"
//                         href="#"
//                       >
//                         {location.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="col-8">
//                 <div
//                   className="p-1 rounded-3 h-100"
//                   style={{ backgroundColor: "#171717" }}
//                 >
//                   <div className="bg_theme p-3 rounded-3">
//                     <p className="fs_16 mb-0 ff_n fw-bold text-white">
//                       With operations in{" "}
//                       <span style={{ color: "#FFE607" }}>
//                         {hoveredState &&
//                           locations.find(
//                             (location) => location.name === hoveredState
//                           )?.cities.length}{" "}
//                         {hoveredState ? `Cities in ${hoveredState}` : ""}
//                       </span>
//                       , we create content that resonates across diverse Indian
//                       markets.
//                     </p>
//                   </div>
//                   <ul className="mt-2 ps-4 px-2">
//                     {hoveredState &&
//                       locations
//                         .find((loc) => loc.name === hoveredState)
//                         ?.cities.map((city, index) => (
//                           <li
//                             key={index}
//                             className="fs_16 mb-1 ff_n fw-bold list_type clr_lightgray"
//                           >
//                             {city}
//                           </li>
//                         ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurPresence;

import React, { useState } from "react";
import map_image from "../../assets/images/png/map_img.png";
import map_loction_icon from "../../assets/images/svg/map_loction_icon.svg";

const OurPresence = () => {
  const [hoveredState, setHoveredState] = useState(null); // Default Haryana
  // const [selectedState, setSelectedState] = useState(null); // Track selected state

  const locations = [
    { className: "J&K", name: "J&K", top: "10%", left: "22%", cities: [] },
    {
      className: "Uttarakhand",
      name: "Uttarakhand",
      top: "22%",
      left: "35%",
      cities: ["Haridwar"],
    },
    {
      className: "UP",
      name: "UP",
      top: "34%",
      left: "40%",
      cities: [
        "Lucknow",
        "Noida",
        "Moradabad",
        "Ghaziabad",
        "Pilibhit",
        "Varanasi",
      ],
    },
    {
      className: "MP",
      name: "MP",
      top: "48%",
      left: "33%",
      cities: ["Bhopal"],
    },
    {
      className: "Bihar",
      name: "Bihar",
      top: "39%",
      left: "57%",
      cities: ["Patna"],
    },
    {
      className: "Haryana",
      name: "Haryana",
      top: "27%",
      left: "27%",
      cities: ["Gurugram", "Sirsa", "Chandigarh", "Mohali"],
    },
    {
      className: "Punjab",
      name: "Punjab",
      top: "21%",
      left: "24%",
      cities: ["Ludhiana"],
    },
    {
      className: "Rajasthan",
      name: "Rajasthan",
      top: "36%",
      left: "20%",
      cities: ["Jaipur", "Ajmer", "Alwar"],
    },
    {
      className: "Gujarat",
      name: "Gujarat",
      top: "48%",
      left: "12%",
      cities: ["Ahmedabad"],
    },
    {
      className: "Maharashtra",
      name: "Maharashtra",
      top: "60%",
      left: "25%",
      cities: ["Mumbai", "Pune"],
    },
  ];

  const activeState = hoveredState;

  return (
    <div className="py-5 bg-black">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 pe-md-4 position-relative">
            <img className="w-100" src={map_image} alt="Map" />
            {locations.map((location, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: location.top,
                  left: location.left,
                }}
                onMouseEnter={() => setHoveredState(location.name)}
                onMouseLeave={() => setHoveredState(null)}
                // onClick={() => setSelectedState(location.name)} // Manually select a state
              >
                <img
                  className="state-icon cursor-pointer"
                  src={map_loction_icon}
                  alt={location.name}
                />
                {/* <div
                  className={`state-info-box fs_14 fw-bold ff_n ${
                    activeState === location.name
                      ? "visible visible-opacity"
                      : ""
                  }`}
                >
                  <p className="fs_16 mb-0 bg_theme ff_n fw-bold text-white p-1">
                    <span>{activeState ? ` ${activeState}` : ""}</span>
                  </p>
                  <ul className="mt-2 ps-4 text-start  px-2">
                    {activeState &&
                      locations
                        .find((loc) => loc.name === activeState)
                        ?.cities.map((city, index) => (
                          <li
                            key={index}
                            className="fs_16 mb-1 ff_n fw-bold list_type text-black"
                          >
                            {city}
                          </li>
                        ))}
                  </ul>
                </div> */}
                <div
                  className={`state-info-box fs_14 fw-bold ff_n ${
                    activeState === location.name
                      ? "visible visible-opacity"
                      : ""
                  }`}
                >
                  <p className="fs_16 mb-0 bg_theme ff_n fw-bold text-white p-1">
                    <span>{activeState ? ` ${activeState}` : ""}</span>
                  </p>
                  <ul className="mt-2 ps-4 text-start px-2">
                    {activeState &&
                      locations
                        .find((loc) => loc.name === activeState)
                        ?.cities.map((city, index) => (
                          <li
                            key={index}
                            className="fs_16 mb-1 ff_n fw-bold list_type text-black"
                          >
                            {city}
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <h4 className="fs_35 text-center fw-bold ff_s text-white mb-0">
              Our <span className="clr_theme">Presence</span>
            </h4>
            <p className="text-white mt-2 text-center fs_18 ff_n">
              HKI Media's extensive presence across India connects us to both
              metropolitan and regional media hubs.
            </p>
            <div
              className="row mt-4 justify-content-center
            "
            >
              <div className="col-12 d-flex justify-content-center">
                <ul className="ps-4  ">
                  {locations.map((location, index) => (
                    <li
                      onClick={() => setHoveredState(location.name)}
                      key={index}
                      className="mt-3  list_type cursor-pointer"
                      style={{
                        color: activeState === location.name ? "red" : "white",
                      }}
                    >
                      {location.name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="col-8">
                <div
                  className="p-1 rounded-3 h-100"
                  style={{ backgroundColor: "#171717" }}
                >
                  <div className="bg_theme p-3 rounded-3">
                    <p className="fs_16 mb-0 ff_n fw-bold text-white">
                      With operations in{" "}
                      <span style={{ color: "#FFE607" }}>
                        {activeState &&
                          locations.find(
                            (location) => location.name === activeState
                          )?.cities.length}{" "}
                        {activeState ? `Cities in ${activeState}` : ""}
                      </span>
                      , we create content that resonates across diverse Indian
                      markets.
                    </p>
                  </div>
                  <ul className="mt-2 ps-4  px-2">
                    {activeState &&
                      locations
                        .find((loc) => loc.name === activeState)
                        ?.cities.map((city, index) => (
                          <li
                            key={index}
                            className="fs_16 mb-1 ff_n fw-bold list_type clr_lightgray"
                          >
                            {city}
                          </li>
                        ))}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPresence;
