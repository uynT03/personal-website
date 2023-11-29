import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
        </div>
      <nav className="sidebar-nav">
        <div className="sidebar-item" onClick={() => console.log("Home Clicked")}>
          <span>Home</span>
        </div>
        <div className="sidebar-item" onClick={() => console.log("About Clicked")}>
          <span>About</span>
        </div>
        <div className="sidebar-item" onClick={() => console.log("Projects Clicked")}>
          <span>Projects</span>
        </div>
        <div className="sidebar-item" onClick={() => console.log("Contact Clicked")}>
          <span>Contact</span>
        </div>
      </nav>

      <div className="social-icons">
        <a href="https://github.com/uynT03" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/dong-uyen-truong-357008209/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
