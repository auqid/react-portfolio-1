import React from 'react'
import './footer.css'
import {BsLinkedin,BsGithub,BsInstagram,BsYoutube} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#top' className='footer__logo'>Auqid Irfan</a>
      <ul className='permalinks'>
        <li><a href='#top'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Portfolio</a></li>


      </ul>
      <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/auqidirfan/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/auqid' target='blank'><BsGithub/></a>
        <a href='https://instagram.com/auqid' target='blank'><BsInstagram/></a>
        <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0' target='blank'><BsYoutube/></a>

      </div>

    </footer>
  )
}

export default Footer
