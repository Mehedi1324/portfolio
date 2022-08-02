import React, { useState } from 'react';
import '../Stylings/Home.scss';
import { FaHome } from 'react-icons/fa';
import { RiGalleryFill } from 'react-icons/ri';
import { IoMdPerson } from 'react-icons/io';
import { GiSkills } from 'react-icons/gi';
import { MdContactMail } from 'react-icons/md';
const Navbar = () => {
  const [activeNav, setActive] = useState('#home');
  return (
    <nav className="nav">
      <a
        href="#home"
        onClick={() => setActive('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <IoMdPerson />
      </a>
      <a
        href="#skill"
        onClick={() => setActive('#skill')}
        className={activeNav === '#skill' ? 'active' : ''}
      >
        <GiSkills />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiGalleryFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActive('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Navbar;
