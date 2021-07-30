import React from 'react';
import { NavLink } from "react-router-dom"
import './components.css';
function Navigation(props) {
    return (
        <div className="container">
        <h1 className="title">W-DES</h1>
        <div className="nav">
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/work">
                    Work
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
            </nav>
        </div>
        </div>
    );
}
export default Navigation;