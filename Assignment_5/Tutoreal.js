import React, { useState } from 'react'

function Tutoreal(){
    const [date , setDate] = useState('');
    const [res , setRes] = useState('');
    
    
    function handleDate(e){
       setDate(e.target.value);
    }

    console.log(date)
    const handleDay = () => {
     const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      var d = new Date(date).getDay()
      setRes(days[d]);
     }
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-lg-evenly align-content-center mt-5 w-50'>
       <input type='date' className='form-control ml-3' onChange = {handleDate}/>
       <button type='button'className='btn btn-info' onClick={(e) => handleDay(e ,date)}>Submit</button>
      </div>
      <h2>{res}</h2>
    </div>
  )
}

export default Tutoreal
