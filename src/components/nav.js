import React from 'react';
import { NavLink } from "react-router-dom"
import './components.css';
function Navigation(props) {
    return (
        <div className="container">
        <h1 className="title">W-DES</h1>
        <div className="nav">
            <nav>
                <NavLink to="/wdes798/home">
                    Home
                </NavLink>
                <NavLink to="/wdes798/work">
                    Work
                </NavLink>
                <NavLink to="/wdes798/about">
                    About
                </NavLink>
            </nav>
        </div>
        </div>
    );
}
export default Navigation;