import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// import "./node_modules/@mui/system/esm/createStyled.js"
import "../node_modules/@emotion/styled/dist/emotion-styled.esm.js"
import "../node_modules/@mui/system/esm/createStyled.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
// import HorizontalLinearStepper from './MultiStepsForms/HorizontalLinearStepper';
// import MultistepContext from './MultiStepsForms/MultistepsContext/MultistepContext';
// import List from './TODO_LIST/List';
// import App from './ImageApp/App';
// import store from './Unsplash_Project/Store/Store'
// import App from './Tutoreal/App';
// import App from './GurgaonAssignment/App';
// import AdminStore from './GurgaonAssignment/Store/Store';  
// import Tutoreal from './Tutoreal/MoviePage';
// import App from './Assignment_6/App';
// import BoxOneComponent from './FrontendAssignment/JobPage/Components/BoxOne/BoxOneComponent';
// import ArchDesignComponent from './FrontendAssignment/JobPage/Components/ArchDesign/ArchDesignComponent';
// import App from './FrontendAssignment/App';
// import ParentComponent from './UseMemo/ParentComponent';
// import Assignment from './Assignment';
// import ArrFilter from './TwoWayBind/ArrFilter';
// import TwoWay from './TwoWay';
// import App from './Redux-Toolkit-project/App';
// import { Provider } from 'react-redux';
// import store from './ImageApp/REDUX/Store/Store';
// import { store } from './Redux-Toolkit-project/Features/store';
// import UseCallBack from './useCallback/UseCallBack';
// import MultiShop from './TheFastWayAssignment/MultiShop';
// import Navbar from './TheFastWayAssignment/Component/Navbar';
// import NavbarComponent from './Unsplash_Project/Component/NavbarComponent';
// import App from './Unsplash_Project/App';
// import FilterComponent from './ImageApp/Body/FilterComponent';
// import HeaderComponent from './Unsplash_Project/Header/HeaderComponent';
// import RegistrationComponent from './Unsplash_Project/Component/RegistrationComponent';
// import LoginComponent from './Unsplash_Project/Component/LoginComponent';
// import List from './TODO_LIST/List';
// import Navabar from './WTF_Assignment/Header/Navabar';
// import Section1 from './WTF_Assignment/Components/Section1';
import App from './WTF_Assignment/App';
import { Provider } from 'react-redux';
// import persistStore from 'redux-persist/es/persistStore';
// import { PersistGate } from 'redux-persist/integration/react';
import store from './WTF_Assignment/Redux/Store/Store';
// import Date from './Assignment_5/Tutoreal';
// import Tutoreal from './Assignment_5/Tutoreal';
// import Image from './Assignment_5/Image';
// import ArrFilter from './TwoWayBind/ArrFilter';
// import Home from './useReducerHook_Demo/Components/Home';
// import App from './PropDrilling-Project/App';
// import App from './todolist/App';
// import StateContext from './todolist/StateContext';
// import HeaderComponent from './FrontendAssignment/JobPage/Components/Header/HeaderComponent';

// let persistore = persistStore(AdminStore);
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
   <Provider store={store}>
     <App/>
   </Provider>
  </React.StrictMode>
);

//add when you want to run the redux-toolkit-project
/* <Provider store={store}>
     <App/>
   </Provider> */

/* <Provider store={AdminStore}>
     <PersistGate persistor = {persistore}>
      <App/>
     </PersistGate>
</Provider> */

/* <MultistepContext>
       <HorizontalLinearStepper/>
</MultistepContext> */

