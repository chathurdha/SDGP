import React from 'react'
import Navbar from '../navbar/Navbar'
import AboutUs from './Sections/AboutUs'
import ChooseUs from './Sections/ChooseUs'
import Organizations from './Sections/Organizations'
import PastEventsx from './Sections/PastEvents'
import Testimonials from './Sections/Testimonials'
import Hero from './Sections/Hero'

function Homepage() {
  return (
    <>
    <Navbar />
    <div className=''></div>
    <Hero />
      <AboutUs />
      <ChooseUs />
      <Organizations />
      <PastEventsx />
      <Testimonials />
    </>
  )
}

export default Homepage
