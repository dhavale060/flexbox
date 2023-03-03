import React from 'react';
import './SearchBox.css';

function SearchBox() {
  return (  
    <div className='d-grid'>
        <div className="row-8 search_box">
         <button className='btn_3'><i className="bi bi-search"></i></button>
         <input type="text" className="input_field" placeholder="Search gym name here..."/>
         <button className="btn btn-secondary btn_1" type="button"><i className="bi bi-geo-alt icone"></i></button>
         <button className="btn btn-secondary btn_2" type="button">Clear</button>
        </div>
    </div>
  )
}

export default SearchBox
