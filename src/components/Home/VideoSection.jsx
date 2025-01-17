import React from 'react'
import '../../styles/Home/VideoSection.css'
import { Link } from 'react-router-dom'

const VideoSection = () => {
  return (
    <div className="HomeVideoDiv">
        <video autoPlay muted loop className='Homevideo'>
     <source src="video2.mp4" type="video/mp4" />
     </video>

     <div className="video-overlay">
     <h1>Discover Your Next Adventure</h1>
        <p>
          Uncover hidden gems and explore breathtaking destinations. Start your journey with us and create unforgettable memories.
        </p>
      <Link to="/packages">  <button className="explore-button">Explore Now</button></Link>
     </div>
    </div>
  )
}

export default VideoSection