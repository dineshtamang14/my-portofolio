import React from 'react'
import "./Header.css";
import Nav from "./Nav";

function Header() {
    return (
        <div className="header">
            <Nav />
            <div className="heading">
                <p className="heading__intro">hi, my name is</p>
                <h2 className="heading__name">Dinesh</h2>
                <h1 className="heading__description">A Backend Developer</h1>
            </div>
            <div className="fab-icons">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-github"></i>
                <div className="line" />
            </div>
        </div>
    )
}

export default Header;
