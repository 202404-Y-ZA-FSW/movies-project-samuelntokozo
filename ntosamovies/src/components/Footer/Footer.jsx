import React from 'react';
import './Footer.css';


const Footer = () => {
  const ntokoNkosi = {
    name: 'Ntoko Nkosi',
    github: 'https://github.com/ntokonkosi',
    linkedin: 'https://www.linkedin.com/in/ntoko-nkosi/'
  };

  const samuelMasuvhe = {
    name: 'Samuel Masuvhe',
    github: 'https://github.com/samuelthis',
    linkedin: 'https://www.linkedin.com/in/samuel-masuvhe/'
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{ntokoNkosi.name}</h3>
          <ul className="footer-links">
            <li><a href={ntokoNkosi.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={ntokoNkosi.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{samuelMasuvhe.name}</h3>
          <ul className="footer-links">
            <li><a href={samuelMasuvhe.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={samuelMasuvhe.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ntosamovies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
