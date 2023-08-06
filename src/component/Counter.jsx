import { useState } from "react"
import NavBar from "../Navbar"

export default function Counter(){
    const [count,setCount] = useState(0);
    function Increment (){
        setCount((count)=>count+1);
    }
    
    function Decrement(){
        setCount((count)=>count-1);
    }
    function Reset(){
        setCount(0);
    }
    return(
        <div>
            <NavBar text = "Counter Navbar"/>
            <h2>Counter : {count}</h2>
            <button classNameName="btn btn-info" onClick={Increment}>Increment</button>
            <button classNameName="btn btn-info" onClick={Decrement} style={{marginLeft:'5px'}}>Decrement</button>
            <button classNameName="btn btn-info" onClick={Reset} style={{marginLeft:'5px'}}>Reset</button>
        </div>
    )
}