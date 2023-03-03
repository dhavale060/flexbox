import React from 'react';
import './DataGridComponent.css';
import CustomIcons from './CustomIcons';
import moment from 'moment/moment';

function DataGridComponent({deta}) {
  console.log(deta);
  return (
    <div>
       <table className='table for_table'>
          <thead className='table_head'>
             <tr>
               <th>Date</th>
               <th>Day Installs</th>
               <th>Plateform</th>
               <th>Day Uninstalls</th>
               <th>Plateform</th>
               <th>Churn Rate</th>
               <th>Churn Plateform</th>
             </tr>
          </thead>
          <tbody>
            {
              deta.data.map(elem => 
                <tr key={elem.created_At}>
                <td className='for_center'>{moment(elem.created_At).utc().format('YYYY-MM-DD')}</td>
                <td className='for_center'>{elem.totalinstall}</td>
                <td className='for_center'>{
                  <>
                  <span>A</span> {elem.android_install} <br/>
                  <span>I</span> {elem.ios_install}
                  </>

                  }</td>
                <td className='for_center'>{elem.totaluninstall}</td>
                <td className='for_center'>{
                  <>
                  <span>A</span> {elem.android_uninstall} <br/>
                  <span>I</span> {elem.ios_uninstall}
                  </>
                  }</td>
                <td className='for_center'>{elem.totalchurn}</td>
                <td className='for_center'>{
                  <>
                  <span>A</span> {elem.android_uninstall} <br/>
                  <span>I</span> {elem.ios_uninstall}
                  </>
                  }</td>
              </tr>
              )
            }
          </tbody>
       </table>
       <div className='for_pagination'>
        <CustomIcons/>
       </div>
    </div>
  )
}

export default DataGridComponent
