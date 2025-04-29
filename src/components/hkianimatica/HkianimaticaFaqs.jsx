import React from "react";
import { Accordion } from "react-bootstrap";
import "../entertainmentpage/entertainment.css";

const HkianimaticaFaqs = () => {
  return (
    <div id="faq" className="bg-black py-5">
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
                    Who Can Buy an HKI Animatica Franchise?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white text_justify">
                  The HKI Animatica franchise is perfect for media
                  organizations, educational institutions, or media agencies
                  looking to dominate India’s rapidly evolving creative market.
                  If you’re ready to make it big, this is your opportunity!
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
                    When Does the First Batch Start?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white text_justify">
                  The first batch of HKI Animatica students will commence their
                  journey in June 2025. Be part of this revolutionary launch and
                  start shaping the future of India’s creative minds!
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
                    What Is the Franchise Fee?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white text_justify">
                  There’s no franchise fee! Simply choose the courses you wish
                  to offer, and our expert team will assist you in setting up
                  your HKI Animatica Centre of Excellence.
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
                    Which Courses Are Offered by HKI Animatica?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white text_justify">
                  For detailed information about our wide range of courses,
                  reach out to our support email or fill out the interest form.
                  Our team will guide you through the options tailored to your
                  needs.
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
                    Where Can I Open an HKI Animatica COE?
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text-white text_justify">
                  You can open an HKI Animatica Centre of Excellence anywhere in
                  India with good connectivity and infrastructure. For detailed
                  prerequisites, fill out the interest form, and our team will
                  assist you.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HkianimaticaFaqs;
