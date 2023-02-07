import React from 'react'
import './about.css';
import AboutMe from '../../assets/me-about.jpg'
import {FaAward,FaFolder} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMe} alt='about'/>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>

            <article className='about__card'>
              <FaFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>80+</small>
            </article>
          </div>
          <p>
          "People live their lives bound by what they accept as correct and true.
           That's how they define "reality". 
           But what does it mean to be "correct" or "true"? Merely vague concepts... 
           Their "reality" may all be a mirage. 
           Can we consider them to simply be living in their own world, shaped by their reality"


          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>


        </div>


      </div>
    </section>
  )
}

export default About
