import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      hometown: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleHometownChange = this.handleHometownChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e){
    this.setState({
      userName: e.target.value
    })
  }

  handleHometownChange(e){
    this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      payload: {
        name: this.state.userName,
        hometown: this.state.hometown
      }
    })
    this.setState({
      userName: '',
      hometown: ''
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Username: </label><input value={this.state.userName} type="text" onChange={this.handleNameChange} /><br />
        <label>Hometown: </label><input value={this.state.hometown} type="text" onChange={this.handleHometownChange} /><br />
      </form>
    )
  }
}

export default UserInput;
