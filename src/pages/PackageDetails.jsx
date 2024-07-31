import React  from 'react'
import { useParams, useLocation ,Link } from 'react-router-dom'
import '../styles/PagesStyles/PackageDetails.css'


const PackageDetails = () => {

    const {state} = useLocation()

    const pkg = state.pkg
  
    
    
    return (
        <div className="pkgDetails">
          
            <h1>{pkg.location} Trip Details</h1>

                  
                    <div className="oneDetail">
                        <div className="oneCardImg">
                             <img src={pkg.largeImg}  />
                         </div>

                            <div className="oneNameData">

                                <div className="oneNameLocation">
                                    <h2>{pkg.location}</h2>
                                    <p>★★★★★{pkg.stars}</p>
                                </div>

                                <div className="desc">
                                    <p>{pkg.detailDesc}</p>
                                    <h2>Places to Visit In {pkg.location}</h2>
                                    <p>{pkg.thing}</p>
                                </div>
                            </div>

                            <div className="linkDetails">
                                    <div className="hotel">
                                    <Link to={pkg.hotelurl} className="hotelBtn" target="_blank" >
                                            Hotels Trip Advisor
                                    </Link>
                                    </div>

                                    <div className="resturant">
                                    <Link to={pkg.resturanturl} target='_blank' className="resturantBtn">
                                    Resturants Trip Advisor
                                    </Link>
                                    </div>

                                    <div className="flight">
                                    <Link to={pkg.flighturl} target='_blank' className="flightBtn">
                                    Flight Trip Advisor
                                    </Link>
                                    </div>
                            </div>
                     </div>
                          
            </div>
    
      );
}

export default PackageDetails