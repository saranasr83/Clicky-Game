import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <div className="sticky-nav">
        <div className="nav-title">
            <h1>Click an image to begin!</h1>
            <a className="nav-restart" href="/">Restart</a>
            <div className="scores">
            <div className="score" >Current Score: {props.currentScore}</div>
            <div className="score" > | Top Score: {props.topScore}</div>
            </div>
        </div>
    </div>
)

export default NavBar;