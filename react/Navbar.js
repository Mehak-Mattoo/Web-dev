import React from 'react';
import propTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {

  return (
    <>
    <nav className={`navbar navbar-expand-lg- bg-${props.mode}-${props.Bluemode}  text-${props.mode==="light"?"dark": "light"}-${props.mode==="light"? "blue": "light"} `}>
        {/* if mode is set to be light then text turns black otherwise remains black above settting -correct*/}
  <div className="container">
  
    <h4>{props.title}</h4>  
    <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href ="/">Home</a>
        <a class="nav-link" href="/about">About</a>
        </div>    
  
 
  <div className= {`form-check form-switch text-${props.mode==="light"?"dark": "light"} `}> 

  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark": "light"} mode</label> 
  </div>

{/* for blue mode below*/}
  <div className= {`form-check form-switch text-${props.Bluemode==="light"?"blue": "light"} `}> 

  <input className="form-check-input " onClick={props.toggleBMode} type="checkbox" role="switch" id="flexSwitchCheckDefaultt"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.Bluemode==="light"?"blue": "light"} mode</label> 

 </div>
</div>
</nav>
</>
  )
}


Navbar.propTypes = {// to ensure that title of navbar will always remain a string
    title: propTypes.string.isRequired}; // this field is required to be set


    Navbar.defaultProps = {// even if title is not set in app.js then this will be executed
        title: "Title"};