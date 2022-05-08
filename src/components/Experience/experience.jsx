import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>

      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">

          <h3>Frontend Development</h3>
          <div className="experience__content">
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__icon' />

              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__icon' />

              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__icon' />

              <div>
                <h4>JS/JQuery</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__icon' />

              <div>
                <h4>React</h4>
                <small className='text-light'>Fresher</small>
              </div>
            </article>

          </div>

        </div>

        <div className="experience__backend">

          <h3>Backend Development</h3>
          <div className="experience__content">
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__icon' />

              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__icon' />

              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__icon' />

              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__icon' />

              <div>
                <h4>DJango</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__icon' />

              <div>
                <h4>Java/Spring</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>

        </div>
        
      </div>

    </section>
  )
}

export default experience;