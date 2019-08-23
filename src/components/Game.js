import React, { Component } from 'react';
import UserInfo from './UserInfo';
import Layout from './Layout';

class Game extends Component {
  state = {
    positions: Math.floor(Math.random() * 10),
  }

  render() {
    return (
      <div className='container'>
        <UserInfo />
        <Layout />
        <div>random number: {this.state.positions}</div>
      </div>
    )
  }
}

export default Game
