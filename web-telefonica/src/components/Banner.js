import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Banner = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 0) {
            setCategories(inputValue)
            setInputValue('');
        }
    }

    return (
        <div className="container">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <img src={logo} width="250" height="92" alt="" />

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link p-custom" 
                    exact
                    to="/"
                >
                    Tables
                </NavLink>

                <form className="form-inline" onSubmit={handleSubmit}>
                    <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        value={inputValue}
                        onChange={ handleInputChange }
                        placeholder="Search" 
                        aria-label="Search" 
                    />
                    <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
                 </form>

            </nav>
        </div>
    )
}
