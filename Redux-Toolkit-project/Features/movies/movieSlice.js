import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from '../../Common/apis/MovieApi';
import {ApiKey} from  '../../Common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies" ,
 async (term) => {
   const response = await MovieApi.get(`?apiKey=${ApiKey}&s=${term}&type="Movie"`)
  return (response.data); 
})

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows" ,
 async (term) => {
   const response = await MovieApi.get(`?apiKey=${ApiKey}&s=${term}&type="series"`)
  return (response.data); 
})

export const fetchAsyncCardDetails = createAsyncThunk("movies/fetchAsyncCardDetails" ,
 async (id) => {
   const response = await MovieApi.get(`?apiKey=${ApiKey}&i=${id}&plot=full`)
  return (response.data); 
})

export const STATUSES = Object.freeze({
   IDLE : "idle",
   ERROR : "error",
   LOADING : "loading"
});

const initialState = {
    movies : {},
    shows : {},
    detailCard : {},
    status:STATUSES.IDLE, 
};
const movieSlice = createSlice({
   name : 'movies',
   initialState,
   reducers : {
      removefetchAsyncCardDetails : (state) => {
         state.detailCard = {};
      }
   },
   extraReducers:{
      [fetchAsyncMovies.pending]:(state) => {
        console.log("...loading");
        return {...state , status : STATUSES.LOADING };
      },
      [fetchAsyncMovies.fulfilled]:(state , action) => {
         console.log("fetched succesfully");
         return {...state , movies : action.payload , status : STATUSES.IDLE};
      },
      [fetchAsyncShows.fulfilled]:(state , action) => {
         console.log("fetched succesfully");
         return {...state , shows : action.payload , status : STATUSES.IDLE};
      },
      [fetchAsyncCardDetails.fulfilled]:(state , action) => {
         console.log("fetched succesfully");
         return {...state , detailCard : action.payload};
      },
      [fetchAsyncMovies.rejected]:(state , action) => {
         console.log("rejected");
         return {...state , status : STATUSES.ERROR};
      },
   }
});

export const {removefetchAsyncCardDetails} = movieSlice.actions;
export default movieSlice.reducer;