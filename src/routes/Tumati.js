import React from 'react'
import { Container } from 'reactstrap'
import { BiPhone } from 'react-icons/bi'

const navLinks = [
  {
    display: 'Home',
    url:'#'
  },
  {
    display: 'About',
    url:'#'
  },
  {
    display: 'Courses',
    url:'#'
  },
  {
    display: 'Pages',
    url:'#'
  },
  {
    display: 'Blog',
    url:'#'
  },
  {
    display: 'Testimonials',
    url:'#'
  },
]

function Tumati() {
  return (
    <section>
      <Container>
        <div className='navigation'>
          <div className='logo'>
            <h2>
              <i class='ri-pantone-line'>Tumati</i>
            </h2>
          </div>

          <div className='t-nav'>
            <div className='t-nav_menu'>
              <ul className='t-nav_list'>
                {
                  navLinks.map((item, index)=>(
                    <li key={index} className='t-nav_item'>
                    <a href={item.url}>{item.display}</a>
                    </li>
                  ))}               
              </ul>
            </div>

            <div className='nav_right'>
              <p>
                <BiPhone/> +254 791351887
               
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Tumati