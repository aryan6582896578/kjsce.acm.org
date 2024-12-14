import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Team from './components/Team'
import Footer from './components/Footer'
import "./App.css"
import { Earth } from './components/Earth'

function App() {
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <div className=' container mx-auto'>
          <Navbar />
          <Earth />
          <AboutUs />
          <Team />
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App