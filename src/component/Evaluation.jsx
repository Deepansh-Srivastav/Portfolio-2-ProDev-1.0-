import React from 'react'
import NavBar from "../Navbar"

const a = 15;
const b= 10;

const Evaluation = () => {
  return (
    <div>
      <NavBar text = "Evaluation Navbar"/>
      <h1>{a+'<'+b} ={a<b? "True" : "False"}</h1>
      <h1>{a+'>'+b} ={a>b? "True" : "False"}</h1>
    </div>
  )
}

export default Evaluation
