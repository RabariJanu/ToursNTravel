import React from 'react'
import '../../styles/Home/SearchBar.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';



const SearchBar = () => {
  return (
    <main>
    <video autoPlay muted loop className='media'>
     <source src="video3.mp4" type="video/mp4" />
     </video>
     
      
     <div className="videoText">
      <div className='top'>
            <h1 className="small">Time to Travel</h1>  
      

      {/* <div className="inputDiv">

        <div className="dest margin">
          <label>Search your destination
          <div className="Input">
          <input type="text"  placeholder='Enter your destination'/>
          </div>
          </label>
        </div>

        <div className="date margin">
              <label>Search  date
                <div className="Input">
                <input type="date" />
                </div>
              </label>
      </div>
     

      <div className="options margin">
       <label>Activity Preferences</label>
       <div className="Input">
       <select>
        <option value="">Select Type</option>
        <option value="Adventure">Adventure</option>
        <option value="Relaxation">Relaxation</option>
        <option value="Cultural">Cultural</option>
        <option value="Romantic">Romantic</option>
        <option value="Nature">Nature</option>
       </select>
       </div>
      </div>

      <button className="search-button">Search</button>

      </div> */}


      <div className="icons">
     <div className="left">
     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='icon' />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='icon' />
            </a>
     </div>

        <div className="right">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='icon' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='icon' />
            </a>
        </div>
        </div> 
        </div>

        <Link to="/packages">
      <button className="search-button">Explore Now</button>
      </Link>

      </div> 
    </main>
  )
}

export default SearchBar
