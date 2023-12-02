import React from "react";
import logo from "./airbnb.png"
function Navbar(){
    return (
        <nav className="navbar">
            <a href="/home"><img src={logo} className="logo"/></a>
        </nav>
    )
}

export default Navbar