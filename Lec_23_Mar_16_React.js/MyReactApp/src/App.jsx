import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Parent from './components/Parent'
import Form from './components/Form'
import UncontrolForm from './components/UncontrolForm'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Button 
     width={'3rem'}  
     bgColor={'green'}
     shape={'0px'}
     content={'Login'}
     />
     <h2> This is react app</h2>
     <Button 
     width={'4rem'}  
     bgColor={'red'}
     shape={'5px'}
     content={'Signup'}
     /> */}

     {/* <Parent/> */}

     {/* <Form/> */}
     <UncontrolForm/>
     <Footer/>
    </div>
  )
}

export default App
