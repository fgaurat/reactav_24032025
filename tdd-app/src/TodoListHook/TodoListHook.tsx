import { Todo } from '../core/Todo'
import { useFetchTodos } from '../hooks/useFetchTodos'


function TodoListHook() {
    const {todos,setTodos,isLoading:isLoadingFetch} = useFetchTodos()

    

  return (
    <>
    <h2>TodoList</h2>

    {isLoadingFetch && <p>Chargement ...</p>}
    
    {!isLoadingFetch  &&
    <table className="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {todos.map( (todo:Todo) =>
        <tr>
          <td>{todo.id}</td>
        </tr>

        )}
        </tbody>

    </table>}

    </>
  )
}

export default TodoListHook
