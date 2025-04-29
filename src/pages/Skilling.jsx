import React from "react";
import SkillingHero from "../components/skilling/SkillingHero";
import SkillingAchievements from "../components/skilling/SkillingAchievements";
import OurCourses from "../components/skilling/OurCourses";
import OurPresence from "../components/skilling/OurPresence";

const Skilling = () => {
  return (
    <div>
      <SkillingHero />
      <SkillingAchievements />
      <OurPresence />
      <OurCourses />
    </div>
  );
};

export default Skilling;
