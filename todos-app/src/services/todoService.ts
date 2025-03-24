import { Todo, Todos } from "@/core/Todo"



const getTodos = async ()=>{
    const response: Response = await fetch(import.meta.env.VITE_TODOS_URL)
    const todos: Todos = await response.json()
    return todos
}

const deleteTodo = async (todo:Todo)=>{
    const url = `${import.meta.env.VITE_TODOS_URL}/${todo.id}`
    return await fetch(url,{method:"DELETE"})
}

export default {getTodos,deleteTodo}