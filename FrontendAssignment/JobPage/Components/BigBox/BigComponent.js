import React from 'react';
import './BigComponent.css';
import SubComponent from './SubComponent/SubComponent';

function BigComponent() {
  return (
    <div className='rectangle_22'>
      <SubComponent/>
      <div className='applay_btn'><span className='btn_text'>Apply on Archslate</span></div>
      <div className='Save_btn'>
        <div className='btn-box'>
            <i className='star-icon'></i>
        </div>
        <span className='Star_text'>Save</span>
      </div>
      <div className='Refer'>
        <div className='Shair-point'></div>
        <div className='Refer-text'>Share & Refer</div>
      </div>
    </div>
  )
}

export default BigComponent
