import React, { useActionState } from 'react'
import { useTodoContext } from './TodoContext';
import { Todo } from './core/Todo';

function TodoForm() {
  
  const {state,addTodo,deleteTodo} = useTodoContext()
  
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const todo:Todo = {
        title:formData.get("title"),
        completed:formData.get("completed")==="on"?true:false
      }
      console.log(todo)
      addTodo(todo)
    },
    null,
  );
  return (
    <>
      <h2>TodoForm</h2>
      <form action={submitAction}>
      <input type="text" name="title" placeholder='Todo title ...'/>
      <br />
      <input type="checkbox" name="completed"/>
      <br />
      <button type="submit" disabled={isPending}>Add</button>
      {error && <p>{error}</p>}
    </form>      
    </>
  )
}

export default TodoForm