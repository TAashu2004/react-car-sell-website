import React from 'react';
import './Navbar.css'
import logo from'./img/car-logo.png'
import {NavLink} from "react-router-dom";

const Navbar =()=>{
    return(
        <>
        <div className="row">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="600"className="col-sm-12">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{background:"linear-gradient(to left,red,black,black,black)"}}>
    <NavLink className="navbar-brand" to="/"><img src={logo} style={{width:"150px"}}></img></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"20px"}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/"><p style={{fontFamily:"cursive",color:"white",paddingTop:"20px"}}>HOME</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact"><p style={{fontFamily:"cursive",color:"white",paddingTop:"20px"}}>CONTACT</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About"><p style={{fontFamily:"cursive",color:"white",paddingTop:"20px"}}>ABOUT US</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Carform"><p style={{fontFamily:"cursive",color:"white",paddingTop:"20px"}}>SELL CAR</p></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
        </>
    )
}
export default Navbar;