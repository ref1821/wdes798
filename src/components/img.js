import React from 'react';
import './img.css';
import bus from "./img/business.png"
import blog from "./img/blog.png"

function Img(props) {
    return (
        <div className="container">
            <h2 className="box bus" id="bus">GROW YOUR BUSINESS</h2>
            <img src={bus} className="busi"/>
            
            <img src={blog} className="blogi"/>
            <h2 class="box blog" id="blog">CREATE YOUR BLOG</h2>
        </div>
    );
}
export default Img;