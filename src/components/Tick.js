import React, { Component } from 'react'

class Tick extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      maxLevel: 1,
      color: 'red',
      on: false,
      // className: 'switch'
    }
  }
  componentDidMount(){
    this.timer = setInterval(() => {
      this.tick()
      // this.setState((currentState,currentProps)=>{
      //   if(currentState.maxLevel>=6){
      //     console.log(currentState)
      //     return currentState
      //   }else{
      //     console.log(currentState)
      //     return {maxLevel:currentState.maxLevel+1}
      //   }
      // })
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
  handleOver = (e) => {
    this.setState({
      color:'blue'
    })
  }
  handleOut = (e) => {
    this.setState({
      color:'red'
    })
  }
  handleBtn = (e) => {
    // e.target.parentNode.className == 'switch' ? this.setState({className: this.state.className + ' switch-on'}) : this.setState({className: 'switch'})
    this.setState((currentState)=>(
      {on:!currentState.on}
    ))
    console.log(e.target.parentNode.className)
}
  render() {
    let className='switch'
    if(this.state.on){className+=' switch-on'}
    return (
      <div className='container'>
        <div onMouseOut={this.handleOut} onMouseOver={this.handleOver} style={{color:this.state.color}}>{this.state.date.toLocaleDateString()}</div>
        <div>{this.state.date.toLocaleTimeString()}</div>
        <div onClick={this.handleBtn} className={className}><div className='btn'></div></div>
      </div>
    )
  }
}

export default Tick