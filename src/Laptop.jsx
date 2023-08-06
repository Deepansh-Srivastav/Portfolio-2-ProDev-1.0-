import React from 'react'
import NavBar from './HOME/NavBar/NavBar'
import Product from './PRODUCT/Product'


const URLLaptop = [
    "https://m.media-amazon.com/images/I/81yL4BWuwnL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/716tZo4diQL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71l4M2y8zwL._AC_UY327_FMwebp_QL65_.jpg",

]
const discriptionLaptop = [
    "Acer Nitro 5 AN515-58 Gaming Laptop 12th Gen Intel Core i7-12650H NVIDIA GeForce RTX 3070Ti 8GB Laptop Graphics 15.6 QHD 165Hz 3ms IPS Display 16GB DDR4 RGB Keyboard Windows 11 Home",
    "ASUS ROG Strix Scar 15 (2022), 15.6 (39.62 cm) WQHD 240Hz/3ms, Intel Core i9-12900H 12th Gen, 8GB RTX 3070 Ti, Gaming Laptop (32GB/1TB SSD/Windows 11/Office 2021/Black/2.3 Kg), G533ZWZ-LN136WS",
    "MSI Cyborg 15, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (16GB/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 2050, GDDR6 4GB/Black/1.98Kg), A12UCX-264IN",

]
const priceLaptop = [
    "₹1,04,990",
    "₹2,24,990",
    "₹67,990",
    "₹53,999 "
]

const Laptop = () => {
    return (
        <div className='header'>
            <NavBar />
            <h1>These are all the laptops available</h1>

            <Product text={discriptionLaptop[0]} path={URLLaptop[0]} price={priceLaptop[0]} />
            <Product text={discriptionLaptop[1]} path={URLLaptop[1]} price={priceLaptop[1]} />
            <Product text={discriptionLaptop[2]} path={URLLaptop[2]} price={priceLaptop[2]} />

        </div>
    )
}

export default Laptop
