import React from 'react'
import '../pagesstyles/About.css'

export const About = () => {
  return (
    <div className="aboutPage">
     <div className="aboutImg">

      <img src="about.jpg" alt="" />

      <div className="aboutCont">
        <h1>About Us</h1>
        <p>At Travel , we’re dedicated to making your travel experiences unforgettable. From exclusive deals to personalized itineraries, our app simplifies planning and uncovers the world’s best destinations. Explore with us today!</p>
      </div>

     </div>

     <div className="About-OurTeam">
          <h4>Our Team</h4>
          <p className='aboutTwo'>Meet our Team</p>
          <p className='aboutThree'>Passionate.Proactive.Expert</p>
          <p className='aboutFour'>We lead with care - our value - and shared passion for connecting the world</p>

          <div className="members">

        
         <div className="member1">
              <img src="img30.webp" alt="" />
              <div className="memberName">
                <h3>Rabari Janu </h3>
                <p>Co-Founder&CEO</p>
              </div>
            </div>
        
            <div className="member1">
              <img src="img30.webp" alt="" />
              <div className="memberName">
                <h3>Srushti Shah </h3>
                <p>Co-Founder&CEO</p>
              </div>
            </div>

            <div className="member1">
              <img src="img30.webp" alt="" />
              <div className="memberName">
                <h3>Rabari Janu </h3>
                <p>Co-Founder&CEO</p>
              </div>
            </div>

            <div className="member1">
              <img src="img30.webp" alt="" />
              <div className="memberName">
                <h3>Rabari Janu </h3>
                <p>Co-Founder&CEO</p>
              </div>
            </div>

          
          </div>
     </div>
    </div>
  )
}
