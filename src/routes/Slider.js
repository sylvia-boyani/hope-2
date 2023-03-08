import React from 'react'
import './Slider.css'
import Salvador from '../assets/salvador.jpg'
import City from '../assets/city.jpg'
import Tumahouse from '../assets/tuma-house.jpeg';
import board from '../assets/board.jpeg'
import ubc from '../assets/ubc.jpg'

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Slider = () => {
  return (
    <section id='testimonials'>
      <Swiper className='container_testimonials-container'
            
       modules={[Pagination, Autoplay]} 
       spaceBetween={40} 
       slidesPerView={1} 
       autoplay={true}
       pagination={{ clickable: true }} 
      >     

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={Tumahouse} alt="" />
          </div>
            <h5 className='client_name'>Men's Conference</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry.
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={board} alt="" />
          </div>
            <h5 className='client_name'>Youth Conference</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry.
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={City} alt="" />
          </div>
            <h5 className='client_name'>Concerts</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. 
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={ubc} alt="" />
          </div>
            <h5 className='client_name'>Women's Conference</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry.
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={Salvador} alt="" />
          </div>
            <h5 className='client_name'>Annual General Meeting</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry.
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">

      

          <div className='client_avatar'>
            <img src={ubc} alt="" />
          </div>
            <h5 className='client_name'>Community Outreach</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry.
            </small>
          
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Slider;