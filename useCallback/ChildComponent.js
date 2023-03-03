import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props){
        super(props);
    }
  
  render() {
    console.log("ChildComponent will rerender");
    return (
      <div className='container-fluid'>
        <p>Hello child</p>
        <h2>{this.props.Name}</h2>
        <input type="text" onChange={(e)=> this.props.updateName(e.target.value)} className ="form-control" />
      </div>
    )
  }
}
