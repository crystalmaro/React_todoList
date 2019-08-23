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
                <button
                    // fluid
                    onClick={this.handleClickNewPuzzle}
                >
                    New Puzzle
                </button>
            
                <button
                    // fluid
                    onClick={this.handleClickSolvePuzzle}
                >
                    Solve Puzzle
                </button>
            
        
        <div>
            <SlidingTilePuzzle
                solvePuzzle={this.state.solvePuzzle}
                newPuzzle={this.state.newPuzzle}
                maxIterations={50}
                // image='http://www.computing.northampton.ac.uk/~anastas/images/Mathematics/MagicSquares/Figure%20(I).png'
                // image='https://www.simplyplaygrounds.co.uk/upload/13800940799-Square-Game.jpg'
                image='https://i.ibb.co/rwZYsyw/grid.jpg'
                size={130}
            />
        </div>
                  
           
          </div>
      );
  }
}
export default Sliding;