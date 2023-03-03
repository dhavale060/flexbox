import React, { useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { fetchAsyncCardDetails, removefetchAsyncCardDetails } from '../../Features/movies/movieSlice';
import {useParams} from 'react-router-dom';
import './MovieDetails.scss';

function MovieDetails() {
 const params = useParams();
 const dispatch = useDispatch();
 const data = useSelector((state) => state.Movies.detailCard);
 const ID = params.id ;
  useEffect(()=>{
      dispatch(fetchAsyncCardDetails(ID));
      return () => {
        dispatch(removefetchAsyncCardDetails());
      }
  },[dispatch,ID]);
  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ? (
        <div>...loading</div>
      ):(
      <>
      <div className='section-left'>
         <div className='movie-title'>{data.Title}</div>
         <div className='movie-rating'>
           <span>
             IMDB Rating  <i className='bi bi-star-fill'></i> {data.imdbRating}
           </span>
           <span>
             IMDB Votes  <i className='bi bi-hand-thumbs-up-fill'></i> {data.imdbVotes}
           </span>
           <span>
             Runtime  <i className='bi bi-camera-video-fill'></i>  {data.Runtime}
           </span>
           <span>
             Year  <i className='bi bi-calendar2-date-fill'></i>  {data.Year}
           </span>
         </div>
         <div className='movie-plot'>{data.Plot}</div>
         <div className='movie-info'>
           <div>
             <span>Director</span>
             <span>{data.Director}</span>
           </div>
           <div>
             <span>Stars</span>
             <span>{data.Actors}</span>
           </div>
           <div>
             <span>Generes</span>
             <span>{data.Genre}</span>
           </div>
           <div>
             <span>Languages</span>
             <span>{data.Language}</span>
           </div>
           <div>
             <span>Awards</span>
             <span>{data.Awards}</span>
           </div>
         </div>
       </div>
       <div className='section-right'>
         <img src={data.Poster} alt={data.Title}/>
       </div>
      </>
      )}
    </div>
  )
}

export default MovieDetails
