import { createSlice } from "@reduxjs/toolkit";
import GymeApi from "../Common/GymeApi";



// const initialState = {
//     gyms : [],
// };
export const STATUSES = Object.freeze({
  IDLE : 'idle',
  LOADING :'loading',
  ERROR : 'error'
})

const GymeSlice = createSlice({
    name : 'gyms',
    initialState : {
      gyms : [],
      city : [],
      status : STATUSES.IDLE,
      status2 : STATUSES.IDLE
    },
    reducers : {
       setGyms(state , action){
        state.gyms = action.payload
       },
       setCity(state , action){
         state.city = action.payload
       },
       setStatus(state , action){
          state.status = action.payload
       },
       setCityStatus(state , action){
          state.status2 = action.payload
       },
       setFilterGyme(state , action){
          state.gyms = action.payload 
       }
    },
    extraReducers : {

    }
})
export const {setGyms,setStatus,setCity,setCityStatus,setFilterGyme} = GymeSlice.actions;
export default GymeSlice.reducer;

// thunks for fetch gyms data

export function fetchGyms(url){
  return async function fetchGymsThunks(dispatch , getState){
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await GymeApi.get(url);
      const data = await res.data;
      dispatch(setGyms(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
      console.log(error);
    }
  }
}

export function fetchCity(url){
  return async function fetchCityThunks(dispatch , getState){
    dispatch(setCityStatus(STATUSES.LOADING));
    try {
      const res = await GymeApi.get(url);
      const data = await res.data;
       data.data.unshift({city : 'All' ,addressComponent : ['']});
      dispatch(setCity(data));
      dispatch(setCityStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setCityStatus(STATUSES.ERROR));
      console.log(error);
    }
  }
}

