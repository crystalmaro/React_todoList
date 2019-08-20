import React, { Component } from 'react'; 
import Todos from './Todos';
import TodoForm from './TodoForm';

class App extends Component {
  state = {
    todos: [],
    UI: 'all'
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(x => x.id !== id)
    })
  }

  addTodo = (x) => {
    // x.id = Math.random();
    let todos = [...this.state.todos, x];
    this.setState({
      todos: todos
    })
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(x => {
        if (x.id == id) {
          // suppose to update
          return {
            ...x,
            complete: !x.complete
          }
        } else {
          return x;
        }
      })
    })
  }

  updateUI = (string) => {
    this.setState({
      UI: string
    });
    console.log(status)
    console.log(this.state.UI)
  }

  render(){
    let todos = [];

    if (this.state.UI == 'all') {
      todos = this.state.todos;
    } else if (this.state.UI == 'active') {
      todos = this.state.todos.filter(x => !x.complete)
    } else if (this.state.UI == 'completed') {
      todos = this.state.todos.filter(x => x.complete)
    }

    return (
      <div className='todo-app container'>
        <h1 className='center green-text'>Todo List</h1>

        <div>
          <button onClick={() => this.updateUI('all')}>All</button>
          <button onClick={() => this.updateUI('active')}>Active</button>
          <button onClick={() => this.updateUI('completed')}>Completed</button>
        </div>

        <Todos 
          fc={this.state.todos} 
          dt={this.deleteTodo}
          tc={this.toggleComplete}
        />

        <TodoForm at={this.addTodo}/>

      </div>
    )
  }
}

export default App;