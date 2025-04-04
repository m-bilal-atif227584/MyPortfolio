import React, { useState, Suspense } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

// const Stars = React.lazy(() => import("./components/canvas/Stars"));
// const LazyTech = React.lazy(() => import("./components/Tech"));

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-[#050816]">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero />
      </div>
      <About/>
      {/* <Experience/> */}
      {/* <Suspense fallback={<div></div>}> */}
        <Tech />
      {/* </Suspense> */}
      <Works/>
      {/* <Feedbacks/> */}
      <div className='relative z-0'>
        <Contact/>
        {/* <Suspense fallback={<div></div>}> */}
        <StarsCanvas/>
        {/* </Suspense> */}
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
