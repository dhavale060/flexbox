import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncAdmin , fetchAsyncData } from '../Store/Redux/AdminSlice';
import DataGridComponent from '../Pages/DataGridComponent';
import './StackComponent.css';

function StackComponent({handleLimit}) {
  const dispatch = useDispatch();
  const [type , setType] = useState("text");
  const [types , setTypes] = useState("text");
  const {data} = useSelector(state => state.adminState)
  const [limit , setLimit] = useState(20);

  useEffect(() => {
    if(limit){
      dispatch(fetchAsyncAdmin({limit}));
      dispatch(fetchAsyncData({limit}));
    }
  },[dispatch , limit])
  return (
    <div className='stack_container col-sm-10 col-11'>
      <div className='top_row'>
      <div className='head_bar'>
        <span className='show'>Show</span>
        <select className='form-select' value={limit} onChange={(e) => setLimit(e.target.value)} >
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>50</option>
          <option>80</option>
          <option>100</option>
          <option>118</option>
        </select>
        <span className='show'>Entries</span>
      </div>
      <div>
        <button className='btn btn-light select_btn' data-bs-toggle="modal" data-bs-target="#mymodal">Select Duration</button>
      </div>
      <div className='modal' id='mymodal'>
        <div className='modal-dialog modal-dialog-centered for_dialog'>
          <div className='modal-container'>
         <div className='modal-header'>
           <div className='place_holder'>Select Date :</div>
           <button className='btn-close' data-bs-dismiss="modal"></button>
         </div>
       <div className='modal-body'>
         <div className='aside'>
           <ul>
            <li>Today</li>
            <li>Yesterday</li>
            <li>This Week</li>
            <li>Last Week</li>
            <li>This Month</li>
            <li>Last Month</li>
           </ul>
         </div>
         <div className='main-body'>
           <input type={type} placeholder="Select start date" className='form-control for_style'onFocus={() => setType("date")} onBlur={() => setType("text")}/>
           <input type={types} placeholder="Select end date" className='form-control for_style'onFocus={() => setTypes("date")} onBlur={() => setTypes("text")}/>
         </div>
       </div>
       <div className='footer'>
         <button className='btn btn-success'>Applay</button>
         <button className='btn btn-danger' data-bs-dismiss = "modal">Cancle</button>
        </div>
       </div>
        </div>
      </div>
      </div>
      <DataGridComponent deta = {data.data} />
    </div>
  )
}

export default StackComponent
