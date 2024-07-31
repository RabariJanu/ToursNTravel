import React  from 'react'
import '../styles/PagesStyles/Packages.css'
import {Link} from 'react-router-dom'
import { IoPodium } from 'react-icons/io5'
import {PackagesData} from '../scripts/packageDetail'


const Packages = () => {
 
// const PackagesData = [


//   {
//     id: 1,
//     img: 'img31.webp',
//     location: 'Paris, France',
//     stars: 4.5,
//     description: 'Experience the romantic city of lights.',
//     rate: '$1200'
//   },
//   {
//     id: 2,
//     img: 'img32.webp',
//     location: 'kyoto, Japan',
//     stars: 4.7,
//     description: 'Explore the beautiful temples and gardens.',
//     rate: '$1500'
//   },
//   {
//     id: 3,
//     img: 'img33.webp',
//     location: 'New York, USA',
//     stars: 4.3,
//     description: 'Enjoy the bustling streets and skyline.',
//     rate: '$1000'
//   },
//   {
//     id: 4,
//     img: 'img34.webp',
//     location: 'Goa, India',
//     stars: 4.6,
//     description: 'Enjoy scenic beaches and vibrant nightlife.',
//     rate: '$850'
//   },
//   {
//     id: 5,
//     img: 'img35.webp',
//     location: 'Sydney, Australia',
//     stars: 4.8,
//     description: 'Visit the iconic Opera House and beaches.',
//     rate: '$1400'
//   },
//   {
//     id: 6,
//     img: 'img36.webp',
//     location: 'Rome, Italy',
//     stars: 4.4,
//     description: 'Explore ancient ruins and vibrant culture.',
//     rate: '$1100'
//   },
//   {
//     id: 7,
//     img: 'img37.webp',
//     location: 'Bali, Indonesia',
//     stars: 4.7,
//     description: 'Relax on beautiful beaches and resorts.',
//     rate: '$900'
//   },
//   {
//     id: 8,
//     img: 'img38.webp',
//     location: 'Barcelona, Spain',
//     stars: 4.5,
//     description: 'Enjoy stunning architecture and nightlife.',
//     rate: '$1250'
//   },
//   {
//     id: 9,
//     img: 'img39.webp',
//     location: 'Dubai, UAE',
//     stars: 4.6,
//     description: 'Experience luxury shopping and desert safaris.',
//     rate: '$1600'
//   },
//   {
//     id: 10,
//     img: 'img40.webp',
//     location: 'Phuket, Thailand',
//     stars: 4.3,
//     description: 'Enjoy vibrant nightlife and scenic beaches.',
//     rate: '$850'
//   },
//   {
//     id: 11,
//     img: 'img41.webp',
//     location: 'Reykjavik, Iceland',
//     stars: 4.8,
//     description: 'Witness stunning natural landscapes and geysers.',
//     rate: '$1800'
//   },
//   {
//     id: 12,
//     img: 'img42.webp',
//     location: 'Santorini, Greece',
//     stars: 4.7,
//     description: 'Experience beautiful sunsets and white-washed buildings.',
//     rate: '$1350'
//   },
// ];



//  const getPlacesData = async (type, sw, ne) => {
//   try {
//     const { data: { data } } = await axios.get(`'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary`, {
//       params: {
//         tr_longitude: 'ne.lat',
//         tr_latitude: 'ne.lag',
//         bl_longitude: 'sw.lag',
//         bl_latitude: 'sw.lat'
//       },
//       headers: {
//         'x-rapidapi-key': '70dfe45e15msh9a7d7003f72165fp17fdd7jsn41868fa569d6',
//         'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//       }
//     });

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
          



  return (

   <div className="pkgPage">
        <div className="pkg-Img">

           <img src="pakage3.jpg" alt="" />

         <div className="pkg-info">
         <h1>Travel Places </h1>
          <p>"Unleash your wanderlust and explore the world in style without breaking the bank! Our travel packages offer incredible value, allowing you to experience world-class destinations without sacrificing on comfort or must-have experiences.  Whether you crave relaxation on pristine beaches or adventures in bustling cities, we have a package for you.  Unwind in beautiful destinations, discover hidden gems, and create lasting memories – all at a price that makes travel dreams a reality."</p>
         </div>

        </div>

    <h1 className='h1'> Our Travel Trips</h1>
    
      

    <div className="pkgs">
          {
            PackagesData.map(packages=>{
                return(
                  <Link to={`/packages/${packages.id}`} className="pkgCard"  state={{pkg: packages }} key={packages.id} >
                    <div className="pkgCardImg">
                        <img src={packages.smallImg} alt="" />
                    </div>

                      <div className="pkgCardInfo">
                        <div className="pkgLocation">
                          <h2>{packages.location}</h2>
                          <p>★{packages.stars}</p>
                        </div>
                        <p className='pkgDsk'>{packages.description}</p>
                        <div className="pkgPrice">
                          <button className='pkgBtn'>Start Trip</button>
                        </div>
                      </div>

                  </Link>
                )
            })
          }
      </div>

  
   </div>
  )
}

export default Packages



