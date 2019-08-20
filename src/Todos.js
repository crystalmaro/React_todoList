import React from 'react';

const Todos = ({fc, dt}) => {

  const todoList = fc.length ? (
    fc.map(x => {
      return (
        <div className='collection-item' key={x.id}>
          <span onClick={() => {dt(x.id)}}>{x.content}</span>
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