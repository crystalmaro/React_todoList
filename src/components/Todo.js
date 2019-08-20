import React from 'react';

export default props => (
  <div style={{display: 'flex'}}>
    <div 
      style={{
        textDecoration: props.x.complete ? 'line-through' : '',
      }}
      onClick={props.toggleComplete }
    >
      {props.x.text}
    </div>
    <button 
      onClick={props.handleDelete}
    >
      X
    </button>
  </div>
);


// const Todo = (props) => {
//   <div 
//   style={{
//       textDecoration: props.x.complete ? 'line-through' : ''
//   }}
//   onClick={props.toggleComplete }
// >
//   {props.x.text}
// </div>
// }

// export default Todo

