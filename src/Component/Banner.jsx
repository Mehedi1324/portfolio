import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Lottie from 'react-lottie';
import data from './../lottie3.json';
import '../Stylings/Home.scss';
const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
  };
  return (
    <div className="bnr__container" id="home">
      <div className="banner">
        <Row className="row">
          <Col sm={12} lg={6} xs={12} md={6} className="col">
            <div className="hi">
              {' '}
              <h4>HI, I AM</h4>
              <h2>MEHEDI HASAN</h2>
              <h3>WEB DEVELOPER</h3>
            </div>
          </Col>
          <Col sm={12} lg={6} xs={12} md={6}>
            <div style={{ width: '100%' }}>
              <Lottie options={defaultOptions} />{' '}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
