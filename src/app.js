import React, { Component } from 'react'; 
import Todos from './Todos';
import TodoForm from './TodoForm';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'one'},
      {id: 2, content: 'two'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(x => {
      return x.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (x) => {
    x.id = Math.random();
    let todos = [...this.state.todos, x];
    this.setState({
      todos: todos
    })
   
  }

  render(){
    return (
      <div className='todo-app container'>
        <h1 className='center green-text'>Todo List</h1>
        <Todos fc={this.state.todos} dt={this.deleteTodo} />
        <TodoForm at={this.addTodo}/>

      </div>
    )
  }
}

export default App;