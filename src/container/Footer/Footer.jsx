import React from 'react';

import './Footer.css';
import { FooterOverlay } from '../../components';
import { FiFacebook,FiInstagram} from 'react-icons/fi'
import { images } from '../../constants';
const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>
              Contact Me
          </h1>
          <p className='p__opensans'>Adress</p>
          <p className='p__opensans'>Phone Number</p>
          
      </div>
      <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="ram"/>
          <p className='p__opensans'>"The best way to find yourself is to lose yourself to others"</p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:15}}/>
          <div className='app__footer-links_icons'>
            <FiFacebook/>
            <FiInstagram/>
          </div>
      </div>
      <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>
              Working Hours
          </h1>
          <p className='p__opensans'>Monday-Friday</p>
          <p className='p__opensans'>Saturday-Sunday</p>
      </div>
    </div>
    <div className='footer__copyright'>
        <p className='p__opensans'>2023 Ram. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
