import Discription from './P-Discription/Discription'
import ProductImage from './P-Image/ProductImage'

import './Product.css'

const Product = ({text , path , price}) => {
  return (
    <div className='product'>
        <ProductImage path = {path}/>
        <Discription text = {text} price = {price}/>
    </div>
  )
}

export default Product
