import React from 'react'
import "./Nav.css";

function Nav() {
    return (
        <div className="nav">
            <h1 className="nav__name">Dinesh</h1>
            <div>
                <button className="nav__ham">
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                </button>
            </div>
        </div>
    )
}

export default Nav;
