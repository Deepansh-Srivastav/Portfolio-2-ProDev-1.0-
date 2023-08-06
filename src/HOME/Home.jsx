import React from 'react'
import "./Home.css"


import NavBar from './NavBar/NavBar'

const Home = () => {
  return (
    <div className='header'>
      <NavBar />

      <marquee direction="right" scrollamount='20'   >
      This is the home Page please select a category above to see the related product
      </marquee>



    </div >
  )
}

export default Home
