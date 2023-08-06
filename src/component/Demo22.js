import React from 'react'
import NavBar from "../Navbar"

import Demo22Caller from "./Demo22Caller"



let arr = [
  { name: "Hella", age: 20 },
  { name: "James", age: 26 },
  { name: "Jonny", age: 25 },
  { name: "Teal", age: 22 },
  { name: "Neon", age: 23 },
];

export default function Demo22() {


  return arr.map(function (obj) {
    return (
      <Demo22Caller name={obj.name} age={obj.age} />
    );
  });


}

