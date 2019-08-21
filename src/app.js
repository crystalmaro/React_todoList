import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'ONE', finished: false},
      {id: 2, content: 'play mario kart', finished: false}
    ],
    option: 'all'
  }
  deleteTodo = (id) => {
    let todos = this.state.todos;
    todos.forEach(x=>{
      if(x.id == id){
        x.finished = true;
      }
    })
    this.setState({
      todos:todos
    })
    console.log(this.state.todos)
  }

  disappearTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(x => x.id != id)
    })
    console.log(this.state.todos)
  }

  changeA = () => {
    this.setState({
      todos:this.state.todos, //tell that which todos you're referring to
      option: 'all'
    })
  }
  changeB = () => {
    this.setState({
      todos:this.state.todos, //tell that which todos you're referring to
      option: 'active'
    })
  }
  changeC = () => {
    this.setState({
      todos:this.state.todos, //tell that which todos you're referring to
      option: 'finished'
    })
  }


  addTodo = (todo) => {
    todo.id = Math.random();
    todo.finished = false
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
 
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <button onClick={this.changeA}>All</button>
        <button onClick={this.changeB}>Active</button>
        <button onClick={this.changeC}>Finished</button>
        <Todos option={this.state.option} todos={this.state.todos} deleteTodo={this.deleteTodo} disappearTodo={this.disappearTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
// option within Todos is a props (property), so Todos can use it
export default App;