import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(){
  return (
    <div>
        <nav>
            <p><span>Logo</span></p>
            <div className="nav-container">
                <NavLink to = "/" className={(e) => {return e.isActive ? "orangeC" : ""}}> Home </NavLink>
                <NavLink to = "/about" className={(e) => {return e.isActive ? "orangeC" : ""}}> About </NavLink>
                <NavLink to = "/login" className={(e) => {return e.isActive ? "orangeC" : ""}}> Login </NavLink>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
