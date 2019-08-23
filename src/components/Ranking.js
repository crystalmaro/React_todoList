import React, { Component } from 'react'
import Tick from './Tick'

class Ranking extends Component {
  state = {
    player: ''
  }
  componentDidMount(){
    this.load()
  }
  load(){
    this.setState({
      player: localStorage.getItem('player')
    })
  }

  render() {
    return (
      <div className='container'>
        <div>Ranking: {this.state.player}</div>
      </div>
    )
  }
}

export default Ranking