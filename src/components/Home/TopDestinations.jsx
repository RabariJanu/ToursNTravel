import React from 'react'
import { IoLocation } from "react-icons/io5";
import '../../styles/Home/TopDestinations.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "skyblue", borderRadius: "50%", padding: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fa fa-arrow-left" style={{ color: "white" }}></i>
    </div>
  );
}

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "skyblue", borderRadius: "50%", padding: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fa fa-arrow-right" style={{ color: "white" }}></i>
    </div>
  );
}


const TopDestinations = () => {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />,
  };

    

   const cardData = [
    {
        id: 1,
        img: "img1.jpeg",
        place: "Disneyland",
        address: "Tokyo, Japan"
    },
    {
        id: 2,
        img: "img2.jpeg",
        place: "Imagicaa",
        address: "Mumbai, India"
    },
    {
        id: 3,
        img: "img3.jpeg",
        place: "Universal Studios",
        address: "Los Angeles, California"
    },
    {
        id: 4,
        img: "img4.jpeg",
        place: "Ferrari World",
        address: "Dubai, UAE"
    },
    {
      id: 5,
      img: "img5.webp",
      place: "Santorini",
      address: "Greece"
  },
  {
      id: 6,
      img: "img6.webp",
      place: "Bali",
      address: "Indonesia"
  },
    {
      id: 7,
      img: "img7.webp",
      place: "Eiffel Tower",
      address: "Paris, France"
  },
  {
      id: 8,
      img: "img8.webp",
      place: "Grand Canyon",
      address: "Arizona, USA"
  },
  {
      id: 9,
      img: "img9.webp",
      place: "Great Wall",
      address: "China"
  },
  {
      id: 10,
      img: "img10.webp",
      place: "Sydney Opera House",
      address: "Sydney, Australia"
  },
  {
      id: 11,
      img: "img11.webp",
      place: "Machu Picchu",
      address: "Peru"
  },
  {
    id: 12,
    img: "img12.webp",
    place: "Rann of Kutch",
    address: "Gujarat"
},
{
  id: 13,
  img: "img13.webp",
  place: "Dwarkadhish Temple",
  address: "Dwarka, Gujarat"
},
{
  id: 14,
  img: "img14.webp",
  place: "Statue of Unity",
  address: "Kevadia, Gujarat"
},
]

  return (
    <div className="main">

    <div className="title">

      <div className="titleLeft">
        <h1>Top Destinations</h1>
        <h5>Let's Enjoy this Heaven on earth</h5>
      </div>

    <div className="titleRight">
<h5>"Explore diverse global destinations offering breathtaking landscapes, rich cultures, historic landmarks, and vibrant cityscapes for unforgettable travel experiences."</h5>    
</div>

    </div>
  <Slider {...settings}>
  {/* <div className='cardList'> */}

  {
    cardData.map(card => {
      return(
        <div className="card" key={card.id}>
          <div className="cardimg">
          <img src={card.img} className='img' alt=''/>
          </div>
  
          <div className="location">
            <h4>{card.place}</h4>
          <h6><IoLocation /> {card.address}</h6>
          </div>
  
      </div>
      )
    })
  }
  {/* </div> */}
  </Slider>
      
</div>
  )
}

export default TopDestinations