import React from 'react'
import NavbarStyle from './Navbar.module.css'
import SocialMedia from '../SocialMedia/SocialMedia'
export default function Navbar() {
  return (
    <>
      <div className=''>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <SocialMedia  />
          </li>

        </ul>
      </div>


    </>
  )
}
