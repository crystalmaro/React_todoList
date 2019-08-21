import React, { Component } from 'react'

class TodoForm extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.at(this.state)
    this.props.at({
      id: Math.random(),
      content: this.state.content,
      complete: false
    })
    this.setState({
      content: ''
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todos:</label>
          <input 
            type='text' 
            onChange={this.handleChange}
            value={this.state.content} 
          />
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    )
  }
}

export default TodoForm