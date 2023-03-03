import React,{useEffect} from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchAsyncAdmin, fetchAsyncData } from '../GurgaonAssignment/Store/Redux/AdminSlice';
import Dashboard from './DashBoard/Dashboard';
import Header from './Header/Header';
import StackComponent from './Stack/StackComponent';
import 'devextreme/dist/css/dx.light.css';

function App() {
const dispatch = useDispatch();

useEffect(() => {
  const records = {fromDate : "2022-04-01" , toDate : "2022-08-24" ,page : "1" ,limit : "10"};
  dispatch(fetchAsyncAdmin(records));
  dispatch(fetchAsyncData(records));
},[dispatch]);

const handleLimit = () => {

}
  return (
    <div className='container_main d-grid '>
      <div className='col-12'>
         <Dashboard/>
         <Header/>
         <StackComponent handleLimit = {handleLimit}/>
      </div>
    </div>
  )
}

export default App
