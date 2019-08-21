import React from 'react';

const Todos = ({option, todos, deleteTodo, disappearTodo}) => {
  let showEmma = todos;  // emma is A貨
  if(option == 'all'){
    showEmma = todos
  } else if(option == 'active'){
    showEmma = todos.filter(x => x.finished == false)
  } else if(option == 'finished'){
    showEmma = todos.filter(x => x.finished == true)
  }

  // show the newly updated emma, after 上面的 if 判斷
  const todoList = showEmma.length ? (
    showEmma.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <button onClick={() => {disappearTodo(todo.id)}}>disappear</button>
          <button onClick={() => {deleteTodo(todo.id)}}>x</button>
          <span style= {todo.finished===true ? {textDecoration: 'line-through',color:'red'} : {color: 'black'}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}
export default Todos;