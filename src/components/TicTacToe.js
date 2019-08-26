import React, { Component } from 'react'




export default class TicTacToe extends Component {
  state = {
    circle:0, //round count
    marks:[-1,-1,-1,-1,-1,-1,-1,-1,-1], //grid cell mark:(-1)empty,(0)circle,(1)cross
    winner: null //winning's info
  };

  render() {
    let cells = [];
    for(let i=0; i<this.state.marks.length; i++){
      cells.push(
        <Cell 
          index={i} />)
    }
    return (
      <div>
        <div>hi tic</div>
      </div>
    )
  }
}
