import React from 'react'
import './Leaders.css'
import img from '../assets/bish.jpeg'
import im3 from '../assets/vc.jpeg'
import im4 from '../assets/James.jpg'
import im5 from '../assets/pronk.jpeg'


function Leaders() {
   return (
      <div className='leader'>
         <div data-aos="fade-right" className="lead-column">
            <div className='lead-img'>
               <img src={img} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-left" className="lead-column">
            <div className='lead-content'>
               <h3>Bishop Fred Ogutu Faradays</h3>
                  <h3>Ministry Leader</h3>
                  <p>We all have our strengths. I’ve perfected
                  mine so you can focus on yours. Get in touch
                  to find out how I can help.
                  We all have our strengths. I’ve perfected
                  mine so you can focus on yours. Get in touch
                  to find out how I can help.
                  We all have our strengths. I’ve perfected
                  mine so you can focus on yours. Get in touch
                  to find out how I can help.
                  to find out how I can help.
                  My business is more than just a job.
                  Each time I take on a new project,
                  I make sure it aligns with my core
                  set of values so I know I can deliver great results.
                  My curiosity makes me love learning, and added with my
                  perfectionism, I am able to come up with quality work.My business is more than just a job.
                  Each time I take on a new project,
                  I make sure it aligns with my core
                  set of values so I know I can deliver great results.
                  </p>
            </div>
         </div>

         <div data-aos="fade-left" className="lead-column">
            <div className='lead-content'>
               <p><h3>Pastor James Mburu</h3>
                  My business is more than just a job.
                  Each time I take on a new project,
                  I make sure it aligns with my core
                  set of values so I know I can deliver great results.
                  My curiosity makes me love learning, and added with my
                  perfectionism, I am able to come up with quality work.
                  My business is more than just a job.
                  Each time I take on a new project,
                  I make sure it aligns with my core
                  set of values so I know I can deliver great results.
                  My curiosity makes me love learning, and added with my
                  perfectionism, I am able to come up with quality work.</p>
            </div>
         </div>

         <div data-aos="fade-right" className="lead-column">
            <div className='lead-img'>
               <img src={im3} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-right" className="lead-column">
            <div className='lead-img'>
               <img src={im4} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-left" className="lead-column">
            <div className='lead-content'>
               <p>
                  <h3>Pastor Jameson Wanyama</h3>
                  Because I'm experienced, reliable,
                  and focused on results, I've had the
                  privilege of working with a host of fantastic clients.
                  Because I'm experienced, reliable,
                  and focused on results, I've had the Because I'm experienced, reliable,
                  and focused on results, I've had the Because I'm experienced, reliable,
                  and focused on results, I've had the
                  privilege of working with a host of fantastic clients.
                  privilege of working with a host of fantastic clients.
                  privilege of working with a host of fantastic clients.
                  
                  </p>
            </div>
         </div>


          <div data-aos="fade-left" className="lead-column">
            <div className='lead-content'>
               <p><h3>Pastor Liz Pronk</h3>
                  My business is more than just a job.
                  Each time I take on a new project,
                  I make sure it aligns with my core
                  set of values so I know I can deliver great results.
                  My curiosity makes me love learning, and added with my
                  perfectionism, I am able to come up with quality work.
                  My business is more than just a job.
                  Each time I take on a new project,
                  I make sure it aligns with my core
                  set of values so I know I can deliver great results.
                  My curiosity makes me love learning, and added with my
                  perfectionism, I am able to come up with quality work.</p>
            </div>
         </div>

         <div data-aos="fade-right" className="lead-column">
            <div className='lead-img'>
               <img src={im5} alt="about us" />
            </div>
         </div>         
      </div>
   )
}

export default Leaders;