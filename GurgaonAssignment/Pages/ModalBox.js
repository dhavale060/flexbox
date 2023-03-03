import React, { useState } from 'react';
import './ModalBox.css';

function ModalBox() {
  const [type , setType] = useState("text");
  const [types , setTypes] = useState("text");
  return (
    <React.Fragment>
     <div className='modal-container'>
       <div className='place_holder'>Select Date :</div>
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
       <div className='footer'>
         <button className='btn btn-success'>Applay</button>
         <button className='btn btn-danger'>Cancle</button>
       </div>
       </div>
    </React.Fragment>
  )
}

export default ModalBox
