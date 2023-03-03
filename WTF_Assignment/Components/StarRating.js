import React from 'react';
import {FaStar , FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';
import './StarRating.css';

function StarRating({stars , reviews}) {

const ratingStar = Array.from({length : 5} , (elem , index) => {
let number = index + 0.5 ;
return (
    <span key={index}>
         {stars >= index + 1 ? ( 
           <FaStar className='for_fastar' /> 
           ) : stars >= number  ? ( 
           <FaStarHalfAlt className='for_starhalf'/>
           ) : ( 
           <AiOutlineStar className='for_outline_star'/> 
           )}
        </span>
    )
})

  return (
    <div className='star_content'>
      <span>{ratingStar}</span>
    </div>
  )
}

export default StarRating
