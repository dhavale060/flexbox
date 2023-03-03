import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [Bindclass , setBindclass] = useState('');
   
    function handleLink(){
        setBindclass('collapse')
    }

    let element = document.getElementsByClassName("nav-link");
    
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener('onclick', () => {handleLink()});
      }
  return (
    <div className='col-12'>
      <nav className="navbar navbar-expand-sm fixed-top bg-secondary navbar-white">
         <div className='container-xl'>
           <Link className="navbar-brand" to="/" >Logo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
             <li className="nav-item for_list" data-toggle="collapse" data-target=".navbar-collapse.show" >
             <Link className = 'nav-link' to="/" data-toggle="collapse" data-target=".navbar-collapse.show" >Home</Link>
             </li>
             <li className="nav-item for_list">
             <Link  className = 'nav-link' to="register" >Register</Link>
             </li>
             <li className="nav-item for_list">
             <Link  className = 'nav-link' to="login" >Login</Link>
             </li>
             <li className="nav-item for_list">
             <Link  className = 'nav-link' to="movie" >Movie</Link>
             </li>
            </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
