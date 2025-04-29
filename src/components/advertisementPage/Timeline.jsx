import React from "react";

const Timeline = () => {
  return (
    <div>
      <div className="pb-md-5 pt-5 pb-0 bg-black">
        <div className="container adv">
          <h3 className=" fs_35 ff_s fw-bold text-white  text-center">
            Advertisements
          </h3>
          <div className="d-sm-flex mt-4 justify-content-center gap-3">
            {/* Video News Button */}
            {/* <button
              className={`video_btn custom_w1 border-0 mt-3 mt-md-0 px-5 fw-semibold py-2 ${
                activeTab === "video" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("video")}
            >
              Creatives
            </button> */}

            {/* Article Button */}
            {/* <button
              className={`article_btn border-0 custom_w1 mt-3 mt-md-0 px-5 py-2 fs_16 fw-semibold ff_n text-white rounded-1 ${
                activeTab === "Digital" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("Digital")}
            >
              Digital
            </button>
            <button
              className={`article_btn border-0 custom_w1 mt-3 mt-md-0 px-5 py-2 fs_16 fw-semibold ff_n text-white rounded-1 ${
                activeTab === "Strategy" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("Strategy")}
            >
              Strategy
            </button>
            <button
              className={`article_btn border-0 px-5 custom_w1 mt-3 mt-md-0 py-2 fs_16 fw-semibold ff_n text-white rounded-1 ${
                activeTab === "Media" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("Media")}
            >
              Media
            </button> */}
          </div>
        </div>
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
                target audiences. From concept to execution, we create ads that
                don’t just sell but inspire.
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
                Our deep experience working with government departments enables
                us to align creative strategies with their vision and
                objectives. HKI Media excels in producing campaigns that
                communicate complex initiatives with clarity and creativity.
                From digital outreach to multimedia storytelling, we ensure
                maximum reach and engagement. Our continuous exposure to
                government projects gives us a unique edge in creating campaigns
                that are socially impactful, widely appreciated, and
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
            <div data-aos="fade-up" className="col-md-6">
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

      {/* timeline */}

      {/* <div className="d-md-none d-flex">
          <div className="row">
            <div className="col-md-6 mt-4 ">
              <div className=" ">
                <div data-aos="fade-up" className="col-md-6 mt-4 mt-md-0">
                  <h4 className=" fs_24 fw-bold ff_n text-white mb-0">
                    Brand Advertisements
                  </h4>
                  <p className=" fs_16 mt-3 fw-normal  text-end ff_n  text-white">
                    At HKI Media, we specialize in crafting advanced marketing
                    campaigns and original creative ideas that bring brand
                    visions to life. With the Media Matrix App, we facilitate
                    seamless collaborations between brands, agencies, and
                    top-tier creative talent, ensuring impactful storytelling
                    and unparalleled outreach. Our focus on innovation,
                    data-driven strategies, and regional insights ensures brands
                    resonate deeply with their target audiences. From concept to
                    execution, we create ads that don’t just sell but inspire.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 ">
              <div className=" ">
                <h4 className=" fs_24 fw-bold ff_n text-white mb-0">
                  Government Advertisements
                </h4>
                <p className=" fs_16 mt-3 fw-normal  text-end ff_n  text-white">
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
            </div>
            <div className="col-md-6 mt-4 ">
              <div className=" ">
                <h4 className=" fs_24 fw-bold ff_n text-white mb-0">
                  Political Campaigns
                </h4>
                <p className=" fs_16 mt-3 fw-normal  text-end ff_n text-white">
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
  );
};

export default Timeline;
