import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin,BsGithub,BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>auqidirfan100@gmail.com</h5>
  
          </article>
          <article className='contact__option'>
            <BsGithub/>
            <h4>Github</h4>
            
            <a href='https://github.com/auqid'>Projects Here</a>

          </article>
          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+918899276500</h5>

          </article>
          <article className='contact__option'>
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            
            <a href='https://linkedin.com/auqidirfan/'>Message Here</a>

          </article>

        </div>
        <form actions=""></form>

      </div>
      
    </section>
  )
}

export default Contact
