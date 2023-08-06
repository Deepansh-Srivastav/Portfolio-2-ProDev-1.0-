import React from 'react'
import NavBar from './HOME/NavBar/NavBar'
import Product from './PRODUCT/Product'

const URLMonitor = [
  "https://m.media-amazon.com/images/I/71Sqk+ry2oL._AC_UY327_FMwebp_QL65_.jpg",


  "https://m.media-amazon.com/images/I/71wRe7xkcSL._AC_UY327_FMwebp_QL65_.jpg",


  "https://m.media-amazon.com/images/I/71nAn539hZL._AC_UY327_QL65_.jpg"
]
const discriptionMonitor = [


  "Samsung 24-inch (60.46cm) FHD Flat Monitor, IPS, 75 Hz, Bezel Less Design, AMD FreeSync, Flicker Free, HDMI, D-sub, (LS24C310EAWXXL, Black)",

  "Acer HA240Y 23.8 Inch (60.45 Cm) 1920 x 1080 Pixels Full HD IPS Ultra Slim (6.6Mm Thick) LCD Monitor with LED Back Light Technology I Frameless Design I AMD Free Sync I White",

  "Samsung 27-inch(68.5cm) FHD, 1800R Curved Monitor, 75Hz, VA Panel, Slim Design, AMD FreeSync, Flicker Free, HDMI, Audio Ports (LS27C360EAWXXL, Black)",

]
const priceMonitor = [
  "₹12,990",

  "₹10,550",

  "₹12,099",

]


const Monitor = () => {
  return (
    <div className='header'>
        <NavBar/>
      <h1>These are all the Monitors available</h1>

      <Product path={URLMonitor[0]} text={discriptionMonitor[0]} price={priceMonitor[0]} />
      <Product path={URLMonitor[1]} text={discriptionMonitor[1]} price={priceMonitor[1]} />
      <Product path={URLMonitor[2]} text={discriptionMonitor[2]} price={priceMonitor[2]} />
    </div>
  )
}

export default Monitor
