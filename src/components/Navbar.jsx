import React from 'react'
// import '../styles/Navbar.css'
import '../styles/Navbar.css'
import { NavLink} from 'react-router-dom'
import { MdTravelExplore } from "react-icons/md";



const Navbar = () => {
  const menu = [
    {link: "/", page: "Home"},
    {link: "/packages", page: "Places"},
    {link: "/about", page: "About"},
    {link: "/blog", page: "Blog"},
  ]
  return (
  <header className='navbar'>
   
    <div className="logo">

        <h1><MdTravelExplore/>Travel.</h1>
    </div>

    <div className="menu">
      {menu.map((page) => (
        <NavLink  to={page.link} className={({isActive}) => isActive ? "active" : undefined} >{page.page}</NavLink>
      ))}
    </div>
    <div>
      <NavLink to="/packages"><button className='btn'>
        Book Now
      </button></NavLink>
  
    </div>
  </header>
  )
}

export default Navbar