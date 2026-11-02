import React from 'react'
import HomeStyle from './Home.module.css'
import Navbar from '../Navbar/Navbar'
export default function Home() {
  return (
    <>

      <div className='border border-2 border-black text-center mb-5'>
        <Navbar  />
       <div className='text-center bg-danger-subtle'>
         <h1>Home Page </h1>
       </div>
      </div>

    </>
  )
}
