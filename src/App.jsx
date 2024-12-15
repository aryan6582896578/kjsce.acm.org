import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import "./App.css"
import { Earth } from './components/Earth'

function App() {
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <div className=' container mx-auto'>
          <Navbar />
          <Hero/>
          <Earth />
          <AboutUs />
          <ContactUs/>
          <Team />
          <Footer/>
          {/* <div className="h-64 w-20 bg-blue-600 blur-[90px] absolute top-64 mt-96 left-0"></div> div for blur blue */}

        </div>
      </div>
    </>
  )
}

export default App