import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Others = () => {
  return (
    <div className="skill">
      <Row>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img g">
            <img src={require('../icons/git.png')} alt="html" />
            <h5>GitHub</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img h">
            <img src={require('../icons/hiroku.png')} alt="css" />
            <h5>Heroku</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img fi">
            <img src={require('../icons/figma.png')} alt="js" />
            <h5>Figma</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img ne">
            <img src={require('../icons/netlify.png')} alt="bootstrap" />
            <h5>Netlify</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img p">
            <img src={require('../icons/python.png')} alt="bootstrap" />
            <h5>Python</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Others;
