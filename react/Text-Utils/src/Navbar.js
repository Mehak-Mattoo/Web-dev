import React from 'react';
import propTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {

  let myStyle= {
    color: props.mode=== "dark"?"white":"#102C57"
  }

  let buttonStyle= {
  backgroundColor:  props.mode=== "dark"?"white":"#35A29F"
  }

  return (
    <>
{/* for blue mode below
  <div className= {`form-check form-switch text-${props.Bluemode==="light"?"blue": "light"} `}> 
  <input className="form-check-input " onClick={props.toggleBMode} type="checkbox" role="switch" id="flexSwitchCheckDefaultt"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.Bluemode==="light"?"blue": "light"} mode</label>  */}

{/* </div>
</nav> */}


<nav className={`navbar navbar-expand-lg  border-bottom border-${props.mode==="dark"?"dark":"info"} bg-${props.mode}  -body-tertiary px-5  `} >
  <div className="container-fluid">
  <h4>{props.title}</h4> 
   
    <button className="navbar-toggler"  style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={myStyle} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  style={myStyle} to="/about">About</Link>
        </li>
        <li className="nav-item dropdown"  />
            
      </ul>
     
    </div>
  </div>

  <div className= {`form-check form-switch text-${props.mode==="info-subtle"?"#102C57": "light"} `}> 

<input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
<label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==="dark"?"light": "dark"} mode</label> 
</div>  
</nav>

</>
  )
}


Navbar.propTypes = {// to ensure that title of navbar will always remain a string
    title: propTypes.string.isRequired}; // this field is required to be set


    Navbar.defaultProps = {// even if title is not set in app.js then this will be executed
        title: "Title"};
