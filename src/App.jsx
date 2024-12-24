import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Event from './components/Event'
import Footer from './components/Footer'
import Team2 from './components/Team2'
import "./App.css"

function App() {
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <div className=' container mx-auto'>
          <Navbar />
          <Hero />
          <AboutUs />
          <Event />
          {/* <Team /> */}
          <Team2 />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App