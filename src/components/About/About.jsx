import React from 'react';
import './about.css';
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="Can't Load Properly!" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher :)</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Client's</h5>
              <small>200+ WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>4 Complete Projects</small>
            </article>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident at id molestias pariatur porro, ratione voluptatum voluptas sed aut cupiditate repudiandae laudantium omnis earum tempora hic ipsa cum consequatur beatae?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About;