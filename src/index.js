import React from 'react';
import ReactDOM from 'react-dom';

const todos = [
  {
    task: 'make react tutorial',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
          <h1>react todo app 8</h1>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#app'));

let msg = "hi again from entry";
console.log(msg);