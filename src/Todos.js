import React from 'react';

const Todos = ({fc, dt, tc}) => {

  const todoList = fc.length ? (

    fc.map(x => {
      return (
        <div className='collection-item' key={x.id}>
          <button onClick={() => {dt(x.id)}}>x</button>
          <span 
            onClick={() => {tc(x.id)}}
            style={{
              textDecoration: x.complete ? 'line-through' : ''
            }}
          > 
            {x.content}
          </span>
        </div>
      )
    })
  ) : (
    <p className='center'>No more todos!</p>
  )

  return (
    <div className='todos collection'>
      {todoList}
    </div>
  )

}

export default Todos