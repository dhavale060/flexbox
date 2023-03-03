import React from 'react';
import './CartComponent.css';
import StarRating from './StarRating';
import { useSelector } from 'react-redux';

function CardComponent() {
  const items = useSelector(state => state.gymsstate);
  // console.log(items);
  return (
    <div className='cart_section'>
      {
      (items.gyms.status)?
        <React.Fragment>
          {
            items.gyms.data.map((elem) =>{
             return(<div className='card_box' key={elem.user_id}>
              <div className='row'>
                 <div className='col-5 img_box'>
                   <div id="carouselExampleIndicators" className="carousel slide carsol_box" data-bs-ride="true">
                     <div className="carousel-indicators">
                       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to='' className="active" aria-current="true" aria-label="Slide 1"></button>
                     </div>
                     <div className="carousel-inner">
                       <div className="carousel-item">
                         <img src={elem.cover_image} height='200px' width='200px' className="" alt="loading..."/>
                       </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                     </button>
                   </div>
                 </div>
              <div className='col-7 text_box'>
                <span className='for_head_2'>{elem.gym_name}</span>
                <StarRating stars = {elem.rating} reviews = {elem.total_rating} />
                <span className='location_icon'><i className="bi bi-geo-alt-fill for_icone"></i> {elem.address1}</span>
                <span className='car_distance'><i className="bi bi-car-front car_icone"></i> {elem.duration}</span><div className='bar'>|</div><span className='distance_text'>{elem.distance_text}</span>
                <span className='gym_city'>{elem.city}</span>
              </div>
              </div>
              </div>
             )
            })            
          }
        </React.Fragment>
         :
        <div className='card_box'>
           <h2>Something Went Rong</h2>
        </div>
      }
    </div>
  )
}

export default CardComponent

