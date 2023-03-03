import React from 'react';
import { useDispatch } from 'react-redux';
import { addImage } from '../Store/Redux/ImageSclice';
import "./ImagelistComponent.css";

function ImagelistComponent({images}) {
  const dispatch = useDispatch();
 const imageData = JSON.parse(localStorage.getItem('Image'));
console.log(images)
console.log(imageData);
 if(images === undefined){
  dispatch(addImage(imageData));
 }

return (
    <div>
       <div className='image_container'>
       {
            images.map((item) => 
              {
                return(
                  <div className='card-box' key={item.id}>
                    <img className='card-img' src={item.urls.regular} alt={item.alt_description}/>
                  </div>
                )
              }
              )
          } 
     </div>
  </div>
  )
}

export default ImagelistComponent
