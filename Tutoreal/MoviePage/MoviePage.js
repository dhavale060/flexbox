import axios from 'axios';
import React, { useEffect, useState } from 'react';



function MoviePage() {
  const [apiData , setApiData] = useState([]);
  function LoadMovies(url){
   axios({
        method : 'POST',
        url : url,
        data : {
          "category":"movies",
          "language":"kannada",
          "genre":"all",
          "sort":"voting"
        }
    })
    .then(res => {
        setApiData(res.data);
    })
//    fetch(url)
//    .then(res => res.json())
//    .then((data) => {
//     setApiData(data);
//    }) 
  }
  useEffect(() => {
    LoadMovies("https://hoblist.com/api/movieList");
  },[])

  console.log(apiData);

  return (
    <div className='main_container'>
       
    </div>
  )
}

export default MoviePage
