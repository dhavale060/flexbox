import React from 'react';
import { useSelector } from 'react-redux';
import RecordData from '../Pages/RecordData';
import { STATUSES } from '../Store/Redux/AdminSlice';
import './Header.css';

function Header() {
  const {record ,status} = useSelector((state) => state.adminState);
  console.log(record);
  console.log(status);
if(status === STATUSES.LOADING){
  return(
  <div className='header_sec row col-sm-10 col-11'>
      <h3 className='text-danger d-flex justify-content-center align-items-center'>Please Wait Loading...</h3>
   </div>
  )
}
else if(status === STATUSES.ERROR){
  return(
  <div className='header_sec row col-sm-10 col-11'>
       <h3 className='text-danger d-flex justify-content-center align-items-center'>Something Went Rong Check Your Internet Connection</h3>
   </div>
  )
}
else{
  return (
    <div className='header_sec row col-sm-10 col-11'>
       <RecordData record = {record}/>
    </div>
  )
 }

}

export default Header
