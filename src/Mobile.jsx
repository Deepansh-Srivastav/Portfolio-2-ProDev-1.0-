import NavBar from "./HOME/NavBar/NavBar"
import Product from "./PRODUCT/Product"

const URLMobile = [
  "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY327_FMwebp_QL65_.jpg",
 "https://m.media-amazon.com/images/I/713rQyFyeXL._AC_UY327_FMwebp_QL65_.jpg",
 "https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UY327_FMwebp_QL65_.jpg",
 ""
]
const discriptionMobile = ["Apple iPhone 14 (128 GB) - Blue",
 "Nothing Phone (2) 5G (Dark Grey, 12GB RAM, 256GB Storage)",
 "OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage)",
 ""
]


const priceMobile = ["₹69,999",
'₹1,24,999',
"₹53,999 ",
""
]




const Mobile = () => {
  return (
    <div className="header">
      <NavBar />
      <h1>These are all the smartphones available</h1>
      <Product text={discriptionMobile[2]} path={URLMobile[2]}  price ={priceMobile[2]}/>
      <Product text={discriptionMobile[0]} path={URLMobile[0]}  price ={priceMobile[0]}/>
      <Product text={discriptionMobile[1]} path={URLMobile[1]}  price ={priceMobile[1]}/>
    </div>
  )
}

export default Mobile
