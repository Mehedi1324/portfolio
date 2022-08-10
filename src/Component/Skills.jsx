import { FaAlignLeft } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import { BsPatchCheckFill } from 'react-icons/bs';
const Skills = () => {
  return (
    <div className="skill__container" id="skill">
      <div className="skill">
        <span style={{ color: '#27ae60' }}>
          <h3 data-aos="fade-down">
            Skills I have <FaAlignLeft />
          </h3>
        </span>
        <div className="skill__card">
          <Row>
            <Col md={6} lg={4} sm={12} xs={12}>
              <div className="skill__details" data-aos="fade-right">
                <h5>Front End</h5>
                <div className="skills__info">
                  <p>
                    <BsPatchCheckFill /> HTLM
                  </p>
                  <p>
                    <BsPatchCheckFill /> css
                  </p>
                  <p>
                    <BsPatchCheckFill /> JavaScript
                  </p>
                  <p>
                    <BsPatchCheckFill /> BootStrap
                  </p>
                  <p>
                    <BsPatchCheckFill /> React JS
                  </p>
                  <p>
                    <BsPatchCheckFill /> WordPress
                  </p>
                  <p>
                    <BsPatchCheckFill /> Tailwind CSS
                  </p>
                  <p>
                    <BsPatchCheckFill /> Material UI
                  </p>
                  <p>
                    <BsPatchCheckFill /> SASS
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} sm={12} xs={12}>
              <div className="skill__details" data-aos="fade-up">
                <h5>Back End</h5>
                <div className="skills__info">
                  <p>
                    <BsPatchCheckFill /> Node JS
                  </p>
                  <p>
                    <BsPatchCheckFill /> Express JS
                  </p>
                  <p>
                    <BsPatchCheckFill /> Mongo DB
                  </p>
                  <p>
                    <BsPatchCheckFill /> Firebase
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} sm={12} xs={12}>
              <div className="skill__details" data-aos="fade-left">
                <h5>Others</h5>
                <div className="skills__info">
                  <p>
                    <BsPatchCheckFill /> GitHub
                  </p>
                  <p>
                    <BsPatchCheckFill /> Heroku
                  </p>
                  <p>
                    <BsPatchCheckFill /> Figma
                  </p>
                  <p>
                    <BsPatchCheckFill /> Netlify
                  </p>
                  <p>
                    <BsPatchCheckFill /> Python
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Skills;
