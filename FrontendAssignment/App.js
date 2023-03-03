import React from 'react';
import './App.css';
import arrow from './arrow-down.png';
import ArchDesignComponent from './JobPage/Components/ArchDesign/ArchDesignComponent';
import BigComponent from './JobPage/Components/BigBox/BigComponent';
import BoxFiveComponent from './JobPage/Components/BoxFive/BoxFiveComponent';
import BoxFourComponent from './JobPage/Components/BoxFour/BoxFourComponent';
import BoxOneComponent from './JobPage/Components/BoxOne/BoxOneComponent';
import BoxThreeComponent from './JobPage/Components/BoxThree/BoxThreeComponent';
import BoxTwoComponent from './JobPage/Components/BoxTwo/BoxTwoComponent';
// import path_3 from '../FrontendAssignment/Path 3.png';
import HeaderComponent from './JobPage/Components/Header/HeaderComponent'

function App() {
  return (
    <>
      <HeaderComponent/>
      <div className='group_11'>
       <img src={arrow} className="icone" alt='img_arrow'/>
         {/* <div className='arrow_left'>
            <div className='arrow_down'>
              <img className='path-3' src={path_3} alt=""/>
              <i className='path-2'></i>
            </div>
         </div> */}
      </div>
      <div className='text_one'>Back to jobs</div>
      <ArchDesignComponent/>
      <BoxOneComponent/>
      <BoxTwoComponent/>
      <BoxThreeComponent/>
      <BoxFourComponent/>
      <BigComponent/>
      <BoxFiveComponent/>
    </>
  )
}

export default App
