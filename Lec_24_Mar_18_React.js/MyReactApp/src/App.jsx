import React, { Suspense, useContext } from 'react'
import Todos from './Todos'
import Parent from './Parent'
import { TodoContext } from './TodoContext'
import Expensive from './Expensive'
import { lazy } from 'react'
// import Dashboard from './Dashboard'
const Dashboard = lazy(()=>import('./Dashboard'))

const App = () => {
  // const data=useContext(TodoContext)
  // console.log('App:',data)
  return (
    <div>
      App
      {/* <Todos/> */}
      {/* <Parent/> */}
      {/* <Expensive/> */}


      <Suspense fallback={<h2>Loading...</h2>}>
        <Dashboard/>
      </Suspense>

      
    </div>
  )
}

export default React.memo(App)
