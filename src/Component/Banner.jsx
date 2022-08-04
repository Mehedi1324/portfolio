import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { Typewriter } from 'react-simple-typewriter';

import data from './../banner6.json';
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
              <h4>I'M</h4>
              <h2>MEHEDI HASAN</h2>
              <h3>
                <Typewriter
                  loop
                  words={[
                    'Web Developer',
                    'React Develper',
                    'Frontend Developer',
                    'WordPress Expert',
                  ]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h3>
              <div>
                <input type="submit" className="banner__btn" value="Get CV" />
                <input type="submit" className="banner__btn" value="Hire me" />
              </div>
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
