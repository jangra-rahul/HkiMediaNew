import React from "react";
import { Accordion } from "react-bootstrap";
import "./entertainment.css";

const FaqsPage = () => {
  return (
    <div className="bg-black py-5">
      <div className="container">
        <h2
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" text-center fw-bold fs_44  text-white ff_s"
        >
          FAQ’s
        </h2>
        <div className="row  justify-content-center">
          <div className="col-10 faq">
            <Accordion className="mt-4">
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="0"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-white">
                    State-of-the-Art Infrastructure
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white">
                  Utilize HKI’s expertise to turn creative ventures into
                  revenue-generating assets.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="1"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-white">
                    Tailored Curriculum
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white">
                  Utilize HKI’s expertise to turn creative ventures into
                  revenue-generating assets.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="2"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-white">
                    Proven Content Monetization Strategies
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white">
                  Utilize HKI’s expertise to turn creative ventures into
                  revenue-
                  <br></br>generating assets.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3 "
                eventKey="3"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-white">
                    Exclusive Access to the Media Matrix App
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="4"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-white">
                    Support and Mentorship
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;
