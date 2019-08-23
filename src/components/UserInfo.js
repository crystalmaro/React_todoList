import React, { Component } from 'react'
import UserSubmit from './UserSubmit'


export default class UserInfo extends Component {

  state = {
    id:1,player:'one',score:0
  }

  addLS = (data) => {
    data.id = Math.random();
    data.score = 0
    let arr = [...this.state.arr, data]
    this.setState({
      arr:arr
    })
    console.log(arr)
    localStorage.setItem('data', player)
  }

  render() {
    return (
      <div>
        <UserSubmit addLS={this.addLS} />
      </div>
    )
  }
}
