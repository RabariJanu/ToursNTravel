import React from 'react'
import '../../styles/Home/GetStart.css'
import { Link } from 'react-router-dom'



const GetStart = () => {
  return (
    <div className='getStart'>
        <h1 className='gsH'>Prepare yourself & let's explore</h1>
        <h1 className='gsH'>The beauty of the world</h1>
        <p className='gsP'>We have many special offers for you.</p>
         <Link to="/packages"><button className='gsBtn'>Get Started</button></Link>
        </div>
  )
}

export default GetStart