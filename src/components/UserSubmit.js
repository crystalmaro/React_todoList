import React, { Component } from 'react';
// import ls from 'local-storage';

class UserSubmit extends Component {
  state = {
    name:''
  }

  // componentDidMount(){
  //   ls.get('key')
  // }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  };
 
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLS(this.state);
    this.setState({
      name:''
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.name} />
            <button>Submit Name</button>
        </form>
      </div>
    )
  }
}

export default UserSubmit