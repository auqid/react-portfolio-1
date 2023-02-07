import React from 'react'
import './about.css';
import AboutMe from '../../assets/pngwing.com.png'
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
              <small> &lt;1 Year</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Friends & Family</small>
            </article>

            <article className='about__card'>
              <FaFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>10</small>
            </article>
          </div>
          <p>
          "I am someone who is just starting out with the React JavaScript library for building user interfaces. 
      
           My main goal as a React developer fresher is to become proficient in the library and gain a solid understanding of how to build and maintain web applications using React."


          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>


        </div>


      </div>
    </section>
  )
}

export default About
