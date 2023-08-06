
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Portfolio from './Portfolio';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Heading from "./component/Heading"
import Evaluation from "./component/Evaluation"
import Demo22 from "./component/Demo22"
import Counter from "./component/Counter"
import TodoList from "./component/TodoList"



import Home from "./HOME/Home"

import Laptop from "./Laptop"





function App() {
  return (
    <div className="App">



<BrowserRouter>
        <Routes>

          <Route path='/' element={<Portfolio />} />
          <Route path='/Heading' element={<Heading/>} />
          <Route path='/Evaluation' element={<Evaluation/>} />
          <Route path='/Demo22' element={<Demo22 />} />
          <Route path='/ProductPage' element={<Home/>} />

          <Route path='/Laptop' element={<Laptop/>} />
          








          <Route path='/Counter' element={<Counter />} />
          <Route path='/TodoList' element={<TodoList/>} />

        </Routes>

      </BrowserRouter> 

    </div>
  );
}

export default App;



// rpc