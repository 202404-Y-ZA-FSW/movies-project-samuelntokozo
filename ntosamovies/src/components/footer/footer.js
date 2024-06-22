import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const items = [
    {
      githubLink: "https://github.com/NtokozoMitchell",
      linkedinLink: "https://www.linkedin.com/in/ntokozo-nkosi-966150298/",
      name: "Ntokozo Nkosi"
    },
    {
      githubLink: "https://github.com/samuelthis",
      linkedinLink: "https://www.linkedin.com/in/thitevhelwimasuvhe",
      name: "Samuel"
    },
  ];

  return (
    <div className='footer'>
      <div className='items-container'>
        {items.map((item, index) => (
          <div key={index} className='item'>
            <h2 className="text1">{item.name}</h2>
            <div>
              <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </a>
              {item.linkedinLink && (
                <a href={item.linkedinLink} target="_blank" rel="noopener noreferrer">
                  <span>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className='copy-right'>&copy; {currentYear} Your Company</p>
    </div>
  );
};

export default Footer;

