import React, { useContext } from 'react'
import Todos from './Todos'
import { TodoContext } from './TodoContext'

const Child = () => {
  // const data=useContext(TodoContext)
  // console.log('child',data)
  return (
    <div>
      Child
      <Todos/>
    </div>

  )
}

export default Child
