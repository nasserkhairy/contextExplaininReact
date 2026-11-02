import React, { useState } from 'react'
import ParentStyle from './Parent.module.css'
import About from '../About/About';
import Home from '../Home/Home';

export default function Parent(props) {


  const [counter, setCounter] = useState(0);

  return (
    <>

      <div>
        <h1 className='text-center bg-primary'>Parent Page</h1>

     
      </div>

    </>
  )
}
