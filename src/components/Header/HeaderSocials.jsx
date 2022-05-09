import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/harsh-sojitra-a47809204/" rel='noreferrer' id='social__icon' target="_blank">
            <BsLinkedin />
        </a>
        <a href="https://github.com/harshsojitra007" rel='noreferrer' id='social__icon' target="_blank">
            <BsGithub />
        </a>
    </div>
  )
}

export default HeaderSocials