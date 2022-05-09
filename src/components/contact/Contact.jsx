import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_83hhhqo', 'template_bqyhrg9', form.current, '8B9f5BI7jUZnIxzHu');
    e.target.reset();
  };

  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option__icon' />
            <h4>Email</h4>
            <h5>harsh.sojitra.49@gmail.com</h5>
            <a href="mailto:harsh.sojitra.49@gmail.com" rel='noreferrer' target="_blank">Send a Message</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className='contact__option__icon' />
            <h4>Contact</h4>
            <h5>+919016694754</h5>
            <a href="wa.me/+919016694754" rel='noreferrer' target="_blank">Contact me Direct?</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option__icon' />
            <h4>Instagram</h4>
            <h5>@harsh_sojitra_007</h5>
            <a href="https://www.instagram.com/harsh_sojitra_007/" rel='noreferrer' target="_blank">Follow me</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='client_name' placeholder='Your Full Name' autoComplete='off' required />
          <input type="email" name='client_email' placeholder='Your E-mail' autoComplete='off' required />
          <textarea name='client_message' rows="7" placeholder='Type Your Message Here' required />
          <input type='submit' className='btn btn-primary' value="Send Message"  />
        </form>
      </div>

    </section>
  )
}

export default Contact;