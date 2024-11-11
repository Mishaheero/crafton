import React from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/icons/socials/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/socials/x.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/socials/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/socials/linkedin.svg';

const SocialIcons = () => {
  return (
    <>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-[30px]">
        <InstagramIcon width="16" height="16" fill="#C2CFD6" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-[30px]">
        <TwitterIcon width="16" height="16" fill="#C2CFD6" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="md:me-[40px]">
        <LinkedInIcon width="16" height="16" fill="#C2CFD6" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-[30px]">
        <FacebookIcon width="16" height="16" fill="#C2CFD6" />
      </a>
    </>
  );
};

export default SocialIcons;
