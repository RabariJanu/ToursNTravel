import React from 'react';
import '../../styles/Home/TopExperiences.css';

const TopExperiences = () => {

  const topexperience = [
    {
      id:1,
    img: "img16.webp",
    place: "Reykjavik",
    address: " Iceland"
    },
    {
      id: 2,
      img: "img17.webp",
    place: "Maldives",
    address: "Maldives"
    },
    {
      id: 3,
      img: "img18.webp",
      place: "Greek Islands",
      address:  "Greece"
     
    },
    {
      id: 4,
      img: "img19.webp",
      place: "Alleppey",
      address: " Kerala, India"
    },
    {
      id: 5,
      img: "img20.webp",
    place: "Manali",
    address: "Himachal Pradesh India"
    },
    {
      id: 6,
      img: "img21.webp",
      place: "Rishikesh",
      address: "Uttarakhand,India"
    },
    {
      id: 7,
      img: "img22.webp",
    place: "Darjeeling",
    address: "West Bengal, India"
    },
    {
      id: 8,
      img: "img23.webp",
    place: "Goa",
    address: "Goa, India"
    },
    {
      id:9,
      img: "img24.webp",
    place: "Jaisalmer",
    address: "Rajasthan, India"
    }
    
  ];

  return (
    <div className="all">
      <div className="above">
        <h1>Top Experiences</h1>
        <h6>"Explore unforgettable experiences: thrilling adventures, serene escapes, cultural treasures, and breathtaking landscapes. Discover hidden gems, indulge in local cuisines, and immerse in vibrant traditions for a truly memorable journey."</h6>
      </div>

      <div className="topcards">
        {topexperience.map(experience => (
          <div key={experience.id} className="experience-card">
            <div className="experienceimg">
              <img src={experience.img} alt={experience.place} className="experienceimg" />
              <div className="overlay">
                <div className="experianceText">
                  <h3>{experience.place}</h3>
                  <p>{experience.address}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>    
    </div>
  );
};

export default TopExperiences;

