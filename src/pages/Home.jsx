import React from 'react'
import SearchBar from '../components/Home/SearchBar'
import TopDestinations from '../components/Home/TopDestinations'
import TopExperiences from '../components/Home/TopExperiences'
import TopAdventures from '../components/Home/TopAdventures'
import Bagpack from '../components/Home/Bagpack'
import VideoSection from '../components/Home/VideoSection'
import GetStart from '../components/Home/GetStart'

const Home = () => {
  return (
    <>
        <SearchBar/>
        <TopDestinations/>
        <Bagpack />
        <TopExperiences/>
        <VideoSection />
        <TopAdventures/>
        <GetStart />
    </>
  )
}

export default Home