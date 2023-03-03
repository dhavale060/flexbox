import React from 'react'
import { useSelector } from 'react-redux'
import { STATUSES } from '../Store/Redux/ImageSclice'
import ImagelistComponent from './ImagelistComponent'

function BodySection() {
 const {images , status} = useSelector(state => state.imagestate)
 if(status === STATUSES.LOADING){
   return (
    <h2 className='text-info'>...Loading</h2>
   )
 }

 if(status === STATUSES.ERROR){
    return(
     <h2 className='text-danger'>Something Went Rong Please Check Your Internet Connection</h2>
    )
 }

 if(status === STATUSES.IDLE){
    return (
        <div>
          <ImagelistComponent images = {images.results}/>
        </div>
      )
 }
}

export default BodySection
