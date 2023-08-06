import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Carousel from "./Carousel"

// import { BrowserRouter, Routes , Route } from 'react-router-dom'
const Portfolio = () => {
    return (
        <div>
            <Navbar text = "REACT-JS Portfolio" />
            <Carousel/>
            <div className='card-container'>
                {/* Card 1 */}
                <div class="card" style={{ width: '20rem' }}>
                    <img class="card-img-top" src="https://ifbb.com/wp-content/uploads/2020/09/day-1-1.jpg" alt='' />
                    <div class="card-body">
                        <h5 class="card-title">Simple Heading</h5>
                        <Link to="/Heading" ><button className='btn btn-primary'>Visit</button></Link>
                    </div>
                </div>

                {/* Card 2 */}
                <div class="card" style={{ width: '20rem' }}>
                    <img class="card-img-top" src="https://blog.knoldus.com/wp-content/uploads/2019/11/Selection_844.png" alt='' />
                    <div class="card-body">
                        <h5 class="card-title">Evaluation</h5>
                        <Link to="/Evaluation" ><button className='btn btn-primary'>Visit</button></Link>
                    </div>
                </div>

                {/* Card 3 */}
                <div class="card" style={{ width: '20rem' }}>
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5I3mDwiCvVaK8bpCD3asYdDm9jD994ewk0GvqisU&s" alt='' />
                    <div class="card-body">
                        <h5 class="card-title">Printing Name and age from Object</h5>
                        <Link to="/Demo22" ><button className='btn btn-primary'>Visit</button></Link>
                    </div>
                </div>

                {/* Card 4 */}
                <div class="card" style={{ width: '20rem' }}>
                    <img class="card-img-top" src="https://media.istockphoto.com/id/1410327501/vector/day-4-calendar-icon-orange-calendar-page-on-blue-background-simple-vector-illustration.jpg?s=612x612&w=0&k=20&c=tLVRyH80KweuuN2xndfZgYo8iZ981QhY1Z_Lixtm1ow=" alt='' />
                    <div class="card-body">
                        <h5 class="card-title">Product Page</h5>

                        <Link to="/ProductPage" ><button className='btn btn-primary'>Visit</button></Link>
                    </div>
                </div>

                {/* Card 5 */}
                <div class="card" style={{ width: '20rem' }}>
                    <img class="card-img-top" src="https://i0.wp.com/www.lifeway.cc/wp-content/uploads/2019/03/Day5.jpg?fit=513%2C531&ssl=1" alt='' />
                    <div class="card-body">
                        <h5 class="card-title">Increment Decrement Button</h5>
                        <Link to="/Counter" ><button className='btn btn-primary'>Visit</button></Link>
                    </div>
                </div>

                {/* Card 6 */}
                <div class="card" style={{ width: '20rem' }}>
                    <img class="card-img-top" src="https://c8.alamy.com/comp/2DN6R5B/calendar-day-6-number-six-on-a-white-paper-with-red-border-on-blue-background-vector-2DN6R5B.jpg" alt='' />
                    <div class="card-body">
                        <h5 class="card-title">Todo List</h5>

                        <Link to="/TodoList" ><button className='btn btn-primary'>Visit</button></Link>
                    </div>
                </div>















            </div>
            <Footer />
        </div>
    )
}

export default Portfolio
