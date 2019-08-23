import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import Ranking from './components/Ranking';
import Game from './components/Game';
import Tick from './components/Tick';
import Sliding from './components/Sliding';
import Kitty from './components/Kitty.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Tick />
          <Route exact path='/' component={Game}/>
          <Route path='/ranking' component={Ranking} />
          <Route path='/Sliding' component={Sliding} />
          <Route path='/Kitty' component={Kitty} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
