import React, { useEffect, useState } from 'react';
import AddContactList from './Components/AddContactList';
import Header from './Components/Header';
import './App.css';
import ContactList from './Components/ContactList';

function App() {
  const LOCAL_STORE_KEY = "contacts";
  const [contacts , setContacts] = useState([]);
// By passing any function as props in any component we can accsess the data through chield to parrent
  const addContactHandler = (contact) => {
    setContacts([...contacts , contact]);
  };

  const addlocalData = () => {
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
    if(retriveContact){setContacts(retriveContact)};
    
  }

useEffect(() => {
    localStorage.setItem(LOCAL_STORE_KEY , JSON.stringify(contacts))
   },[contacts]);

useEffect(() => {
return addlocalData(); 
},[])

  return (
    <div className=' ui container'>
       <Header/>
       <AddContactList addContactHandler = {addContactHandler}/>
       <ContactList contacts = {contacts}/>
    </div>
  )
}

export default App
