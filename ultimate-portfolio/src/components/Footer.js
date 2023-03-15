import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.instagram.com/marsmeshed'>
          <InstagramIcon />
        </a>
        <a href='https://www.linkedin.com/in/maleaque-barzangy-7119b2258/'>
          <LinkedInIcon />
        </a>
      </div>
      <p>2023 maleaqe.com</p>
    </div>
  );
}

export default Footer;