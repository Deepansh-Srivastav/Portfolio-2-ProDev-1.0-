import React from 'react'
import "./Discription.css"
import Price from './Price/Price'

const Discription = ({text , price}) => {
  return (
    <div className='discription'>
      <p>{text}</p>
      <Price price ={price}/>
      <button style = {{padding:'10px 30px',backgroundColor:"yellow", cursor:'pointer'}}>Buy Now</button>
    </div>
  )
}

export default Discription
