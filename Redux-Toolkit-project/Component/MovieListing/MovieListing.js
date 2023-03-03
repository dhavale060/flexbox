import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { settings } from '../../Common/Setting';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

function MovieListing() {
  const allmovies = useSelector((state) => state.Movies.movies);
   let renderMovie = "";
    renderMovie = allmovies.Response === "True" ? (
      allmovies.Search.map((movie , index) => (
        <MovieCard key={index} data={movie}/>
  ))
    ):(
      <div className='movies-error'>
         <h3 className='text-light'>{allmovies.Error}</h3>
      </div>
    );
    const allshows = useSelector((state) => state.Movies.shows);
   let renderShows = "";
   renderShows = allshows.Response === "True" ? (
      allshows.Search.map((show , index) => (
        <MovieCard key={index} data={show}/>
  ))
  ):(
    <div className='movies-error'>
       <h3 className='text-light'>{allshows.Error}</h3>
    </div>
  );
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
          <div className='movie-container'>
            <Slider {...settings}>{renderMovie}</Slider>
          </div>
      </div>
      <div className='show-list'>
        <h2>Shows</h2>
         <div className='show-container'>
           <Slider {...settings}>{renderShows}</Slider>
         </div>
      </div>
    </div>
  )
}

export default MovieListing
