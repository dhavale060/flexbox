import React, { Component } from 'react'

export class AddContactList extends Component {
  constructor(){
    super();
    this.state = {
      name : "", 
      email : ""
    }
    this.Add = this.Add.bind(this);
  }
 Add(e){
  e.preventDefault();
  if (this.state.name == "" || this.state.email == ""){
    alert("All fields are mandiatory !");
    return; 
  }
  this.props.addContactHandler(this.state);
  this.setState({name : "" , email : ""})
 }
  render() {
    return (
      <div className='ui main mt-5'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={this.Add}>
           <div className='field'>
              <label> Name :</label>
              <input type = "text" value={this.state.name} name = "name" onChange={(e) => this.setState({name : e.target.value})}/>
           </div>
           <div className='field'>
              <label> Email :</label>
              <input type = "text" value={this.state.email} name = "name" onChange={(e) => this.setState({email : e.target.value})}/>
           </div>
           <button className='ui button blue'>Add</button>
        </form>
      </div>
    )
  }
}

export default AddContactList
