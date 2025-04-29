import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import logo from "../../assets/images/svg/Logo.svg";
import white_logo from "../../assets/images/svg/white_logo.svg";
import dowload_icon from "../../assets/images/svg/dowmload_icon.svg";
import cross_icon from "../../assets/images/png/cross_icpon1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const isActive = (path) => location.pathname === path;
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: "smooth" });

        // Remove the hash from the URL
        navigate(location.pathname, { replace: true });
      }
    }
  }, [location, navigate]);

  return (
    <div className="bg-white py-3">
      <div className="container text-black">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src={logo} alt="websitelogo" className="logo" />
          </Link>

          <ul className="d-none d-lg-flex align-items-center gap-xl-5 gap-4 mb-0">
            <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/") ? "active_link" : "text-black"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/hki-animatica") ? "active_link" : "text-black"
                }`}
                to="/hki-animatica"
              >
                Skilling
              </Link>
            </li>
            {/* <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/skilling") ? "active_link" : "text-black"
                }`}
                to="/skilling"
              >
                Skilling
              </Link>
            </li> */}
            <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/entertainment") ? "active_link" : "text-black"
                }`}
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>

            <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/advertisement") ? "active_link" : "text-black"
                }`}
                to="/advertisement"
              >
                Creations
              </Link>
            </li>
            {/* <li>
              <Link
                className={`fs_16 ff_s fw-bold link_hover ${
                  isActive("/media-matrix-app") ? "active_link" : "text-black"
                }`}
                to="/media-matrix-app"
              >
                Media Matrix App
              </Link>
            </li> */}
          </ul>

          {/* Button */}
          <Link to={"/media-matrix-app"}>
            <button className="cummon_btn px-4 fs_16 border-0 text-white ff_s fw-bold d-none d-lg-block">
              Media Matrix App
            </button>
          </Link>

          {/* Hamburger Menu for small screens */}

          <div
            onClick={handleSidebarToggle}
            className="navmanu d-block d-lg-none bg-transparent border-0"
          >
            <div className="navdot"></div>
            <div className="navdot custom_margin"></div>
            <div className="navdot"></div>
          </div>
        </div>

        {/* Sidebar */}
        <Offcanvas
          show={showSidebar}
          onHide={handleSidebarToggle}
          placement="end"
          className="bg-white text-white "
        >
          <div className="position-relative p-lg-4 ">
            <img
              onClick={handleSidebarToggle}
              className=" position-absolute end-0 custom_position me-4"
              width={"30px"}
              height={"30px"}
              src={cross_icon}
              alt="cross_icon"
            />
            <Offcanvas.Header className="text-black">
              <Offcanvas.Title>
                <img src={logo} alt="websitelogo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className={`fs_16 ff_s fw-bold link_hover ${
                      isActive("/") ? "active_link" : "text-black"
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-4">
                  <Link
                    className={`fs_16 ff_s fw-bold link_hover ${
                      isActive("/hki-animatica") ? "active_link" : "text-black"
                    }`}
                    to="/hki-animatica"
                  >
                    Skilling
                  </Link>
                </li>
                {/* <li className="mt-4">
                  <Link
                    className={`fs_16 ff_s fw-bold link_hover ${
                      isActive("/skilling") ? "active_link" : "text-black"
                    }`}
                    to="/skilling"
                  >
                    Skilling
                  </Link>
                </li> */}
                <li className="mt-4">
                  <Link
                    className={`fs_16 ff_s fw-bold link_hover ${
                      isActive("/entertainment") ? "active_link" : "text-black"
                    }`}
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>

                <li className="mt-4">
                  <Link
                    className={`fs_16 ff_s fw-bold link_hover ${
                      isActive("/advertisement") ? "active_link" : "text-black"
                    }`}
                    to="/advertisement"
                  >
                    Creations
                  </Link>
                </li>

                <li className="mt-4">
                  <Link
                    className={`fs_16 ff_s fw-bold link_hover ${
                      isActive("/media-matrix-app")
                        ? "active_link"
                        : "text-black"
                    }`}
                    to="/media-matrix-app"
                  >
                    Media Matrix App
                  </Link>
                </li>
              </ul>
              {/* <Link to={"/media-matrix-app"}>
                <button className="cummon_btn px-4 fs_16 border-0 text-white ff_s fw-bold mt-5">
                  Media Matrix App
                </button>
              </Link> */}
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Navbar;
