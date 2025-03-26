import React from 'react'
import { useTodoContext } from './TodoContext'
import { Todo } from './core/Todo'

function TodoList() {
const {state,addTodo,deleteTodo} = useTodoContext()
  return (
    <>
    <h2>TodoList</h2>
    <ul>
    {state.todos.map((todo:Todo)=>(
        <li key={todo.id}>{todo.title} - <button onClick={() => deleteTodo(todo)}>delete</button></li>
    ))}
    </ul>
    </>
  )
}

export default TodoList