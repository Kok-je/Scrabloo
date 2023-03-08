import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Height from './components/Height'
import HeightComparison from './components/HeightComparison'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Height />
      <HeightComparison />
    </div>
  )
}

export default App
