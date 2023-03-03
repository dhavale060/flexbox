import React from 'react'

function ContactCard(props) {
 const {id , email , name} = props.contact ;
  return (
    <div className='item d-flex justify-content-between'>
         <div className='content' key={id}>
           <div className='header'>{name}</div>
           <div>{email}</div>
         </div>
      <i className='trash alternate outline icon' style={{color:"red", marginTop: "7px"}}></i>
    </div>
  )
}

export default ContactCard
