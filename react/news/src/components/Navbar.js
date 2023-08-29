import React from 'react'
import {  Link } from "react-router-dom";
import logo from "./images/android-chrome-512x512.png"


const Navbar= ()=> {

const DarkGreen={
 backgroundColor:"#263A29"

}
 
 
    return (
     <>
     <nav className="navbar fixed-top navbar-expand-lg px-2 " style={DarkGreen}>
  <div className="container-fluid ">
    <Link className="navbar-brand " to="/" style={{color:"white"}}> <img src={logo} style={{height:"2rem"}} alt=".." />  News Verse</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link text-white " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white   " to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link   text-white " to="/entertainment">Entertainment</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link  text-white  " to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white  " to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white  " to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link   text-white " to="/technology">Technology</Link>
        </li>
      

      </ul>   
    </div>
  </div>
</nav>
     </>
    ) 
}

export default Navbar
