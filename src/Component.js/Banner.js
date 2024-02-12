import { useState } from 'react'}
import React from 'react'

import header from "../images/mobile/image-header.jpg"

function Banner() {
  const  [activeLink, setActiveLink] = useState ("")
  
  return (
    <> 
   <div style={{backgroundColor:"rgb()"}}>
   <div style={{backgroundImage: `url()`,
    backgroundSize: 'initial',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
     }}> 
<nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container d-flex justify-content-between">
    <div>
      
    <img src={""} alt="LOGO" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
   
    <div class="collapse navbar-collapse align-items-end d-flex justify-content-between" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn bg-white text-dark rounded-pill" aria-disabled="true">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn bg-white text-dark rounded-pill" aria-disabled="true">skills</a>
        </li>
      </ul>
      <span className='navber-text'>
        <div className='social-icon'>
          <a href="" ><img src={""} alt="" /></a>
          <a href="" ><img src={""} alt="" /></a>
          <a href="" ><img src={""} alt="" /></a>
        </div>
        <button className='vvd'onClick={()=> console.log("connect");}>lets connect</button>


      </span>
    </div>
  </div>
</nav>
   
</div>
    
   </div>

    
    
    
    </>
  )
}

export default Banner