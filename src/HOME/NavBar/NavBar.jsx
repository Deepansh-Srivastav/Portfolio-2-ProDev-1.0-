import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

import NavBarButton from './NavBarButton/NavBarButton'

const NavBar = () => {
  return (
    <div className='navBar'>
      <ul className='navList'>
        <Link to ="/">
        <NavBarButton tag="Home" />
        </Link>

        <Link to ="/SmartPhones">
        <NavBarButton tag="Smart-Phones" />
        </Link>

        <Link to ="/Monitors">
        <NavBarButton tag="Monitors" />
        </Link>

        <Link to ="/Laptop">
        <NavBarButton tag="Laptops" />
        </Link>
      </ul>
    </div>
  )
}

export default NavBar
