import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index';
import data from './../bnr.json';
import '../Stylings/Home.scss';
import SocialLink from './SocialLink';
const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
  };
  const { text } = useTypewriter({
    words: [
      'Web Developer',
      'Web Designer',
      'React Develper',
      'Frontend Developer',
      'WordPress Expert',
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div className="bnr__container" id="home">
      <SocialLink />
      <div className="banner">
        <Row className="row">
          <Col sm={12} lg={6} xs={12} md={6} className="col">
            <div className="hi">
              {' '}
              <h4 data-aos="fade-down-right">I'M</h4>
              <h2 data-aos="fade-down-right">MEHEDI HASAN</h2>
              <h3 data-aos="fade-down-right" className="typewriter">
                {text}
                <Cursor />
              </h3>
              <div>
                <input
                  type="submit"
                  className="banner__btn"
                  value="Get CV"
                  data-aos="zoom-out-up"
                  data-aos-offset="120"
                />
                <a href="#contact">
                  {' '}
                  <input
                    type="submit"
                    className="banner__btn"
                    value="Hire me"
                    data-aos="zoom-out-up"
                    data-aos-offset="120"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6} xs={12} md={6}>
            <div style={{ width: '100%' }} data-aos="zoom-in-left">
              <Lottie options={defaultOptions} />{' '}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
