import React, { useEffect } from "react";
import Navbar from "../common/Navbar";
import article_img1 from "../../assets/images/png/course_img1.png";
import article_img2 from "../../assets/images/png/course_img2.png";
import article_img3 from "../../assets/images/png/course_img3.png";
import pagenation_img from "../../assets/images/svg/pagenation_img.svg";
import courses_img1 from "../../assets/images/png/courses_img1.png";
import courses_img2 from "../../assets/images/png/courses_img2.png";
import courses_img3 from "../../assets/images/png/courses_img3.png";
import courses_img4 from "../../assets/images/png/courses_img4.png";
import courses_img5 from "../../assets/images/png/courses_img5.png";
import courses_img6 from "../../assets/images/png/courses_img6.png";
import courses_img7 from "../../assets/images/png/courses_img7.png";
import courses_img8 from "../../assets/images/png/courses_img8.png";
import courses_img9 from "../../assets/images/png/courses_img9.png";
import courses_img10 from "../../assets/images/png/courses_img10.png";
import courses_img11 from "../../assets/images/png/courses_img11.png";
import courses_img12 from "../../assets/images/png/courses_img12.png";
import courses_img13 from "../../assets/images/png/courses_img13.png";
import courses_img14 from "../../assets/images/png/courses_img14.png";
import courses_img15 from "../../assets/images/png/courses_img15.png";
import courses_img16 from "../../assets/images/png/courses_img16.png";
import courses_img17 from "../../assets/images/png/courses_img17.png";
import courses_img18 from "../../assets/images/png/courses_img18.png";
import courses_img19 from "../../assets/images/png/courses_img19.png";
import courses_img20 from "../../assets/images/png/courses_img20.png";
import courses_img21 from "../../assets/images/png/courses_img21.png";
import { Link } from "react-router-dom";

const CourseHeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);
  return (
    <>
      <Navbar />
      <div className="py-5  bg-black">
        <div className="container">
          <h4 className=" fs_44 ff_s fw-bold text-white text-center ">
            Our Courses
          </h4>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img1} alt="article_img1" />
                <div className="p-2 pb-0 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Animation Director
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Master the art of overseeing animation projects, from
                      concept to completion, ensuring a seamless blend of
                      creativity and technology. Train with us to become an
                      Animation Director and lead groundbreaking projects in the
                      animation world.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img2} alt="article_img1" />
                <div className="p-2 pb-0 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      AR/VR Developer
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Build advanced augmented and virtual reality applications,
                      focusing on programming and interactive user experiences.
                      Join our course to become an AR/VR Developer and engineer
                      the future of immersive media.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img3} alt="article_img1" />
                <div className="p-2 pb-0 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      AR/VR Producer
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Manage the development of AR and VR projects, coordinating
                      teams and ensuring creative and technical excellence.
                      Train with us to become an AR/VR Producer and shape the
                      future of interactive storytelling.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img4} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Art Director (Animation & Gaming)
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Define the artistic vision for animation and gaming
                      projects, creating a cohesive visual experience. Become an
                      Art Director and inspire teams to craft stunning content.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img5} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                    Cinematographer/Videographer
                  </h3>
                  <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                    Capture captivating visuals with expertise in camera
                    operation, lighting, and composition. Train to become a
                    Cinematographer/Videographer and tell stories through your
                    lens.
                  </p>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img6} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Community Journalist
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Report on local issues and stories, engaging communities
                      and driving impactful journalism. Join us to become a
                      Community Journalist and shine as a voice for the people.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img7} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Content Strategist
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Develop strategies for impactful content creation,
                      delivery, and management. Become a Content Strategist and
                      lead businesses in crafting narratives that engage
                      audiences.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img8} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Digital Marketing Manager
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Master digital campaigns, SEO, social media, and analytics
                      to drive online success. Train with us to become a Digital
                      Marketing Manager and revolutionize brand presence.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img9} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Director of Photography
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Shape cinematic narratives through expert camera work,
                      lighting, and visual storytelling. Enroll to become a
                      Director of Photography and craft masterpieces for screens
                      big and small.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img10} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Game Artist
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Create compelling visuals for games, including character
                      design and environments. Become a Game Artist and bring
                      imaginative worlds to life.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img11} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Graphic Designer
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Learn design principles, software, and creative
                      communication to craft stunning visuals. Train with us to
                      become a Graphic Designer and transform ideas into
                      impactful designs.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img12} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Multiplex Operation Manager
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Manage cinema operations, focusing on customer experience
                      and operational efficiency. Join us to become a Multiplex
                      Operation Manager and lead the entertainment experience.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img13} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Music Producer
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Craft and oversee music production, from recording to
                      final composition. Train to become a Music Producer and
                      orchestrate melodies that resonate.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img14} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Rendering Artist
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Turn 3D models into stunning visuals with expertise in
                      lighting, shading, and texturing. Become a Rendering
                      Artist and bring digital creations to life.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img15} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Rigging Artist
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Create skeletal structures for 3D models, enabling
                      lifelike movements in animations. Train with us to become
                      a Rigging Artist and breathe life into characters.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img16} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Sales Director
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Lead sales strategies and teams to drive growth and
                      success. Become a Sales Director and spearhead
                      transformative business achievements.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img17} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Script Writer
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Craft captivating scripts for film, TV, and digital
                      platforms, mastering storytelling and dialogue. Train to
                      become a Script Writer and shape narratives that captivate
                      audiences.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img18} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Search Engine Marketing Executive
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Execute impactful paid search campaigns to boost
                      visibility and drive traffic. Become a SEM Executive and
                      lead brands to top search rankings.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img19} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Search Engine Optimization Executive
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Optimize websites for higher rankings with keyword
                      strategies, backlinks, and analytics. Join us to become an
                      SEO Executive and amplify online presence.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img20} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Social Media Manager
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Plan and manage social media campaigns, engaging
                      communities and driving brand awareness. Train with us to
                      become a Social Media Manager and make waves in the
                      digital sphere.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4">
              <div className="card h-100 p-2 rounded-4">
                <img src={courses_img21} alt="article_img1" />
                <div className="p-2 d-flex flex-column justify-content-between pb-0 h-100">
                  <div>
                    <h3 className=" fs_24 ff_s fw-bold clr_theme ">
                      Sound Designer
                    </h3>
                    <p className="mb-0 fs_16 ff_n clr_darkgray  text_justify ">
                      Create immersive soundscapes for films, games, and media
                      productions. Train to become a Sound Designer and enhance
                      auditory experiences that captivate.
                    </p>
                  </div>
                  <Link to={"/contact-us"}>
                    <button className="but px-4 py-2 rounded-2 border-0 text-white mt-3 fs_14 ff_s fw-bold">
                      Inquire Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="d-flex justify-content-end">
            <img className=" mt-4" src={pagenation_img} alt="pagenation_img" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CourseHeroSection;
