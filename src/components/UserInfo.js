import React, { Component } from 'react'
import UserSubmit from './UserSubmit'


export default class UserInfo extends Component {

  state = {
    data: [
      {id:'',player:'',score:''},
    ]
  }

  addLS = (x) => {
    x.id = Math.random();
    x.score = 0
    let data = [...this.state.data, x]
    this.setState({
      data
    })
    console.log(x)
    // Submit action in UserSubmit.js
    // pass the value to UserInfo.js (current file)
    // save it to localStorage
    localStorage.setItem('player', JSON.stringify(data))
  }

  render() {
    return (
      <div>
        <UserSubmit addLS={this.addLS} />
      </div>
    )
  }
}
