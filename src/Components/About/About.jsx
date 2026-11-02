import React, { useContext } from 'react'
import AboutStyle from './About.module.css'
import { CounterContextObj } from '../Context/CounterContext'
export default function About() {

  const { counter,inc,dec } = useContext(CounterContextObj)

  return (
    <>


      <div className='border border-2 border-black bg-danger-subtle'>
        <div className='text-center bg-secondary-subtle'>
          <h1>About Page  : counter  = {counter}</h1>       </div>

        <button onClick={inc} className='btn btn-info' >+</button>
        <button onClick={dec} className='btn btn-info' >-</button>
      </div>
    </>
  )
}
