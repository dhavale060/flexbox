import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='row px-px-5'>
      <div className='col-lg-3 d-none d-lg-block'>
         <a className='btn d-flex align-items-center justify-content-between primary w-100 collapsed'
         data-toggle="collapse" href='#navbar-verticle'>
           <h6 className='text-dark m-0'>
            <i className='bi bi-card-list card-icon'></i>
            Categories
           </h6>
           <i className='fa fa-angle-down text-dark'></i>
         </a>
      </div>
    </div>
  )
}

export default Navbar
