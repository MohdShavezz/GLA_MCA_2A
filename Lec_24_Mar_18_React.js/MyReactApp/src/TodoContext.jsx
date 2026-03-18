import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const TodoContext = createContext(null)

const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([])

    async function fetchTodos() {

        try {
            // const data = await fetch(import.meta.env.VITE_API_URL)
            // const todos = await data.json()
            // setTodos(todos.slice(0,10))
            const res = await axios(import.meta.env.VITE_API_URL)
            // console.log(res.data)
            setTodos(res.data.slice(0, 10))
        } catch (error) {
            console.log('TodoContext: ',error)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return <TodoContext.Provider value={todos}>
        {children}
    </TodoContext.Provider>
}

export default TodoProvider