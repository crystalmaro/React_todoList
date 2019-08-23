import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Ranking from './components/Ranking';
import Game from './components/Game';
import Tick from './components/Tick';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Tick />
          <Route exact path='/' component={Game}/>
          <Route path='/ranking' component={Ranking} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
