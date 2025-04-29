import React from "react";
import { Accordion } from "react-bootstrap";
import "../entertainmentpage/entertainment.css";

const Faqs = () => {
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
          <div className="col-md-10 faq">
            <Accordion className="mt-4">
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="0"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-white">
                    How can Media Matrix help me find the right creative talent?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify text-white">
                  Media Matrix connects you directly with professionals across
                  various media fields—actors, directors, designers, and
                  more—making it easy to collaborate on your next big project.
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
                    Is Media Matrix only for media professionals or can agencies
                    use it too?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify text-white">
                  Whether you're an artist, agency, or production house, Media
                  Matrix is designed to empower all users by providing tailored
                  solutions for seamless networking and collaboration.
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
                    Can I track the progress of my projects through the Media
                    Matrix app?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify text-white">
                  Absolutely! The app features tools to track project
                  milestones, connect with collaborators, and keep everything
                  organized in one place for better workflow management.
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
                    How do I get noticed on Media Matrix as a creative
                    professional?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify text-white">
                  Create a compelling profile, showcase your work, and utilize
                  the app’s job and collaboration notifications to connect with
                  agencies and industry leaders actively looking for talent.
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
                    Is the Media Matrix app suitable for freelancers or only
                    full-time professionals?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify text-white">
                  Freelancers and full-time professionals alike will benefit
                  from Media Matrix, as it offers flexibility in finding
                  opportunities that match your skills and schedule.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
