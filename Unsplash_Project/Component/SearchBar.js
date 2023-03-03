import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncImages } from '../Store/Redux/ImageSclice';
import './SearchBar.css';

function SearchBar() {
  const [term , setTerm] = useState('');
  const dispatch = useDispatch();


  function handleImages(){
    dispatch(fetchAsyncImages(term));
    setTerm('');
  }
  return (
    <div className='searchbar'>
      <div className ="input-group input_1">
       <button className ="btn btn-outline-secondary" onClick={handleImages} type="button" id="button-addon1"><i className ="bi bi-search"></i></button>
       <input type="text" className ="form-control" onChange={(e) => setTerm(e.currentTarget.value)} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
      </div>
    </div>
  )
}

export default SearchBar
