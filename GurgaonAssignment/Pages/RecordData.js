import React from 'react';
import '../Header/Header.css';

function RecordData({record}) {
  return (
    <React.Fragment>
       <div className='col_first mx-5 col-sm-10 col-11'>
         <div className='box_0 box_one'>
           <div className='box_1'>
             <div className='logo_1'><i className="bi bi-arrow-down-square black_" ></i></div>
           </div>
           <div className='common_record'>
             <p>{record.data.totalInstall}</p>
             <p>App Installed</p>
           </div>
         </div>
         <div className='box_three'>
           <div className='box_3'></div>
           <div className='common_record'>
             <p>{record.data.activeinstall}</p>
             <p>Active Installs</p>
           </div>
         </div>
         <div className='box_five'>
           <div className='box_5'></div>
           <div className='common_record'>
             <p>{record.data.churn}%</p>
             <p>Churn Rate</p>
           </div>
         </div>
      </div>
      <div className='col_second mx-5 col-sm-10 col-11'>
        <div className='box_two'>
           <div className='box_2'>
             <div className='logo_2'><i className="bi bi-trash black_"></i></div>
           </div>
           <div className='common_record'>
             <p>{record.data.totaluninstall}</p>
             <p>App Un-Installed</p>
           </div>
        </div>
        <div className='box_four'>
          <div className='box_4'></div>
          <div className='common_record'>
             <p>{record.data.aliveappusers}</p>
             <p>Alive Apps Users</p>
           </div>
        </div>
        <div className='box_six'>
          <div className='box_6'></div>
          <div className='common_record'>
             <p>{record.data.alivechurn}</p>
             <p>Alive Churn Rate</p>
           </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RecordData
