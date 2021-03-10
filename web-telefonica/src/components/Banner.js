import React from 'react'
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Banner = () => {
    return (
        <nav className="navbar sticky-top navbar-custom navbar-gradient-custom">
            <div className="container-fluid">
                <a className="navbar-brand" href="!#">
                    <img src={logo} width="250" height="92" alt="" />
                </a>
            </div>
        </nav>
    )
}
