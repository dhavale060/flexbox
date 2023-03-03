import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AdminApi from "../../Features/AdminApi";
import DataApi from "../../Features/DataApi";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    LOADING :'loading',
    ERROR : 'error'
  })

export const fetchAsyncAdmin = createAsyncThunk("Admin/fetchAsyncAdmin" , async ({fromDate,toDate,page,limit}) => {
    const res = await AdminApi.get(`fromdate=${fromDate}&todate=${toDate}&page=${page}&limit=${limit}`);
    const data = await res.data;
    return data;
})

export const fetchAsyncData = createAsyncThunk("Admin/fetchAsyncData" , async ({fromDate,toDate,page,limit}) => {
    const res = await DataApi.get(`fromdate=${fromDate}&todate=${toDate}&page=${page}&limit=${limit}`);
    const data = await res.data;
    return data;
})

const AdminSlice = createSlice({
    name : 'Admin',
    initialState : {
       record : {},
       data :[],
       status : STATUSES.IDLE
    },
    reducers : {
      
    },
    extraReducers : {
      [fetchAsyncAdmin.pending] : (state) => {
        console.log("loading...");
        return {...state , status : STATUSES.LOADING }
      },
      [fetchAsyncAdmin.fulfilled] : (state , action) => {
        console.log("fetched Successfully");
        return {...state , record : action.payload , status : STATUSES.IDLE }
      },
      [fetchAsyncData.fulfilled] : (state , action) => {
        console.log("Data Fetched Successfully");
        return {...state ,data : action.payload}
      },
      [fetchAsyncAdmin.rejected] : (state) => {
        console.log("Something Went Rong");
        return {...state , status : STATUSES.ERROR}
      }
    }
})

export default AdminSlice.reducer;