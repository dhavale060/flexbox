import React from 'react';
import './ArchDesignComponent.css';
import img_1 from '../../Images/image 1.png';

function ArchDesignComponent() {
  return (
    <div className='reactangle_top'>
      <img className='image-1' src={img_1} alt='loading' />
      <div>
         <div className='Arch-text'>Architectural Designer</div>
         <div className='Black-text'>Black Mountain Architecture</div>
         <div className='Posted-text'>Posted 07/27/2022</div>
      </div>
      <div className='share-android'></div>
      <div className='User-interface'>
        <div className='save'></div>
      </div>
      <div className='Reactangle-2625'>
        <div className='Status-text'>Status: Accepting Applications</div>
      </div>
      <div className='reactangle-11'>
        <p>Apply on Archslate</p>
      </div>
      <div className='reactangle-33'>
        <p>Architecture</p>
      </div>
      <div className='reactangle-32'>
        <p>Freelance</p>
      </div>
      <div className='reactangle-2425'>
        <p>Long-Term</p>
      </div>
    </div>
  )
}

export default ArchDesignComponent
