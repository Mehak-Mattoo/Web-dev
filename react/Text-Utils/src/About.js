import React from 'react';
import free from './images/free.png';
import compatible from './images/compatibilty.jpg';
import accuracy from './images/accuracy.png';

export default function About() {


 let imgStyle= {
   height:"10rem",
   width:"10rem",
marginLeft:"auto",
marginRight:"auto",

  }


  return (
   <>
<div className="container  pb-3 text-center" >
<h2>About Us</h2></div>
<div className=" container  d-flex flex-row"  >

<div className="card mx-2 " style={{width:"30rem"}}>
  <img src={accuracy} style={imgStyle}  className="card-img-top p-3" alt="..."/>
  <div className="card-body bg-info text-center"  >
    <h5 className="card-title text-primary-emphasis" >Accurate results</h5>
    <p className="card-text">Get accurate results for your texts with a click</p>
   
  </div>
</div>

<div className="card mx-2  "  style={{width:"30rem"}}>
  <img src={free} style={imgStyle} className="card-img-top p-3" alt="..."/>
  <div className="card-body bg-info text-center">
    <h5 className="card-title text-primary-emphasis">Not paid</h5>
    <p className="card-text"  >Text-Utils is a completely free website</p>
   
  </div>
</div>

<div className={`card  mx-2`}  style={{width:"30rem"}}>
  <img src={compatible} style={imgStyle} className="card-img-top p-3" alt="..."/>
  <div className="card-body bg-info text-center">
    <h4 className="card-title text-primary-emphasis">Device compatible</h4>
    <p className="card-text">You can use Text-Utils in any device seamlessly.</p>
   
  </div>
</div>


</div>
   </>
  )
}
