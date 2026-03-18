import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from './TodoContext'

const Todos = () => {

     const todos=useContext(TodoContext)
    //   console.log('child',todos)

    // const [todos, setTodos] = useState([])

    // async function fetchTodos() {

    //     const data = await fetch(import.meta.env.VITE_API_URL)
    //     // console.log(data)
    //     const todos = await data.json()
    //     // console.log(todos)
    //     setTodos(todos.slice(0,10))
    // }

    // useEffect(() => {
    //     fetchTodos()
    // }, [])

    return (
        <div>
            {
                todos?.map((todo) =>
                    <li key={todo?.id}>
                        {todo?.id} {todo?.title}
                    </li>
                )
            }
        </div>
    )
}

export default Todos
