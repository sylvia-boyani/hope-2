import React, {useState} from 'react'
import './Gallery.css'

//video player
import { DefaultPlayer as video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

//media files
import img1 from '../assets/videos/baptism2.jpg'
import video1 from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'
import video4 from '../assets/videos/video4.mp4'
import video5 from '../assets/videos/video5.mp4'
import video6 from '../assets/videos/video6.mp4'
import video7 from '../assets/videos/video7.mp4'

function Gallery() {

  const [model, setModel] = useState(false);
  let data = [
    {
      id: 1,
      poster: 'img1',
      videoUri: 'video1',
    },
    {
      id: 2,
      poster: 'img1',
      videoUri: 'video2',
    },
    {
      id: 3,
      poster: 'img1',
      videoUri: 'video3',
    },
    {
      id: 4,
      poster: 'img1',
      videoUri: 'video4',
    },
    {
      id: 5,
      poster: 'img1',
      videoUri: 'video5',
    },
    {
      id: 6,
      poster: 'img1',
      videoUri: 'video6',
    },
    {
      id: 7,
      poster: 'img1',
      videoUri: 'video7',
    },
  ]
  return (
    <>
      <h1>Video Gallery</h1>
      <div className='gallery'>
         {data.map((item, index)=>{
            return(
              <div className='video' key={index}>
                 <div className='video-container'>
                   <video 
                    style={{width: '100%'}}
                    autoPlay={model}
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    poster={item.poster}
                    >
                      <source src={item.videoUrl} type='video/webm'/>
                    </video>
                   
                 </div>
              </div>
            )
         })}
      </div>
    </>
  )
}

export default Gallery