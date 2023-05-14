import React from "react";
import '../Syles/header.css'
import logo from '../img/logo.png'

import { NavLink } from "react-router-dom";


const Logonav = () =>

<div className="controler">
<img src={logo} alt="Nothing"></img>
    <h1 className="centerName">ISLANDHOPPER</h1>
    <nav class="navMenu">
    <NavLink to='/islandhopper'>Home</NavLink>
    <NavLink to='/contact'>Contact us</NavLink>
    <NavLink to='/about'>About us</NavLink>
    <div class="dot"></div>
    </nav>
    </div>

export default Logonav;