import { configureStore } from "@reduxjs/toolkit";
import ImageSclice from "./Redux/ImageSclice";


const store = configureStore({
 reducer : {
  imagestate : ImageSclice
  }
})

export default store;