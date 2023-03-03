
import React, {useEffect, useMemo, useState } from 'react';
import './FilterComponent.css';
import { useSelector } from 'react-redux';
import { fetchGyms,setGyms , setFilterGyme} from '../Redux/GymeSlice';
import { useDispatch } from 'react-redux';
import LocationComponent from './LocationComponent';

function FilterComponent() {
 const dispatch = useDispatch();
 const [cityLocation , setCityLocation] = useState('');
 const [result , setResult] = useState([]);
 const [isLoad , setIsLoad] = useState(false);
 const {city , gyms} = useSelector(state => state.gymsstate)
 const locationComponent = useMemo(() => <LocationComponent/>,[]);
//  console.log(city);
//  console.log(gyms);

useEffect(()=>{

},[])

const handleCard = (e) => {
   console.log(e.target.value);
  const filtered =  gyms.data.filter(elem => {return elem.address2 === e.target.value})
//   if(filtered == undefined){
//    dispatch(setGyms(gyms));
//   }

//    dispatch(setFilterGyme(filtered))
  console.log(filtered);
//   if(!result){
//     setResult(gyms);
//   }else{
//     setResult({...gyms , data : result});
//   }
 }

 const handleGymsFilter = (value) => {
   console.log(value);
    if(value === 'All'){
     dispatch(fetchGyms('/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231'))
    }
    else {
     dispatch(fetchGyms(`/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${value}`))
    }
 }

    return (
      <div className='filter_component'>
         <div className='head_set'>
          <div className='heading'>Filters</div>
          <button className='btn btn-danger for_btn'>Reset</button>
         </div>
         <dl>
           <dt className='head_title'>Location</dt>
           <dd>
              <div className='location-search'>
                <button className='search_btn'><i className="bi bi-search"></i></button>
                <input type="text" className="location-box" placeholder="Enter location" onChange={handleCard} />
              </div>
           </dd>
           <dt className='head_title'>Price</dt>
           <dd className='d-flex'>
              <div className='min_search'><input type="text" className="min_input" placeholder="Min"/></div>
              <div className='min_search'><input type="text" className="min_input" placeholder="Max"/></div>
           </dd>
           <dt className='head_title'>Cities</dt>
              {
                (city.status)?<dd className='location_' >
                  <select className='select-box'  onChange = {(e) => handleGymsFilter(e.currentTarget.value)}>
                  {
                  city.data.map((elem , index) =>
                   <option value={elem.city} key={index}>{elem.city}</option>
                  )
                 }</select>
                 </dd> : <p className='text-danger'>Something Went Rong In LoadCity</p>
                
             } 
         </dl>
         {locationComponent}
      </div>
    )
}

export default FilterComponent
