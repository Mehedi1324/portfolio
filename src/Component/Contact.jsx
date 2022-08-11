import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaAlignLeft } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import data from './../meet1.json';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6uf2rlm',
        'template_3oj1j0m',
        form.current,
        '85d415elI-p0bIdzf'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
  };
  return (
    <div className="contact__container">
      <div className="contact" id="contact">
        <span style={{ color: '#27ae60' }}>
          <h3 data-aos="fade-down">
            Contact Me <FaAlignLeft />
          </h3>
        </span>
        <div className="form">
          <Row className="row">
            <Col md={6} lg={6} sm={12} xs={12} data-aos="zoom-in">
              <Lottie options={defaultOptions} />{' '}
            </Col>
            <Col md={6} lg={6} sm={12} xs={12}>
              <form className="form" ref={form} onSubmit={sendEmail}>
                <Row className="row2">
                  <Col
                    md={6}
                    lg={6}
                    sm={12}
                    xs={12}
                    data-aos="fade-left"
                    data-aos-delay="50"
                  >
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      required
                    />
                  </Col>
                  <Col
                    md={6}
                    lg={6}
                    sm={12}
                    xs={12}
                    data-aos="fade-left"
                    data-aos-delay="60"
                  >
                    <input type="text" placeholder="Phone (optional)" />
                  </Col>
                  <Col
                    md={12}
                    lg={12}
                    sm={12}
                    xs={12}
                    data-aos="fade-left"
                    data-aos-delay="70"
                  >
                    <input
                      type="text"
                      placeholder="Email"
                      name="user_email"
                      required
                    />
                  </Col>
                  <Col
                    md={12}
                    lg={12}
                    sm={12}
                    xs={12}
                    data-aos="fade-left"
                    data-aos-delay="80"
                  >
                    <textarea
                      cols="10"
                      rows="5"
                      name="message"
                      placeholder="Message"
                    />
                  </Col>
                  <Col
                    md={12}
                    lg={12}
                    sm={12}
                    xs={12}
                    data-aos="fade-left"
                    data-aos-delay="90"
                    data-aos-offset="200"
                  >
                    <input type="submit" value="Submit" className="sub__btn" />
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact;
