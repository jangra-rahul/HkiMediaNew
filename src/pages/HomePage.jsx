import React, { useEffect } from "react";
import HomePageHero from "../components/homepage/HomePageHero";
import WelcomeToHkiMedia from "../components/homepage/WelcomeToHkiMedia";
import MeetTheTeam from "../components/homepage/MeetTheTeam";
import Partners from "../components/homepage/Partners";
import Affiliations from "../components/homepage/Affiliations";
import MediaNews from "../components/homepage/MediaNews";
import IndustryLeaders from "../components/homepage/IndustryLeaders";

const HomePage = () => {
  return (
    <div>
      <HomePageHero />
      <WelcomeToHkiMedia />

      <Partners />
      <Affiliations />
      <IndustryLeaders />
      <MeetTheTeam />
      <MediaNews />
    </div>
  );
};

export default HomePage;
