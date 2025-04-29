import React from "react";
import AdvertisementHero from "../components/advertisementPage/AdvertisementHero";
import OurWorks from "../components/advertisementPage/OurWorks";
import AdvertisementHeader from "../components/advertisementPage/AdvertisementHeader";

const AdvertisementPage = () => {
  return (
    <>
      <AdvertisementHeader />
      <AdvertisementHero />
      <OurWorks />
    </>
  );
};

export default AdvertisementPage;
