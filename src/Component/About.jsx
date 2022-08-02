import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaAlignLeft } from 'react-icons/fa';
const About = () => {
  return (
    <div className="about__container" id="about">
      <span style={{ color: '#27ae60', marginTop: '10%' }}>
        <h3>
          About Me <FaAlignLeft />
        </h3>
      </span>
      <div className="about">
        <Row className="row">
          <Col md={4} lg={4} sm={12} xs={12}>
            <div className="about__img">
              <img src="./images/dp3.png" alt="DP" />
            </div>
          </Col>
          <Col md={8} lg={8} sm={12} xs={12}>
            <p>
              Hi, I'm Mehedi. I have a serious passion for Web Development and
              Designing. I can conjure a website from noting into existance,
              fully formed. I enjoy making responsive, eye catchy and modern
              functionalized websites using latest technology which converts
              viewers into customers. <br />
              <br /> Fueled by high energy levels and boundless enthusiasm, I am
              easily inspired and more then willing to follow my fascinations
              wherever they take me. I am never satisfied to just come up with
              ideas. Rather I have an almost impulsive need to act on them. I
              prefer to keep learning, continue challenging my self, and do
              interesting things that matter. <br />
              <br /> Being a diligent, hardworking and result oriented person, I
              always work towards achieving the best result on each project I
              lay my hands on.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
