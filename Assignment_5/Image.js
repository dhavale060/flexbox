import React, { useState } from 'react';
import './image.css';

function Image() {
    const [image , setImage] = useState('christin-hume-mfB1B1s4sMc-unsplash.jpg')
    function handleImage(e){
        setImage('clement-helardot-95YRwf6CNw8-unsplash.jpg')  
    }

    function Image(){
        setImage('cookie-the-pom-gySMaocSdqs-unsplash.jpg')
    }
  return (
    <div className='container'>
       <div className='main_div d-flex justify-content-space-between'>
            <div className='img_div'><img onMouseOver={handleImage} onMouseOut = {Image} src = {image}  height='300px' width='300px' /></div>
            <div className='img_div'><img className = 'set_img' src='.\clement-helardot-95YRwf6CNw8-unsplash.jpg' height='300px' width='300px' /></div>
            <div className='img_div'><img src='.\cookie-the-pom-gySMaocSdqs-unsplash.jpg'  height='300px' width='300px' /></div>
       </div>
    </div>
  )
}

export default Image
