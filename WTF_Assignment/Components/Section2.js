import React, { useEffect, useMemo} from 'react';
import './Section2.css';
import FilterComponent from './FilterComponent';
import CardComponent from './CardComponent';
import { fetchGyms ,fetchCity, STATUSES } from '../Redux/GymeSlice';
import { useDispatch, useSelector } from 'react-redux';

// export const STATUSES = Object.freeze({
//    ERROR : 'error',
//    IDLE : 'idle',
//    LOADING : 'loading'
// });

function Section2() {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchGyms('/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231'))
   dispatch(fetchCity('/gym/places'))
  },[dispatch]);

  const filterComponent = useMemo(() => <FilterComponent/> ,[]);
  const cardComponent = useMemo(() => <CardComponent/>,[]);

  // const handleGymsFilter = (value) => {
  //   console.log(value);
  //    if(value === 'All'){
  //     dispatch(fetchGyms('/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231'))
  //    }
  //    else {
  //     dispatch(fetchGyms(`/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${value}`))
  //    }
  
  // }

  // const {status , status2} = useSelector(state => state.gymsstate)
  // if(status === STATUSES.ERROR || status2 === STATUSES.ERROR){
  //   return <h2 className='text-danger'>Something Went Rong</h2>
  // }
  
  // if(status === STATUSES.LOADING || status2 === STATUSES.LOADING){
  //   return <h2 className='text-succsess'>Loading... please wait </h2>
  // }

  // if(status === STATUSES.IDLE || status2 === STATUSES.IDLE){
    return (
      <div className='d-flex'>
        {filterComponent}
        {cardComponent}
      </div>
    )
  

}

export default Section2
