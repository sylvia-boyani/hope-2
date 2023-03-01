import React from 'react'
import video from '../assets/video1.mp4'
import './Home.css'


function Home() {
  return (
    <div>
     <div id='overlay'>
     <video id ="vida" src={video} autoPlay loop muted />
     </div>
      <div className="container header_container">
        <h5>Hello, Welcome to</h5>
        <h1>Tumaini Ministries Centre</h1>
        <h2><i>You have been made clean already by the teaching I have given you.</i></h2>
        <h2><i>JOHN 15:3</i></h2>
        <h3 className= "text-light">Needing Jesus Christ Together</h3>
        {/* <img id ="logo" src={tuma} alt="" /> */}
        {/* <HeaderSocial /> */}
        
      </div>
    </div>
  )
}

export default Home
