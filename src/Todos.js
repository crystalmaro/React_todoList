import React from 'react';

// const Todos = ({dt, tc}) => {

//         <div className='collection-item'>
//           <button onClick={dt}>x</button>
//           <span 
//             onClick={tc}
//             style={{
//               textDecoration: x.complete ? 'line-through' : ''
//             }}
//           > 
//             {x.content}
//           </span>
//         </div>
   

//   return (
//     <div className='todos collection'>
//       {todoList}
//     </div>
//   )

// }

// export default Todos


export default props => (
  <div className='collection-item'>
    <button onClick={props.dt}>x</button>
    <div 
      style={{
        textDecoration: props.x.complete ? 'line-through' : '',
        display: 'inline'
      }}
      onClick={props.tc}
    >
      {props.x.content}
    </div>
  </div>
);