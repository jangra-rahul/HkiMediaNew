// import React, { useState } from "react";
// import video_icon from "../../assets/images/png/video_icon.png";
// import play_icon from "../../assets/images/png/play_icon.png";
// import video_icon1 from "../../assets/images/png/video_icon1.png";
// import article_img1 from "../../assets/images/png/artical_img1.png";
// import article_img2 from "../../assets/images/png/artical_img2.png";
// import article_img3 from "../../assets/images/png/artical_img3.png";

// const MediaNews = () => {
//   const [activeTab, setActiveTab] = useState("video");

//   return (
//     <div className="py-5 partners_bg">
//       <div className="container">
//         <h3 className="fs_35 fw-bold ff_s text-white text-center">
//           Media & News
//         </h3>
//         <p className="fs_24 ff_n fw-semibold text-center text-white mb-0 mt-1">
//           Welcome to HKI Media: Redefining Creativity, Technology and the Media
//           Industry
//         </p>

//         <div className="row">
//           <div className="col-md-4 col-sm-6  mt-md-5 mt-2">
//             <div className="position-relative">
//               <img
//                 className="position-absolute top-50 start-50 translate-middle"
//                 src={play_icon}
//                 alt="play_icon"
//               />
//               <img className="w-100" src={video_icon} alt="video_icon" />
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6  mt-md-5 mt-4">
//             <div className="position-relative">
//               <img
//                 className="position-absolute top-50 start-50 translate-middle"
//                 src={play_icon}
//                 alt="play_icon"
//               />
//               <img className="w-100" src={video_icon1} alt="video_icon" />
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6  mt-md-5 mt-4">
//             <div className="position-relative">
//               <img
//                 className="position-absolute top-50 start-50 translate-middle"
//                 src={play_icon}
//                 alt="play_icon"
//               />
//               <img className="w-100" src={video_icon} alt="video_icon" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaNews;

import React, { useState } from "react";
import video_icon from "../../assets/images/png/video_icon.png";
import play_icon from "../../assets/images/png/play_icon.png";
import video_icon1 from "../../assets/images/png/video_icon1.png";
import chulla_nondh from "../../assets/images/png/chulla_nondh.png";
import video1 from "../../assets/images/videos/news_video1.MP4";
import video2 from "../../assets/images/videos/news_video2.MP4";

const MediaNews = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  // Sample video URLs]
  const videos = {
    video1: video1,
    video2: video2,
    video3: video1,
  };

  const playVideo = (videoKey) => {
    setPlayingVideo(videoKey);
  };

  return (
    <div className="py-5 partners_bg">
      <div className="container">
        <h3 className="fs_35 fw-bold ff_s text-white text-center">
          Media & News
        </h3>
        {/* <p className="fs_24 ff_n fw-semibold text-center text-white mb-0 mt-1">
          Welcome to HKI Media: Redefining Creativity, Technology and the Media
          Industry
        </p> */}

        <div className="row">
          <div className="col-md-4 col-sm-6 mt-md-4 mt-2">
            {playingVideo === "video1" ? (
              <div className="position-relative">
                <iframe
                  className="w-100 rounded-3"
                  height={235}
                  width={300}
                  src={videos.video1}
                  title="Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div
                className="position-relative"
                onClick={() => playVideo("video1")}
              >
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={play_icon}
                  alt="play_icon"
                />
                <img className="w-100" src={video_icon} alt="video_icon" />
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-6 mt-md-4 mt-4">
            {playingVideo === "video2" ? (
              <div className="position-relative">
                <iframe
                  className="w-100 rounded-3"
                  height={235}
                  width={300}
                  src={videos.video2}
                  title="Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div
                className="position-relative"
                onClick={() => playVideo("video2")}
              >
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={play_icon}
                  alt="play_icon"
                />
                <img className="w-100" src={video_icon1} alt="video_icon" />
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-6 mt-md-4 mt-4">
            {playingVideo === "video3" ? (
              <div className="position-relative">
                {/* <iframe
                  className="w-100 rounded-3"
                  height={235}
                  width={300}
                  src={videos.video3}
                  title="Video 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}
                <iframe
                  className="w-100 rounded-3"
                  width="560"
                  height="237"
                  src="https://www.youtube.com/embed/j67MMW8h9Ic?si=9L-lyuhdG8Bhy02K"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            ) : (
              <div
                className="position-relative"
                onClick={() => playVideo("video3")}
              >
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={play_icon}
                  alt="play_icon"
                />
                <img className="w-100 " src={chulla_nondh} alt="video_icon" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaNews;
