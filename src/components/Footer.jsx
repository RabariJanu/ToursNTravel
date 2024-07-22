

import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'> 
          <video autoPlay muted loop className='video'>
     <source src="video.mp4" type="video/mp4" />
     </video>

    <div className="secContent">
      <div className="contactDiv ">

         <div className="contactText"  >
          <small> KEEP IN TOUCH </small>
          <h2> Travel with us</h2>
           </div>

           <div className="inputFooter ">
          <input type="text" placeholder='Enter email address' />
           <button className='sendBtn ' type='submit'>
             SEND 
            </button>
           </div>

      </div>
      </div>

         <div className="container">

                   <div className='grid'>

                     <div>
                       <h1>Travel.</h1>
                       <p>Explore the world with us! Discover amazing destinations, unique experiences, and unforgettable memories. Start your journey today with us</p>
                       <br/>

                       <div className="flex">
                         <FaLocationArrow />
                         <p>Ahmedabad ,Gujarat</p>
                       </div>

                       <div className="flex">
                         <FaMobileAlt/>
                         <p>+123 456 789</p>
                       </div>

                       <div >
                        <a href="https://www.facebook.com"target='_blank' className='flexicon'><FaFacebook /></a>
                         <a href="https://www.instagram.com" target='_blank' className='flexicon'><FaInstagram/></a>
                        <a href="https://www.facebook.com" target='_blank' className='flexicon'><FaFacebook /></a>
                         <a href="https://www.linkedin.com" target='_blank' className='flexicon'><FaLinkedin /></a>
                       </div>
                     </div>
                 </div>

                 
                  <div className="our">

                       <div className="one">
                             <span>Services</span>
                                  <a href="#"><FaAngleRight />Hotel</a>
                                   <a href="#"><FaAngleRight />Flight</a>
                                   <a href="#"><FaAngleRight />Insurence</a>
                                   <a href="#"><FaAngleRight />Medical</a>
                         </div>
     

                           <div className="two">
                               <span>Last Moment</span>
                               <a href="#"><FaAngleRight />New York</a>
                               <a href="#"><FaAngleRight />Tokyo</a>
                               <a href="#"><FaAngleRight />Toronto</a>
                               <a href="#"><FaAngleRight />Indonesia </a>

                           </div>

                           <div className="three">
                                 <span>Our Service </span>
                                  <a href="#"><FaAngleRight />Discount</a>
                                 <a href="#"><FaAngleRight />Membership</a>
                                 <a href="#"><FaAngleRight />Offers</a>
                                 <a href="#"><FaAngleRight />Free travel </a>

                           </div>
                     </div>
           </div>
   
     </footer>
   )
 }

 export default Footer
