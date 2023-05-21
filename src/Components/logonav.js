import React, { useState } from "react";
import '../Syles/header.css'
import logo from '../img/logo.png'

import { NavLink } from "react-router-dom";

   


const Logonav = () => {

    // var navLinks = document.getElementById("navLinks");
    //    function showMenu(){
    //     navLinks.style.right = "0"
    //    }
    //    function hideMenu(){
    //     navLinks.style.right = "-200px"
    //    }

//     const [isMenuVisible, setMenuVisibility] = useState(false);

//   const showMenu = () => {
//     setMenuVisibility(true);
//   };

//   const hideMenu = () => {
//     setMenuVisibility(false);
//   };
    
const [isMenuVisible, setMenuVisibility] = useState(false);

  const showMenu = () => {
    setMenuVisibility(true);
  };

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  

  
  let navLinksStyle = {};

  if (window.matchMedia("(max-width: 600px)").matches) {
     navLinksStyle = {
      display: isMenuVisible ? "block" : "none",
      right: isMenuVisible ? "0" : "-200px"
    };
  
  }



return(
    <section className="navParent">

<div className="controler">
<img src={logo} alt="Nothing"></img>
    <h1 className="centerName">ISLANDHOPPER</h1>
    
    <nav className="navMenu">
    <div className="nav-links" style={navLinksStyle}>
                <i className="fa fa-times" onClick={hideMenu}></i>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/contact'>Contact us</NavLink></li>
                    <li><NavLink to='/about'>About us</NavLink></li>
                    <div className="dot"></div>
                    
                    
                    
                    
                </ul>
            </div>
            <i className="fa fa-bars bar" onClick={showMenu}></i>
            </nav>
    
    
    </div>
    </section>

);}

export default Logonav;



/* <nav className="navMenu">
    <div className="nav-links" style={navLinksStyle}>
                <i class="fa fa-times" onClick={hideMenu}></i>
                <ul>
    <NavLink to='/islandhopper'>Home</NavLink>
    <NavLink to='/contact'>Contact us</NavLink>
    <NavLink to='/about'>About us</NavLink>
    <div className="dot"></div>
    </ul>
            </div>
            <i class="fa fa-bars" onClick={showMenu}></i>
    </nav> */