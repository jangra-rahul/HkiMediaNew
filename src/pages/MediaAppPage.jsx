import React from "react";
import MediaAppHero from "../components/mediamatrixapp.jsx/MediaAppHero";
import FutureofMedia from "../components/mediamatrixapp.jsx/FutureofMedia";
import WhyMediaMatrix from "../components/mediamatrixapp.jsx/WhyMediaMatrix";
import Faqs from "../components/mediamatrixapp.jsx/Faqs";
import UserReviews from "../components/mediamatrixapp.jsx/UserReviews";

const MediaAppPage = () => {
  return (
    <div>
      <MediaAppHero />
      <WhyMediaMatrix />
      <FutureofMedia />
      <UserReviews />
      <Faqs />
    </div>
  );
};

export default MediaAppPage;
