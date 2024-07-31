import React from 'react'
import '../styles/PagesStyles/About.css'

export const About = () => {
  const globalSections = [
    {
        id:1,
        title: "Global leader in travel",
        paragraph: "Travel is all about freedom. So it makes sense that planning and booking your trip should be simple, not a chore. We know you're looking for the best prices and maximum flexibility to choose what's right for you."
        
    },
    {    
      id:2,
        title: "Effortless travel planning for everyone",
        paragraph: "We do the hard work so our travelers don’t have to. We use our data, insights, and tech innovation to make the complex simple, so you can get back to the more important stuff - stress-free planning, booking, and traveling."
 
    },
    {    id:3,
        title: "Always unbiased, honest, and transparent",
        paragraph: "As travelers ourselves, we always lead with honesty and transparency - and we hold our partners to the same high standards. That means no hidden fees, no secret charges, no added cost to you, so we always remain unbiased."
 
    },
    {   id:4,
        title: "Innovative solutions for modern travelers",
        paragraph: "We constantly innovate to bring you the latest and greatest in travel technology. Our solutions are designed to provide you with a seamless and modern travel experience. From intuitive booking interfaces to real-time updates, we ensure your journey is smooth and hassle-free."

    },
    {   id:5,
        title: "Committed to sustainability and community",
        paragraph: "We believe in responsible travel that benefits both the environment and local communities. Our sustainable travel initiatives aim to minimize our footprint and promote positive impact. Join us in our commitment to preserving the beauty of our planet while experiencing the richness of diverse cultures."

    }
];

  return (
    <div className="aboutPage">
     <div className="aboutImg">

      <img src="about.jpg" alt="" />

      <div className="aboutCont">
        <h1>About Us</h1>
        <p>At Travel , we’re dedicated to making your travel experiences unforgettable. From exclusive deals to personalized itineraries, our app simplifies planning and uncovers the world’s best destinations. Explore with us today!</p>
      </div>

     </div>

    <div className="vision">
      
      <div className="visionPara">
        <h1>Our Vision</h1>
        <p>Our vision is to revolutionize the way people experience travel by offering personalized, memorable, and seamless journeys. We believe that travel is not just about reaching a destination but about immersing oneself in new cultures, meeting new people, and creating unforgettable memories. Our commitment is to curate unique travel experiences that cater to the diverse preferences and interests of our clients. We aim to inspire and empower travelers to explore the world with confidence, knowing that every detail of their trip has been thoughtfully planned and executed.</p>
      </div>
      <div className="visionImg">
        <img src="vision.avif" alt="" />
      </div>
    </div>

    <div className="vision">
    <div className="visionImg">
        <img src="mission.webp" alt="" />
      </div>
      <div className="visionPara">
        <h1>Our Mision</h1>
        <p>Our mission is to provide exceptional travel experiences by focusing on personalized service, innovative solutions, and attention to detail.</p>
          <p> <ul>  We aim to:

<li>Deliver Excellence: Ensure that every aspect of your journey is meticulously planned and executed.</li>
 <li>Promote Responsible Tourism: Encourage sustainable and ethical travel practices.</li>
<li>Foster Connections: Create meaningful interactions between travelers and the destinations they visit.</li>
</ul></p>        
      </div>
      
    </div>



    <div className="globalCard">
    {globalSections.map((data) => (
        <div key={data.id} className="global">
            <div className="globalLeft">
                <h1>{data.title}</h1>
            </div>
            <div className="globalRight">
                <p>{data.paragraph}</p>
            </div>
        </div>
    ))}
</div>

     <div className="About-OurTeam">
          <h4>Our Team</h4>
          <p className='aboutTwo'>Meet our Team</p>
          <p className='aboutThree'>Passionate.Proactive.Expert</p>
          <p className='aboutFour'>We lead with care - our value - and shared passion for connecting the world</p>

          <div className="members">
                <div className="teamMember">
                  <img src="srusti2.jpg" alt="" />
                  <h3>Srushti Shah</h3>
                  <p>CEO</p>
                </div>

        
                <div className="teamMember">
                  <img src="c&v.jpg" alt="" />
                  <h3>Chirag&Vaishali Shah</h3>
                  <p>COO</p>
                </div>
      
                <div className="teamMember">
                  <img src="h&b.jpg" alt="" />
                  <h3>Bhavna&Hirabhai Rabari</h3>
                  <p>CFO</p>
                </div>
                <div className="teamMember">
                  <img src="janu.jpg" alt="" />
                  <h3>Janu Rabari</h3>
                  <p>Manager</p>
                </div>
        
          </div>
     </div>

   

    </div>
  )
}
