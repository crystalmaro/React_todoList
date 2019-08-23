import React from 'react'

const Layout = () => {

  const numbers = [1,2,3,4,5,6,7,8]
  // const random = numbers[Math.floor(numbers.length * Math.random())]

  const grid = numbers.map(x => {
    return(
      <div className='grid' key={x}>
        {x}
      </div>
    )
  })

  return (
    <div>
      <div className='gridContainer'>
        {grid}
      </div>
    </div>
  )
}

export default Layout