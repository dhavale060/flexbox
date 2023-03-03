import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navabar() {
  const [bgColor , setBgColor] = useState();
  const [txtCol , setTxtCol] = useState();
  const [forlogo , setForLogo] = useState();
  
  function changeNavbarColor(){
    if(window.scrollY >= 10){
      setBgColor({backgroundColor:"black" , zIndex:3});
      setTxtCol('logo_for');
      setForLogo('logo_2');
    }else{
      setBgColor();
      setTxtCol();
      setForLogo('logo');
    }
  }
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className='navbar_container fixed-top d-grid' style={bgColor}>
      <div className='row'>
        <div className='col-5'>
          <div className = {forlogo}>WTF</div>
        </div>
        <div className='col-7'>
          <div className='links'>
           <Link className={txtCol} to ='/'>Fitness</Link>
           <Link className={txtCol} to =''>Nutrition</Link>
           <Link className={txtCol} to ='gyms'>Gyms</Link>
           <Link className={txtCol} to =''>Gyms</Link>
           <Link className={txtCol} to =''>Become WTF Partner</Link>
           <Link className={txtCol} to =''>About Us</Link>
           <button type='button' className='_btn'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navabar
