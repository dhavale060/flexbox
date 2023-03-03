import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';
import imag from "../Images/image1.png";
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { fetchAsyncImages } from '../Store/Redux/ImageSclice';
function NavbarComponent() {
const dispatch = useDispatch();
    
const term = "love";
  
useEffect(() => {
  dispatch(fetchAsyncImages(term));
 },[dispatch]);

  return (
    <nav className='fixed-top nav_item'>
      <div className='Qgh'>
        <Link to ="/">
          <img src = {imag} width = "38" height = "38" className='svgp KHFeP' alt='loading...'/>
        </Link>
        <div className='option'></div>
        <SearchBar/>
        <ul className='YN6Wg ruKGA oh0KJ'>
            <li><a className='ztehP KHq0c' target="_self" href ='https://unsplash.com/explore'><div>Explore</div></a></li>
            <li><a className='ztehP KHq0c' target="_self" href ='https://unsplash.com/advertise'><div>Advertise</div></a></li>
            <li><a className='ztehP KHq0c' target="_self" href ='https://unsplash.com/plus'><div>Unsplash+</div></a></li>
        </ul>
        <div className ="sIpir kG7WW">
            <div className ="f9ubX"></div>
            <div className='div_x'></div>
            <div className ="pljfe">
                <Link className ="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L" to = "register" rel="nofollow">Register</Link>/<Link to ="login" className ="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L" rel="nofollow">Sign up</Link>
            </div>
            <div style={{flexShrink:0 , width: "8px"}}></div>
        </div>
        <button type="button" className = "CwMIr DQBsa p1cWU jpBZ0 EzsBC KHq0c Olora I0aPD dEcXu kG7WW">
            {/* <span className = "DKmkh">Submit</span> */}
            <span className = "kfYyx">Submit a photo</span>
        </button>
        <div style={{flexShrink:0 , width: "12px"}}></div>
        <div className='TkpKu'>
         <button type='button' className='QeEH8 HFqVz jpBZ0'>
         <i className='bi bi-card-list BOTrp'></i>
         </button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent
