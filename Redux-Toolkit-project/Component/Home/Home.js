import React, { useEffect } from 'react';
import { STATUSES } from '../../Features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/movies/movieSlice';

function Home() {
  const result = useSelector((state) => state.Movies.status);
  const movieText = "Harry";
  const showText = "Friends";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  },[dispatch]);
  if(result === STATUSES.LOADING ){
    return <div className='text-light h1'>...loading page please wait</div>
  }
  else if(result === STATUSES.ERROR){
    return <div className='text-light h1'>Page not found 404 error</div>
  }
  else{
    console.log(result);
    return (
      <div>
        <div className='banner-img'></div>
        <MovieListing/>         
      </div>
    )
  }
}

export default Home
