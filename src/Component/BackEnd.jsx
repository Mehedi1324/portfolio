import React from 'react';
import { Row, Col } from 'react-bootstrap';
const BackEnd = () => {
  return (
    <div className="skill">
      <Row>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img n">
            <img src={require('../icons/node.png')} alt="html" />
            <h5>Node JS</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img e">
            <img src={require('../icons/expressJS.png')} alt="css" />
            <h5>Express</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img mo">
            <img src={require('../icons/mongoDB.png')} alt="js" />
            <h5>MongoDB</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img f">
            <img src={require('../icons/firebase1.png')} alt="bootstrap" />
            <h5>Firebase</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BackEnd;
