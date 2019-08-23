import React, { Component } from 'react'

class Tick extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      count: 0,
      text: 'hhh'
    }
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // method. can also add it directly into the componentDidMount()
  tick(){
    this.setState({
      date: new Date(),
      // count: this.state.count+2
    })
  }

  render() {
    return (
      <div className='container'>
        <div>{this.state.count} {this.state.text} {this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }
}

export default Tick