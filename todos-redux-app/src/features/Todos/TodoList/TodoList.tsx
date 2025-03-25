import { AppDispatch, RootState } from '@/app/store'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Todo } from '@/core/Todo'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, fetchTodoList } from '../todoSlice'

function TodoList() {
  const todos = useSelector((state:RootState)=>state.theTodos.todos)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchTodoList())
  
  }, [])

  const doDelete = (todo:Todo) =>{
    dispatch(deleteTodo(todo))
  }
  
  return (
    <>
      <h2>TodoList</h2>
      <Table>
        <TableCaption>A list of Todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {todos.map((todo: Todo) => (

            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed}</TableCell>
              <TableCell>
              <Button variant="destructive" onClick={()=>doDelete(todo)}>Delete</Button>
              </TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default TodoList