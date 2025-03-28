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

const saveTodo = async (todo: Todo) => {
    const url = import.meta.env.VITE_TODOS_URL;
    return await fetch(url, {
      method: "POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(todo)
    });
  };

export default {getTodos,deleteTodo,saveTodo}