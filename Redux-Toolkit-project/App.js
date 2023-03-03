import React from 'react';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import MovieDetails from './Component/MovieDetails/MovieDetails';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import './App.scss';

function App() {
  return (
    <div className="app">
    <Router>
      <Header></Header>
      <div className='container_main'>
      <Routes>
        <Route exact path = "/" element = {<Home/> }/>
        <Route path = "/movies/:id" element = {<MovieDetails/>}/>
        <Route path = "*" element = {<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
