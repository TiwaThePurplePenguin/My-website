import React from 'react'
import Hero from '@/app/hero'
import Toursitview from './compents/toursitview'
import TiltCardSection from './compents/tiltCardSection'
import RoadmapSection from './compents/roadmapSection'
import PricingTable from './compents/PricingTable'
import Footer from './compents/Footer'

function page() {
  return (
    <div className='font-bold to-orange-400 '>
     <Hero/>
    <Toursitview/>
    <TiltCardSection/>
    <RoadmapSection/>
    <PricingTable/>
    <Footer/>
    </div>
  )
}

export default page
