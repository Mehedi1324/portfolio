import React from 'react';
import { Row, Col } from 'react-bootstrap';
const FrontEnd = () => {
  return (
    <div className="skill">
      <Row>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img h">
            <img src={require('../icons/html.png')} alt="html" />
            <h5>HTML</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img c">
            <img src={require('../icons/css.png')} alt="css" />
            <h5>CSS</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img j">
            <img src={require('../icons/javascript.png')} alt="js" />
            <h5>JavaScript</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img b">
            <img src={require('../icons/bootstrap.png')} alt="bootstrap" />
            <h5>BootStrap</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img w">
            <img src={require('../icons/wordpress.png')} alt="wordpress" />
            <h5>WordPress</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img r">
            <img src={require('../icons/react.png')} alt="react" />
            <h5>React JS</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img m">
            <img src={require('../icons/mu5.png')} alt="MUI" />
            <h5>Material UI</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img t">
            <img src={require('../icons/tailwindCSS.png')} alt="tailwind" />
            <h5>Tailwind</h5>
          </div>
        </Col>
        <Col md={3} lg={2} sm={4} xs={6} className="col">
          <div className="partner__img s">
            <img src={require('../icons/sass.png')} alt="sass" />
            <h5>Sass</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FrontEnd;
