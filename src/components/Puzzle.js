import React, {Component} from 'react';
import {shuffle, range, every,} from 'lodash';
import UserInfo from './UserInfo'

const layout = range(0, 9).map(n => {
  const row = Math.floor(n / 3);
  const col = n % 3;
  return [80 * col, 80 * row];
});

const player = {
  id:'',
  name:'',
  score:''
}

export default class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: shuffle(range(0, 9)),
      step: 0
    }
  }
  
  updateStep(){
    this.setState({
      step: this.state.step+1
    })
  }

  updateWinner = () => {
    p.id = Math.random();
    p.score = this.state.step;
    p.name = ''
  }

  updatePosition(index) {
    this.updateStep()
    let {positions} = this.state;
    let emptyIndex = positions.indexOf(0);
    let targetIndex = positions.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);
    if (dif == 1 || dif == 3) {
      positions[emptyIndex] = index;
      positions[targetIndex] = 0;
      this.setState({positions});
      let win = every(positions, (value, index, array)=> {
        value = value || 9;
        return index === 0 || parseInt(array[index - 1]) <= parseInt(value)
      });
      if (win) {
        window.alert('You won!!!');
      }
    }
  }

  
  render() {
    return (
      <div className="game">
        <UserInfo />
        <div>Step: {this.state.step}</div>
        {this.state.positions.map((i, key)=> {
          let cellClass = key ? "cell":'empty cell';
          let [x,y] = layout[this.state.positions.indexOf(key)];
          return (
            <div
              key={key}
              className={cellClass}
              onClick={this.updatePosition.bind(this, key)}
              style={{transform: `translate3d(${x}px,${y}px,0) scale(1.1)`}}>{key}
            </div>
          )
        })}
      </div>
    )
  }
}
