import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Redux/AdminSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'




const persistConfig = {
  key : 'root',
  versions : 1,
  storage,
}

const rootReducers = combineReducers({
  adminState : AdminSlice 
})

const persistedReducer = persistReducer(persistConfig , rootReducers)

const AdminStore = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default AdminStore;