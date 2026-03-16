import React, { useState } from 'react'
import './form.css'
import { useRef } from 'react'

const UncontrolForm = () => {
    const nameRef= useRef(null)

    function handleSubmitWithFormData(){
        // let id=document.getElementById('form')
        console.log(nameRef.current.name)
    }

    return (
        <div id='form'>
            <h2 style={{textAlign:'center'}}>Fill the form</h2>
            <input ref={nameRef} type="text" name='name' placeholder='name'/>
            <input type="text" name='email' placeholder='email'/>
            <button onClick={handleSubmitWithFormData}>Submit</button>
        </div>
    )
}

export default UncontrolForm
