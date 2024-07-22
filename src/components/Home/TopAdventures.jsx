
import React from 'react'
import '../../styles/Home/TopAdventures.css'

const adventurePlaces = [
  {
    imgSrc: "img25.webp",
    title: "Queenstown, New Zealand",
    description: "The adventure capital of the world, Queenstown offers bungee jumping and jet boating among stunning landscapes."
  },
  {
    imgSrc: "img26.webp",
    title: "Interlaken, Switzerland",
    description: "Nestled between two lakes and surrounded by the Alps, Interlaken is perfect for paragliding, skydiving, and canyoning."
  },
  {
    imgSrc: "img27.webp",
    title: "Cape Town, South Africa",
    description: "A diverse adventure destination offering shark cage diving, paragliding, and hiking up Table Mountain."
  },
  {
    imgSrc: "img28.webp",
    title: "Moab, Utah, USA",
    description: "Famous for its red rock landscapes, Moab offers rock climbing, mountain biking, and off-roading adventures."
  },
  {
    imgSrc: "img29.webp",
    title: "Cairns, Australia",
    description: "Gateway to the Great Barrier Reef, Cairns is ideal for scuba diving, snorkeling, and skydiving over the reef."
  },
  {
    imgSrc: "img30.webp",
    title: "Banff, Canada",
    description: "Located in the heart of the Canadian Rockies, Banff offers skiing, snowboarding, and hiking with breathtaking views."
  }
];

const TopAdventures = () => {
  return (

    <div className="allConta">
      <div className="adtureHead">
        <h1>Top Adventures</h1>
      </div>
    <div className="TopAture">
      {adventurePlaces.map((place, index) => (
        <div className="adventureCards" key={index}>
          <div className="adtureImg">
            <img src={place.imgSrc} alt={place.title} />
          </div>
          <div className="adtureCont">
            <h4>{place.title}</h4>
            <p>{place.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TopAdventures;
