import React from 'react';
import './RegistrationComponent.css';

function UserData(props) {
  return (
    <div className='container-fluid'>
        <div className='d-grid'>
            <div className='col'>
                <div className='row'>
                    <div className=''>
                      {
                        props.deta.map((item ,ind) => {
                         return (
                          <div key = {ind}>
                          <h2>{item.FullName}</h2>
                          <h3>{item.Email}</h3>
                          <h2>{item.Mobile}</h2>
                          <button className='btn btn-info' onClick={() => props.deleteItem(ind)} >Delete</button>
                          </div>
                         )
                        })
                      }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserData
