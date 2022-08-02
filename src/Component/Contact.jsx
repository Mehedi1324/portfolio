import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaAlignLeft } from 'react-icons/fa';
import Lottie from 'react-lottie';
import data from './../meet1.json';
const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
  };
  return (
    <div className="contact" id="contact">
      <span style={{ color: '#27ae60' }}>
        <h3>
          Contact Me <FaAlignLeft />
        </h3>
      </span>
      <div className="form">
        <Row className="row">
          <Col md={6} lg={6} sm={12} xs={12}>
            <Lottie options={defaultOptions} />{' '}
          </Col>
          <Col md={6} lg={6} sm={12} xs={12}>
            <form className="form">
              <Row className="row2">
                <Col md={6} lg={6} sm={12} xs={12}>
                  <input type="text" placeholder="Name" required />
                </Col>
                <Col md={6} lg={6} sm={12} xs={12}>
                  <input type="text" placeholder="Phone (optional)" />
                </Col>
                <Col md={12} lg={12} sm={12} xs={12}>
                  <input type="text" placeholder="Email" required />
                </Col>
                <Col md={12} lg={12} sm={12} xs={12}>
                  <textarea cols="10" rows="5" placeholder="Message" />
                </Col>
                <Col md={12} lg={12} sm={12} xs={12}>
                  <input type="submit" value="Submit" className="sub__btn" />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;