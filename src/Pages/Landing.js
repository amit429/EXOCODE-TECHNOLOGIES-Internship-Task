import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import IntroPhotos from '../Components/IntroPhotos'
import Values from '../Components/Values'
import Listings from '../Components/Listings'

export default function Landing() {
  return (
    <>
        <Navbar/>
        <Header
          title="Careers"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit 
          nterdum ullamcorper sed pharetra sene."
          button="Browse Open Positions"
        />
        <IntroPhotos/>
        <Values/>
        <Listings/>
    
    </>
  )
}
