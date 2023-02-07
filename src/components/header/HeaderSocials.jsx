import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram,BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/auqidirfan/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/auqid' target='blank'><BsGithub/></a>
        <a href='https://instagram.com/auqid' target='blank'><BsInstagram/></a>
        <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0' target='blank'><BsYoutube/></a>
      
    </div>
  )
}

export default HeaderSocials
