import React, { useReducer, useState } from 'react';
import "./Home.css";
import reducer from '../Reducer/Reducer';

const initialState = [{id : Date.now() , username : "Sachin" , mobile : "9359093215" , email : "sachindhavale3505@gmail.com"}]


function Home() {
  const [ username , setUserName] = useState("");
  const [ mobile , setMobile] = useState("");
  const [ email , setEmail] = useState("");
  const [ state , dispatch] = useReducer( reducer , initialState);

  const contact = {id : Date.now() ,username : username ,mobile : mobile ,email : email};

  console.log(state);

  const handleSubmit = (e) => {
     e.preventDefault();
     dispatch({type : "Add" , payload : contact})
     setUserName("");
     setMobile("");
     setEmail("");
  }

  return (
    <div className='container'>
      <div className='form_container'>
        <form onSubmit={handleSubmit}>
            <dl>
                <dt className='form-label'>UserName : </dt>
                <dd><input type="text" className='form-control' value={username} onChange = {(e) => setUserName(e.target.value)} /></dd>
                <dt className='form-label'>Mobile : </dt> 
                <dd><input type="text" className='form-control' value={mobile} onChange = {(e) => setMobile(e.target.value)} /></dd>
                <dt className='form-label'>Email : </dt>
                <dd><input type="text" className='form-control' value={email} onChange = {(e) => setEmail(e.target.value)} /></dd>
            </dl>
            <div className='btn_container'>
                <button type="submit" className=' btn btn-secondary'>Submit</button>
            </div>
        </form>
      </div>
      <div className='form_container'>
        <ul className=''>
          {
            state.map((contact) =>{
              return (
                <li key={contact.id}>
                  <h6 key={contact.username}>{contact.username}</h6>
                  <h6 key={contact.mobile}>{contact.mobile}</h6>
                  <h6 key={contact.email}>{contact.email}</h6>
                  <div>
                    <button key={contact.id} className='btn btn-danger' onClick={() => dispatch({type : "Remove" , payload :{id:contact.id} })}>
                      Delete
                    </button>
                  </div>
               </li>
              )
            }
              )
          }
        </ul>
      </div>
    </div>
  )
}

export default Home
