import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      userName: "",
      hometown: ""
    }
  }

  handleUserNameInputChange(e){
    this.setState({
      userName: e.target.value
    })
  }

  handleHometownInputChange(e){
    this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit(){
    this.props.store.dispatch({type: "ADD_USER", payload: {userName: this.state.userName, hometown: this.state.hometown}})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleUserNameInputChange.bind(this)} value={this.state.userName}/>
          <input type="text" onChange={this.handleHometownInputChange.bind(this)} value={this.state.hometown}/>
        </form>
      </div>
    )
  }
}

export default UserInput;
