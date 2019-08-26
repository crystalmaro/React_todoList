import React, { Component } from 'react';
// import './App.css';
import SlidingTilePuzzle from 'react-sliding-tile-puzzle';
// import { Button, Segment } from 'semantic-ui-react';

class Sliding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solvePuzzle: false,
      newPuzzle: false,
    };
  }

  handleClickSolvePuzzle = () => {
    this.setState({ solvePuzzle: !this.state.solvePuzzle });
  };

  handleClickNewPuzzle = () => {
    this.setState({ newPuzzle: !this.state.newPuzzle });
  };

  render() {
    return (
      <div>   
        <button onClick={this.handleClickNewPuzzle}>New Puzzle</button>
        <button onClick={this.handleClickSolvePuzzle}>Solve Puzzle</button>
        <div>
          <SlidingTilePuzzle
            solvePuzzle={this.state.solvePuzzle}
            newPuzzle={this.state.newPuzzle}
            maxIterations={300}
            image='https://i.ibb.co/rwZYsyw/grid.jpg'
            size={300}
          />
        </div>
      </div>
    );
  }
}
export default Sliding;