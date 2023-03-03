import React from 'react';
import './HeaderComponent.css';
import star from '../../Other/star-06.png';
import glob from '../../Other/glob-06.png';
import briefcase from "../../Other/briefcase-01.png";
import mail from '../../Other/mail-02.png';
import user from '../../Other/user-01.png';

function HeaderComponent() {
  return (
    <div className='main_container'>
      
        <div className='blue_4'></div>
        
        <div className='nav_logo'>Archslate</div>
        <div className='star_06'><img src={star} className='icon_06'/></div>
        <div className='globe_03'><img src={glob} className='icon_03'/></div>
        <div className='briefcase_01'><img src={briefcase} className='briefcase-01'/></div>
        <div className='mail_02'><img src={mail} className='mail-02'/></div>
        <div className='user_01'><img src={user} className='user-01'/></div>
        <span>
          <div className='text_1'>Candidates</div>
          <div className='text_2'>Companies</div>
          <div className='text_3'>Jobs</div>
          <div className='text_4'>Notifications</div>
          <div className='text_5'>User Name</div>
        </span>
    </div>
  )
}

export default HeaderComponent
