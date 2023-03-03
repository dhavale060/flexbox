import React from 'react';
import { useSelector } from 'react-redux';
import './FilterComponent.css';

function LocationComponent() {
const cities = useSelector(state => state.gymsstate);
  return (
    <div>
      <dl>
      <dt className='head_title'>Location</dt>
              {
                (cities.gyms.status)?<dd className='location_' ><select multiple size='3' className='location-search'>{
                  cities.gyms.data.map((elem ,index) => {
                  return <option key={index}>{elem.city}</option>
                  }
                  )
                 }</select>
                 </dd> : <p className='text-danger'>Something Went Rong In LoadCity</p>
             }
      </dl>
    </div>
  )
}

export default LocationComponent
