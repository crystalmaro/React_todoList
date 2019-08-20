import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: 'all'
  }


  addTodo = (x) => {
    const newTodos = [x, ...this.state.todos]; //spread operator
    this.setState({
      todos: newTodos
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

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(x => x.id !== id)
    })
  }

  updateUI = (string) => {
    this.setState({
      todoToShow: string
    })
  }

  render(){
    let todos = [];

    if (this.state.todoToShow == 'all') {
      todos = this.state.todos;
    } else if (this.state.todoToShow == 'active') {
      todos = this.state.todos.filter(x => !x.complete)
    } else if (this.state.todoToShow == 'completed') {
      todos = this.state.todos.filter(x => x.complete)
    }

    return (
      <div>

        <TodoForm onSubmit={this.addTodo} />
        {todos.map(x => (
          <Todo 
            key={x.id} 
            toggleComplete={() => this.toggleComplete(x.id)} 
            handleDelete={() => this.handleDelete(x.id)}
            x={x} 
          />
        ))}

        <div>
          todos left: {this.state.todos.filter(x => !x.complete).length}
        </div>

        <div>
          <button onClick={() => this.updateUI('all')} className='statusButton'>All</button>
          <button onClick={() => this.updateUI('active')} className='statusButton'>Active</button>
          <button onClick={() => this.updateUI('completed')} className='statusButton'>Completed</button>
        </div>

      </div>
    );
  }
}

export default TodoList