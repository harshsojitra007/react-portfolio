import React from 'react';
import './footer.css';
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { GrFacebook } from 'react-icons/gr'

const footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>Harsh Sojitra</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">

        <a href="https://www.facebook.com/profile.php?id=100016831753902" rel='noreferrer' target="_blank">
          <GrFacebook className='footer__socials__icon' />
        </a>
        <a href="https://www.instagram.com/harsh_sojitra_007/" rel='noreferrer' target="_blank">
          <BsInstagram className='footer__socials__icon' />
        </a>
        <a href="https://wa.me/+919016694754" rel='noreferrer' target="_blank">
          <BsWhatsapp className='footer__socials__icon' />
        </a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Harsh Sojitra. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default footer;