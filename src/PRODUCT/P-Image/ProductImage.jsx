import './ProductImage.css'

const ProductImage = ({path}) => {
  return (
    <div className='productImage'>
      <img src={path} alt=""/>
    </div>
  )
}

export default ProductImage
