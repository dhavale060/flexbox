import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/movies/movieSlice';
import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const [term , setTerm] = useState("");
  const submitHandler = (e) => {
     e.preventDefault();
     if(term === ""){
       alert("please add search value")
     }else{
      dispatch(fetchAsyncMovies(term));
     dispatch(fetchAsyncShows(term));
     }
    //  dispatch(fetchAsyncMovies(term));
    //  dispatch(fetchAsyncShows(term));
     setTerm("");
  }
  return (
    <div className='header'>
        <div className='logo'>
          <Link to = "/" >Movie App</Link>
        </div>
        <div className='search-bar'>
           <form onSubmit={submitHandler}>
             <div className="input-group">
               <input type="text" value={term} className="form-control" onChange={(e) => setTerm(e.target.value)} placeholder="Search"/>
               <button className="btn btn-success" type="submit"><i className="bi bi-search search-icon"></i></button>
             </div>
           </form>
        </div> 
        <div className='user-image'>
          <i className="bi bi-person-fill img img-logo"></i>
        </div> 
    </div>
  )
}

export default Header
