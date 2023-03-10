import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data=[
  {id:1,
   image: IMG1,
   title: 'Dynamic Expense Tracker Using React.',
   github: 'https://github.com/auqid',
   demo: 'https://github.com/auqid/01-starting-setup'

  },

  {id:2,
   image: IMG2,
   title: 'GPT-3 webpage FrontEnd Using React.',
   github: 'https://github.com/auqid',
   demo: 'https://github.com/auqid/gpt_jsm'
  
    },
  {id:3,
   image: IMG3,
   title: 'Mouse Control Using Hand Gestures Using AI.',
   github: 'https://github.com/auqid',
   demo: 'https://github.com/auqid/Mouse-Control-Using-Hand-Gestures'
    }



]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href ={github} className='btn' target='blank'>Github</a>
                  <a href ={demo} className='btn btn-primary' target='blank'>Live Demo</a>

                </div>
              </article>



            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
