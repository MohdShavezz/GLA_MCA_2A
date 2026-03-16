import React, { useState } from 'react'
import './form.css'

const Form = () => {
    // const [name,setName]=useState('')
    // const [email,setEmail]=useState('')

    const [form,setForm]=useState({name:'',email:''})

    function hanleChange(e){
        e.preventDefault()
        const {name,value} =e.target
        console.log(name,value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(name==''||email==''){
            console.log('all field required')
            return
        }
        console.log(name,email)
    }

    function handleSubmitWithFormData(e){
        e.preventDefault()
        const data=new FormData(e.target)
        console.log(data.get('name'))

        const dataObject = Object.fromEntries(data.entries());
        console.log(dataObject)

    }

    // console.log('hi')

    return (
        <form onSubmit={handleSubmitWithFormData}>
            <h2 style={{textAlign:'center'}}>Fill the form</h2>
            {/* <input type="text" name='name' placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> */}
            {/* <input type="text" name='name' placeholder='name' onChange={hanleChange}/>
            <input type="text" name='email' placeholder='email' onChange={hanleChange}/> */}
            <input type="text" name='name' placeholder='name'/>
            <input type="text" name='email' placeholder='email'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
