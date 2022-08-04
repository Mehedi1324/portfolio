import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
