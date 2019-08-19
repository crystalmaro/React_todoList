import React from 'react';
import ReactDOM from 'react-dom';

// const todos = [
//   {
//     task: 'make react tutorial',
//     isCompleted: false
//   },
//   {
//     task: 'eat dinner',
//     isCompleted: true
//   }
// ]

class App extends React.Component {
  state = {
    name: 'Ryu',
    age: 30
  }
  render() {
    return (
      <div className='app-content'>
        <h1>ninja</h1>
        <p>My name is: { this.state.name } and I am { this.state.age }</p>
        <form>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#app'));

// var destination = document.querySelector('#app');
// ReactDOM.render(
//   <div>
//     <p>hi indian</p>
//   </div>,
//   destination
// );

let msg = "hi again from entry";
console.log(msg);