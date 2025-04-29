import React from "react";
import Advantage_icon from "../../assets/images/png/Advantage_img.png";
import { Accordion } from "react-bootstrap";
import width_arrow from "../../assets/images/svg/white_arrow.svg";
import "./animatica.css";

const AnimaticaAdvantage = () => {
  return (
    <div className="partners_bg py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 pe-md-5 ">
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" fs_35 ff_s text-white fw-bold"
            >
              The HKI Animatica <br></br> Franchise Advantage
            </h3>
            <Accordion className="mt-4">
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="0"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    State-of-the-Art Infrastructure
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify text_justify">
                  Step into a world of innovation with HKI Animatica's
                  cutting-edge facilities, designed to set the benchmark in
                  AVGC-XR and animation training. Equipped with
                  industry-standard tools, high-tech labs, and immersive virtual
                  production setups, our infrastructure ensures your franchise
                  becomes a hub of creativity and excellence. With an investment
                  in world-class technology, you’re not just offering education
                  – you’re delivering an experience students can’t find anywhere
                  else.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="1"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    Tailored Curriculums
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify">
                  Redefine learning with curriculums that perfectly balance
                  industry relevance and academic rigor. From AICTE-approved
                  diploma courses in film production, virtual production, and
                  digital marketing to Skill India’s NSQF-aligned
                  government-sponsored certifications, we have it all. Designed
                  to meet the demands of a rapidly evolving media landscape,
                  these courses are your key to positioning your franchise as
                  the go-to destination for cutting-edge creative education.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="2"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    Proven Content Monetization Strategies
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify">
                  Unlock unprecedented revenue opportunities through HKI’s
                  exclusive content distribution partnership with Western Beats,
                  a Warner International Group company. Leverage four
                  high-demand content niches with stellar RPM/CPM rates on OTT
                  platforms, ensuring maximum profitability. With HKI Animatica,
                  your franchise doesn’t just train creators – it monetizes
                  their talent, making this a truly game-changing business
                  model.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3 "
                eventKey="3"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    Exclusive Access to Media Matrix App
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify">
                  Revolutionize job placements with our proprietary Media Matrix
                  App, a one-of-a-kind platform connecting students to the best
                  hiring opportunities, forward market linkages, and
                  cross-industry partnerships. Your franchise will serve as a
                  gateway for students to enter high-paying creative careers,
                  making HKI Animatica the gold standard in media and
                  entertainment skilling. ui officia deserunt mollit anim id est
                  laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-up"
                data-aos-duration="2000"
                className="bg-white rounded-2 mt-3"
                eventKey="4"
              >
                <Accordion.Header className="rounded-2">
                  <h3 className="mb-0 fs_18 fw-semibold ff_n text-black">
                    Comprehensive Support and Mentorship
                  </h3>
                </Accordion.Header>
                <Accordion.Body className="pt-0 text_justify">
                  With HKI Animatica, you’re never alone. From hiring the right
                  talent and establishing operational SOPs to creating killer
                  marketing campaigns, we provide unmatched mentorship and
                  support. Our proven processes and best-in-class strategies
                  ensure your franchise becomes a thriving success story. This
                  is a once-in-a-lifetime opportunity to build a business that’s
                  as impactful as it is profitable.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-5 mt-4 mt-md-0">
            <img className="w-100" src={Advantage_icon} alt="Advantage_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimaticaAdvantage;
