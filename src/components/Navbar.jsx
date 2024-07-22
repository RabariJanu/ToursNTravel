import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
  <header className='navbar'>
   
    <div className="logo">

        <h1>Travel.</h1>
    </div>

    <div className="menu">
        <Link to={"/"}>Home</Link>
        <Link to={"/packages"}>Package</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact-us"}>Contact</Link>

    </div>
    <div>
      <button className='btn'>
        Book Now
      </button>
    </div>
  </header>
  )
}

export default Navbar