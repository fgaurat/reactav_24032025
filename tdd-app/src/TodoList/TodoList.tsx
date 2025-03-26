import { Todos } from '../core/Todo'

function TodoList({todos}:{todos:Todos}) {
  return (
    <>
    <table>
      <tbody>
        {todos.map(todo=>(
          <tr>
            <td>{todo.id}</td>
          </tr>

        ))}
      </tbody>
    </table>
    </>
    
  )
}

export default TodoList