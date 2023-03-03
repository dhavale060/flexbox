import React, { useMemo, useState } from 'react'
import ChildComponent from './ChildComponent';

function UseCallBack() {
    const [name , setName] = useState("");
    const [num , setNum] = useState(0);
    const changeName = (newName) => {
       setName(newName);
    }
    const childComponent  = useMemo(()=> <ChildComponent Name={name} updateName={changeName}/> ,[name])
    const addNumber = ()=>{
      return setNum(num + 1)
    }
    console.log("i am the parent")
  return (
    <div className='container-fluid align-items-center justify-content-center'>
      <h2>Hello Sachin</h2>
      <h3>{num}</h3>
      {childComponent}
      {/* <ChildComponent Name={name} updateName={changeName}/> */}
      <button type='button' onClick={addNumber} className='btn btn-info mt-3'>Add Number</button><br/>
    </div>
  )
}

export default UseCallBack
