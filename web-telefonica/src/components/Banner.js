import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Banner = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/"
            >
                <img src={logo} width="250" height="92" alt="" />   
            </NavLink>

        </nav>
    )
}
