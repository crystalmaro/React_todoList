import React, { Component } from 'react';
// import ls from 'local-storage';

class UserInfo extends Component {
  state = {
    player: ''
  }

  // componentDidMount(){
  //   ls.get('key')
  // }

  handleChange = (e) => {
    this.setState({
      player: e.target.value
    })
  };
 
  handleSubmit = (e) => {
    e.preventDefault();
    const player = this.state.player;
    localStorage.setItem('player', player)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.player} />
            <button>Submit Name</button>
        </form>
      </div>
    )
  }
}

export default UserInfo