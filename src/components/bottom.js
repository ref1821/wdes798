import React from 'react';
import './bottom.css';
function Bottom(props) {
    return (
        
        <div className="links">
            <ul className="contact">
                <p>Contact</p>
                <a href="#">Mail <i className="far fa-envelope"></i></a>
            </ul>
            <ul className="work">
                <p>Our work</p>
                <a href="#">Blackjack <i className="fa-solid fa-gamepad"></i></a>
            </ul>
            <ul className="social">
                <p>Social Media</p>
                <a href="https://www.instagram.com/wdes798/">Instagram <i className="fa-brands fa-instagram"></i></a>
            </ul>
            <h3 class="bottom">W-DES</h3>
        </div>
        
        
    );
}
export default Bottom;