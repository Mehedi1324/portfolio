import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaAlignLeft } from 'react-icons/fa';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import FrontEnd from './FrontEnd';
const Skills = () => {
  const [outlet, setOutlet] = useState(false);
  return (
    <div className="skill__container" id="skill">
      <span style={{ color: '#27ae60' }}>
        <h3>
          Skills I have <FaAlignLeft />
        </h3>
      </span>
      {/* Skills__________ */}
      <nav className="skill__nav">
        <Row>
          <Col md={4} lg={4} sm={12}>
            <NavLink to="frontend" onClick={() => setOutlet(true)}>
              Front End
            </NavLink>
          </Col>
          <Col md={4} lg={4} sm={12}>
            <NavLink to="backend" onClick={() => setOutlet(true)}>
              Back End
            </NavLink>
          </Col>
          <Col md={4} lg={4} sm={12}>
            <NavLink to="others" onClick={() => setOutlet(true)}>
              Others
            </NavLink>
          </Col>
        </Row>
      </nav>
      {outlet === false ? <FrontEnd /> : <Outlet className="outlet" />}
    </div>
  );
};

export default Skills;
