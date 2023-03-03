import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Login from './Login/Login';
import Navbar from './Pages/Navbar';
import Register from './Regestration/Register';
import MoviePage from './MoviePage/MoviePage';
import Home from './HomePage/Home';

function App() {
  return (
    <div className='main_container'>
      <BrowserRouter>
        <Navbar/>
         <section className='main_section'>
         <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/register' exact element={<Register/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/movie' exact element={<MoviePage/>}/>
        </Routes>
         </section>
      </BrowserRouter>
    </div>
  )
}

export default App
