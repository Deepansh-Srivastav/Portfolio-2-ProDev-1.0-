import React from 'react'
import "./NavBarButton.css"

// import { Link } from 'react-router-dom'
const NavBarButton = ({tag}) => {
  return (
    <>
        <li>
            <button className='navBtn'>{tag}</button>
        </li>
    </>
  )
}

export default NavBarButton
