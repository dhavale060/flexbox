import { ErrorMessage, Field, Form, Formik} from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import "./RegistrationComponent.css";
import UserData from './UserData';
// const userDataComponent = React.lazy(() => import ('./UserData'))


const getData = () => {
  const elem =  localStorage.getItem('lists');

  if(elem){
    return JSON.parse(localStorage.getItem('lists'));
  } else {
    return [];
  }
}

function RegistrationComponent() {
  const [item , setItem] = useState(getData());
  const deleteItem = (id) => {
      console.log(id);
   const updateItems =  item.filter((elem , ind) => {
        return ind !== id 
     })
     setItem(updateItems);
  }
 
  useEffect(() => {
   localStorage.setItem('lists' , JSON.stringify(item))
  },[item])

  console.log(item);
   return (
    <div className='container-fluid main_container'>
      <Formik 
       initialValues={{FullName :"" ,Email :"",Password:"",Mobile:"",Gender:"",Language:""}}
       validationSchema = {yup.object({
        FullName : yup.string().required(),
        Password : yup.string().min(8 , "password must be minimum 8 character").required(),
        Mobile : yup.number().min(10).required(),
        Gender : yup.string().required(),
        Language : yup.string().required() 
       })}
       onSubmit = {
        (values , {resetForm}) => {
          console.log(JSON.stringify(values));
          
          if(values){
            setItem([...item , values]);
          }
          resetForm({values : ""})
        }
       }
      >
        <div className='form-box'>
          <h2 className='text-center m-3'>Registration</h2>
        <Form>
           <div>
             <dl>
              <dt className='form-label'>FullName :</dt>
              <dd><Field type = "text" name = 'FullName' className = 'form-control'/></dd>
              <dd className='text-danger'><ErrorMessage name='FullName'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dt className='form-label'>Email :</dt>
              <dd><Field type = "email" name = 'Email' className = 'form-control'/></dd>
              <dd className='text-danger'><ErrorMessage name='Email'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dt className='form-label'>Password :</dt>
              <dd><Field type = "text" name = 'Password' className = 'form-control'/></dd>
              <dd className='text-danger'><ErrorMessage name='Password'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dt className='form-label'>Mobile :</dt>
              <dd><Field type = "mobile" name = 'Mobile' className = 'form-control'/></dd>
              <dd className='text-danger'><ErrorMessage name='Mobile'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl className='form-check d-flex justify-content-between'>
              <dt className='form-label'>Gender :</dt>
              <dd><Field type = "radio" id = "Male" value = 'Male' name = 'Gender' className = 'form-check-input'/> Male</dd>
              <dd><Field type = "radio" id = "Femail" value = 'Femail' name = 'Gender' className = 'form-check-input'/> Femail</dd>
              <dd><Field type = "radio" id = "Other" value = 'Other' name = 'Gender' className = 'form-check-input'/> Other</dd>
              <dd className='text-danger'><ErrorMessage name='Gender'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dt className='form-label'>Language :</dt>
              <dd><Field as = "select" type = 'text' name = 'Language' className = 'form-select'>
                     <option id='0'>All</option>
                     <option id='1'>English</option>
                     <option id='2'>Hindi</option>
                     <option id='3'>Marathi</option>
                  </Field>
              </dd>
              <dd className='text-danger'><ErrorMessage name='Language'></ErrorMessage></dd>
             </dl>
           </div>
           <button type='submit' className='btn btn-primary'>Submit</button>
        </Form>
        </div>
      </Formik>
      <div>
        <UserData deta = {item} deleteItem = {deleteItem}/> 
      </div>
    </div>
   )
}

export default RegistrationComponent
