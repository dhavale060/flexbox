import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GymsComponent from './GymsPage/GymsComponent';
import FitnessComponent from './FitnessPage/FitnessComponent';
import Navabar from './Header/Navabar';
// import { Provider } from 'react-redux';
// import store from './Redux/Store/Store';


function App() {
  return (
    <div>
     <BrowserRouter>
       <Navabar/>
        <Routes>
          <Route path = '/' exact element = {<FitnessComponent/>}/>
          <Route path = '/gyms' element = {<GymsComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
