import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { SiUpwork } from 'react-icons/si';

const SocialLink = () => {
  return (
    <nav data-aos="zoom-in" className=" socila__icons">
      <a href="https://www.facebook.com/profile.php?id=100007574026014">
        <FaFacebookF />
      </a>
      <a href="#contact">
        <FcGoogle />
      </a>
      <a
        style={{ color: '#0a66c2' }}
        href="https://www.linkedin.com/in/mehedi-hasan-820348219/"
      >
        <ImLinkedin2 />
      </a>
      <a
        style={{ color: 'green' }}
        href="https://www.upwork.com/freelancers/~0195b505a922c463d3"
      >
        <SiUpwork />
      </a>
    </nav>
  );
};

export default SocialLink;
