import React, { useState } from 'react'
import MyComp from './MyComp.jsx'
import Counter from './Counter.jsx'

const App = () => {
  const [show , setShow]=useState(true)
  return (
    // fragments 
    <>
    <button onClick={()=>setShow(false)}>Remove</button>
      <div>
        This is App

      </div>
      <MyComp />
      {show&&<Counter/>}
    </>
  )
}

export default App
