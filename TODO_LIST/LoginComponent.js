import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import './LoginComponent.css';
import * as yup from "yup";

function LoginComponent() {
  const Password = "Sachin@123";
  return (
    <div className='container-fluid'>
        <div className='box_1'>
           <Formik
            initialValues={{Email : "" , Password :""}}
            validationSchema = {yup.object({
              Email : yup.string().email().required(),
              Password : yup.string().min(8).required()
            })}
            onSubmit = {(values,{resetForm}) =>{
               const item = JSON.parse(localStorage.getItem('lists'))
               if(item){
                 item.map(ele => {
                  if(ele.Email == values.Email && ele.Password == values.Password){
                    return console.log("User Succesfully login");
                  }else{
                    alert("Please enter a valid data");
                  }
                 })
               }            
               resetForm({values : ""});
            }}
           >
            <Form className='form_box'>
              <h2>Login Here</h2>
              <div>
               <dl>
                 <dt>Email :</dt>
                 <dd><Field type = "gmail" className = "form-control" name = "Email"/></dd>
                 <dd className='text-danger'><ErrorMessage name='Email'></ErrorMessage></dd>
                 <dt>Password :</dt>
                 <dd><Field type = "text" className = "form-control" name = "Password"/></dd>
                 <dd className='text-danger'><ErrorMessage name='Password'></ErrorMessage></dd>
               </dl>
              </div>
              <div className='d-grid'>
                 <button type='submit' className='btn btn-info'>Login</button>
              </div>
            </Form>
           </Formik>
        </div>
    </div>
  )
}

export default LoginComponent
