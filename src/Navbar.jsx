import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = ({text}) => {
    return (
        <nav class="navbar  border-bottom border-body" data-bs-theme="dark" style={{backgroundColor:'#9481B5',padding:'20px 10px', margin:"0 0 50px 0"  }}>
            <a class="navbar-brand" href="http://localhost:3000/">{text}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </nav>
    )
}

export default Navbar
