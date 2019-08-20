import React from 'react'

const Ninjas = ({ninjas}) => {
  const ninjaList = ninjas.map(x => {
    if(x.age > 20){
      return (
        <div className="ninja" key={x.id}>
          <div>Name: { x.name }</div>
          <div>Age: { x.age }</div>
        </div>
      )
    }
  })
  return(
    <div className="ninja-list" >
      { ninjaList }
    </div>
  )

}

export default Ninjas