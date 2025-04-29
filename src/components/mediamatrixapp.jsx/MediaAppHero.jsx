import React from "react";
import Navbar from "../common/Navbar";
import image from "../../assets/images/png/media_hero_img.png";
import app_icon from "../../assets/images/png/app_stor.png";
import google_icon from "../../assets/images/png/google_play.png";

const MediaAppHero = () => {
  return (
    <div>
      <Navbar />
      <div className="py-5 bg-black">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h4 className="fs_44 fw-bold ff_s text-white">
                Welcome to <span className="clr_theme">Media Matrix App</span>
              </h4>
              <p className=" fs_24 fw-semibold ff_n text-white mt-2">
                The revolutionary platform transforming the media and
                entertainment industry.
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.hki&pcampaignid=web_share"
                  target="_blanck"
                >
                  <img
                    width={97}
                    height={32}
                    src={google_icon}
                    alt="google_icon"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/hki-media/id6472632124"
                  target="_blanck"
                >
                  <img width={97} height={32} src={app_icon} alt="app_icon" />
                </a>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <img className="w-100" src={image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaAppHero;
