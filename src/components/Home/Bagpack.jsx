import React from 'react'
import '../../styles/Home/Bagpack.css'

const Bagpack = () => {
  return (
    <div className="bagpack">

        <div className="bag">
            <img src="bag.avif" alt="" />
        </div>

        <div className="cont">
            <div className='quote'>
            <h3>Let's Pack Your Bags!</h3>
            <p>Are you ready to embark on your next adventure? Pack your bags, gather your essentials, and get ready to explore new horizons. Every journey starts with a single step, so let's make it memorable!</p>
            </div>

            <div className="description">
            <h3>Why Pack with Us?</h3>
            <p>
              Traveling light yet smart is the key to a stress-free journey. Our carefully curated packing guide ensures that you
              have everything from your must-have gadgets to those little comforts that make travel enjoyable.
            </p>
          </div>

        </div>

    </div>
  )
}

export default Bagpack