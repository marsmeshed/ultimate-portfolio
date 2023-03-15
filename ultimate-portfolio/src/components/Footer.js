import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
     <div className='footer'>
    <div className='socialMedia'>
       <InstagramIcon />
       <LinkedInIcon />
        </div>
    <p> $copy; 2023 maleaqe.com</p>
    </div>
  );
}

export default Footer;