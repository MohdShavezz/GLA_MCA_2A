import React from 'react'

const Button = (props) => {
    // console.log(props)
    const {width,bgColor,shape,content}=props
  return (
    <div style={{width:width,backgroundColor:bgColor,borderRadius:shape,padding:'.5rem',textAlign:'center'}}>
      {content}
    </div>
  )
}

export default Button
