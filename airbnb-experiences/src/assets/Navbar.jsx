import React from "react";
import logo from "./airbnb.png"
function Navbar(){
    return (
        <nav className="navbar">
            <img src={logo} className="logo"/>
        </nav>
    )
}

export default Navbar