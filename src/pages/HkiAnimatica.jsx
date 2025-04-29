import React from "react";
import HkiAnimaticaHero from "../components/hkianimatica/HkiAnimaticaHero";
import AnimaticaFuture from "../components/hkianimatica/AnimaticaFuture";
import AnimaticaWhyInvestHero from "../components/hkianimatica/AnimaticaWhyInvestHero";
import DynamicContent from "../components/hkianimatica/DynamicContent";
import AnimaticaAdvantage from "../components/hkianimatica/AnimaticaAdvantage";
import OurVision from "../components/hkianimatica/OurVision";
import FaqsPage from "../components/entertainmentpage/FaqsPage";
import HkianimaticaFaqs from "../components/hkianimatica/HkianimaticaFaqs";
import SkillingHero from "../components/skilling/SkillingHero";
import SkillingAchievements from "../components/skilling/SkillingAchievements";
import OurPresence from "../components/skilling/OurPresence";
import OurCourses from "../components/skilling/OurCourses";

const HkiAnimatica = () => {
  return (
    <div>
      <HkiAnimaticaHero />
      <AnimaticaFuture />
      <SkillingHero />
      <OurVision />
      <SkillingAchievements />
      <OurPresence />
      <AnimaticaWhyInvestHero />
      <DynamicContent />
      <AnimaticaAdvantage />
      <OurCourses />
      <HkianimaticaFaqs />
    </div>
  );
};

export default HkiAnimatica;
