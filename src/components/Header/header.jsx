import React from 'react'
import CTA from './CTA'
import ME from '../../assets/profile_wbg.png'
import HeaderSocials from './HeaderSocials';
import './header.css';

const header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Hello I'm</h5>
        <h1>Harsh Sojitra</h1>
        <h5 className="text-light">Full-Stack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className='my-image' src={ME} alt="Can't Load!" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default header;