import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { FaAlignLeft } from 'react-icons/fa';
const Projects = () => {
  return (
    <div className="projects" id="portfolio">
      <span style={{ color: '#27ae60' }}>
        <h3>
          My Projects <FaAlignLeft />
        </h3>
      </span>
      <div className="show__case">
        <Row>
          <Col md={6} lg={4} sm={12} xs={12}>
            <div className="container">
              <img src="" alt="project1" />
              <div className="content"></div>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12} xs={12}>
            <div className="container">
              <img src="" alt="project1" />
              <div className="content"></div>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12} xs={12}>
            <div className="container">
              <img src="" alt="project1" />
              <div className="content"></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
