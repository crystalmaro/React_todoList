import React from 'react';
import ReactDOM from 'react-dom';
import Ninjas from './ninja'

class App extends React.Component {
  state = {
    name: 'Ryu',
    age: 30
  }
  handleChange = (e) => {
    this.setState({
      // e.preventDefault();
      name: e.target.value
    });
  }
  handleSubmit = (e) => {
      e.preventDefault();
      console.log("hi", this.state.name)
  }
  render() {
    return (
      <div className='app-content'>
        <h1>ninja</h1>
        <p>My name is: { this.state.name } and 111111 I am { this.state.age }</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        <Ninjas />
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