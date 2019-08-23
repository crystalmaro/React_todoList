import React, { Component } from 'react'
import UserInfo from './UserInfo'

class Game extends Component {
  render() {
    return (
      <div className='container'>
        <UserInfo />
        <div>this is game</div>
      </div>
    )
  }
}

export default Game
