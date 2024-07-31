import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../styles/PagesStyles/Blog.css'


const Blog = () => {

  const [data, setData] = useState()
  

  useEffect(()=> {
    async function getData () {
      const blogData = await axios.get(`https://newsapi.org/v2/everything?q=travel&apiKey=${process.env.REACT_APP_API_KEY}`)   
      // console.log(blogData.data.articles.slice(0,5))
      setData(blogData.data.articles.slice(0,15))
    }
    getData()
  }, [])
  console.log(data);

  function truncateString(str) {
    //let regex = /(?=^.{num}).+/, while num is the given parameter: 
     let regex = /\[\+\d+ chars\]/g;
      return str.replace(regex, "");
    }
  return (
    <>
    <div className="Blogstart">
          <img className='startImg' src="Blog.jpg" alt="" />
          <div className="BlogstartText">
            <h1>Welcome to Travel Blog!</h1>
            <p>Discover inspiring destinations, travel tips, and unforgettable experiences. Join us on this journey and make every trip an adventure. Happy exploring!</p>
          </div>
    </div>
      <ul>
     
        {data ? data.map(article => (
          <li className='blogLine'>
            <img className='blogImg'  src={article.urlToImage} alt={article.description} />

           <div className="blogData">

           <h3 className='blogTitle'>{article.title}</h3>
            <span className='blogDate'>{new Date(article.publishedAt).toLocaleDateString()}</span>
            <p className='para'>{truncateString(article.content)} <Link to={article.url} target='_blank' className='BlogParaLink' >Read More</Link></p>
            
           </div>
          </li>
        )) : "Loading..."}
      </ul>
    </>
  )
}

export default Blog