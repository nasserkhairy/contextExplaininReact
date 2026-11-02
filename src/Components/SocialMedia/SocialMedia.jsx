import React, { useContext } from 'react'
import SocialMediaStyle from './SocialMedia.module.css'
import { CounterContextObj } from '../Context/CounterContext'
export default function SocialMedia() {

const {counter}=  useContext(CounterContextObj)
  return (
    <>

    <div className='bg-primary'>
        <h1>SocialMedia Page :  {counter}</h1>
    </div>
      
    </>
  )
}
