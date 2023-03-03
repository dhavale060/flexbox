import React, {useEffect} from 'react';
import { useDispatch} from 'react-redux';
import BodySection from '../Component/BodySection';
import Section1 from '../Component/Section1';
import { fetchAsyncImages} from '../Store/Redux/ImageSclice';
import './Home.css';

function Home() {
  const term = "love";
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAsyncImages(term))
  },[dispatch])
  return (
    <div className='Home_page'>
      <Section1/>
      <BodySection/>
      <div className='d-flex justify-content-center align-item-center mb-5'>
        <button type='button' className='btn btn-dark'>Lern More</button>
      </div>
    </div>
  )
}

export default Home
