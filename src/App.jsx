import React from 'react'
import Parent from './Components/Parent/Parent'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import CounterContext from './Components/Context/CounterContext'


export default function App() {
  return (
    <>

      <CounterContext>

        <Home />
        <About />
        
      </CounterContext>



    </>
  )
}
