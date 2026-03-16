import React from 'react'
import  './Header.css'

const Header = () => {
  return (
    <nav 
    // style={{width:"100%",backgroundColor:'pink'}}
    >
      <div className="left">
        LOGO
      </div>
      <div className="right">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}

export default Header
