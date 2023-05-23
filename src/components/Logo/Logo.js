import logo from "../../RJL_GLOBE.png";
import { Link } from "react-scroll";
import React, { Component } from "react";



function Logo() {
  return (
    <Link to="Home" smooth={true}>      
        <img src={logo} className="App-logo" alt="logo" />    
    </Link>
  );
}
export default Logo;
