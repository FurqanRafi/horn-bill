import React from 'react'
import HeroSection from '../HeroSection'
import Welcome from '../Welcome'
import Partner from '@/Components/Partner'
import Who from '../Who'
import Services from '../Services'
import Commit from '../Commit'
import Contact from '../Contact'
import Footer from '../Footer'





const Home = () => {
  return (
    <div  >
        <HeroSection />
        <Welcome />
        <Partner />
        <Who />
        <Services />
        <Commit />
        <Contact />
        

    </div>
  )
}

export default Home