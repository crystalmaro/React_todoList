import React from 'react';

export default props => (
  <div style={{display: 'flex'}}>
    <button onClick={props.handleDelete}>x</button>
    <div 
      style={{
        textDecoration: props.x.complete ? 'line-through' : '',
      }}
      onClick={props.toggleComplete }
    >
      {props.x.text}
    </div>
   
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

