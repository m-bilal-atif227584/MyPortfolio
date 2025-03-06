import React, { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-[#050816]">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      {/* <Experience/> */}
      <Tech/>
      <Works/>
      {/* <Feedbacks/> */}
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
