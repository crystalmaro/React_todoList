
import React, { Component } from 'react';
import Layout from './Layout';

class Try2 extends Component {
  state = {
    positions: Math.floor(Math.random() * 10),
  }

  render() {
    return (
      <div className='container'>
        <Layout />
        <div>random number: {this.state.positions}</div>
      </div>
    )
  }
}

export default Try2
