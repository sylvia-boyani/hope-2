import React from 'react'
import './AboutWho.css'
import first from '../assets/first.jpeg'
import {FaHistory} from 'react-icons/fa'
import {FcApproval} from 'react-icons/fc'
import {GiProgression} from 'react-icons/gi'

const About = () => {
  return (
    <section id= "About">
     <h5>Get to know</h5>
     <h2>About Us</h2>

     <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={first} alt="about us" />
        </div>
      </div>
       <div className="about_content">
        <div className= "about_cards">
          <article className="about_card">
            <FaHistory className="about_icon"/>
            <h5>Our History</h5>
            <small>Our Birth & Goal</small>
          </article>

          <article className='about_card'>
            <FcApproval className="about_icon"/>
            <h5>Mission Statement</h5>
            <small>Mission & Vision</small>
          </article>

          <article className='about_card'>
            <GiProgression className="about_icon"/>
            <h5>Projects</h5>
            <small>Current & Future projects</small>
          </article>

        </div>
        
          <h2>Our Vision</h2>
          <p>To rehabilitate slum dwellers and train them and 
             other young people for Christian living and ministry
            through our one year Discipleship program. Offering
            additional assistance in their spiritual or secular development
            for those who left the program. 
            To have a life changing 
            impact to slum dwellers through teams of young people who
            evangelize and plant independent churches in the slums of
             nairobi.
            To establish social ministries which will meet the needs of slum 
            dwellers as an act of Christian compassion and as a means to
            reach them with the gospel.</p>
            <h2>Our Mission</h2>
            <p>To establish leader-ships and fellowships of 
               Christian believers, healthy and stable spiritually, 
              socially, physically and psychologically in the slums
              and other areas of need.</p>
        
       </div>
     </div>
    </section>
  )
}

export default About;