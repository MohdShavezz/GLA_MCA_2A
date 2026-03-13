import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if(name==''||email==''){
            console.log('all field required')
            return
        }
        console.log(name,email)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 style={{textAlign:'center'}}>Fill the form</h2>
            <input type="text" name='name' placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
