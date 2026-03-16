import React from 'react'

function Child2({myname}){
    return (
    <div>
     This is Child 2
        MyName: {myname}
    </div>
  )
}

const Child = ({name}) => {
  return (
    <div>
      Child
      name in child: {name}
      <Child2 myname={name}/>
    </div>
  )
}

export default Child
