import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './BodySection/Home';
import LoginComponent from './Component/LoginComponent';
import NavbarComponent from './Component/NavbarComponent';
import RegistrationComponent from './Component/RegistrationComponent';
import HeaderComponent from './Header/HeaderComponent';

function App() {
  return (
    <div className='container-fluid main-container'>
      <BrowserRouter>
      <NavbarComponent/>
      <HeaderComponent/>
         <Routes>
           <Route path='/' element = {<Home/>}/>
           <Route path='register' element = {<RegistrationComponent/>}/>
           <Route path='login' element = {<LoginComponent/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
