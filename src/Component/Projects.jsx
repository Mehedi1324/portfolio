import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { FaAlignLeft, FaGithub } from 'react-icons/fa';
const Projects = () => {
  return (
    <div className="projects" id="portfolio">
      <span style={{ color: '#27ae60' }}>
        <h3 data-aos="fade-down">
          My Projects <FaAlignLeft />
        </h3>
      </span>
      <div className="show__case">
        <Row>
          <Col md={6} lg={4} sm={12} xs={12}>
            <div className="container" data-aos="fade-right">
              <img src="./images/ecom_pad.png" alt="project1" />
              <div className="content">
                <div className="content__item">
                  <FaGithub />
                  <MdOutlineScreenSearchDesktop />
                </div>
              </div>
              <div className="content2">
                <h5>M-Shop </h5>
                <p>
                  "E-Commerce online shop, sales latest and modern electronic
                  gadgets"
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12} xs={12}>
            <div className="container" data-aos="fade-up">
              <img src="./images/guru_tab.png" alt="project1" />
              <div className="content">
                <div className="content__item">
                  <FaGithub />
                  <MdOutlineScreenSearchDesktop />
                </div>
              </div>
              <div className="content2">
                <h5>Travel Guru </h5>
                <p>
                  "Travel agency which provides Flights as well as Residence"
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12} xs={12}>
            <div className="container" data-aos="fade-left">
              <img src="./images/medikit_tab.png" alt="project1" />
              <div className="content">
                <div className="content__item">
                  <FaGithub />
                  <MdOutlineScreenSearchDesktop />
                </div>
              </div>
              <div className="content2">
                <h5>Medi-Kit </h5>
                <p>
                  "Online shop which provides emergency medical accessories"
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
