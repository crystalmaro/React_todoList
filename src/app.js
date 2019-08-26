import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import Ranking from './components/Ranking';
import Try2 from './components/Try2';
import Tick from './components/Tick';
import Try1 from './components/Try1';
import Puzzle from './components/Puzzle';
import TicTacToe from './components/TicTacToe';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Tick />
          <Route exact path='/' component={Puzzle}/>
          <Route path='/ranking' component={Ranking} />
          <Route path='/try1' component={Try1} />
          <Route path='/try2' component={Try2} />
          {/* <Route path='/tictactoe' component={TicTacToe} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
