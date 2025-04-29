import React from "react";
import EntertainmentHero from "../components/entertainmentpage/EntertainmentHero";
import GalleryImage from "../components/entertainmentpage/GalleryImage";
import FaqsPage from "../components/entertainmentpage/FaqsPage";
import OurProjects from "../components/entertainmentpage/OurProjects";
import Navbar from "../components/common/Navbar";

const EntertainmentPage = () => {
  return (
    <div>
      <EntertainmentHero />
      <OurProjects />
      <GalleryImage />
      {/* <FaqsPage /> */}
    </div>
  );
};

export default EntertainmentPage;
