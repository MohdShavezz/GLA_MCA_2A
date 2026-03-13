import React from 'react'
import Child from './Child'

let name='tom'

const Parent = () => {
  return (
    <div>
      Parent
      <p>Name: {name}</p>
      <Child name={name}/>
    </div>
  )
}

export default Parent
