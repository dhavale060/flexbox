import { configureStore } from "@reduxjs/toolkit";
import GymeReducer from '../GymeSlice';

const store = configureStore({
  reducer : {
    gymsstate : GymeReducer
  }  
})

export default store;