import React, { useEffect, useState } from 'react'
import { Todo, Todos } from '@/core/Todo'
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
import { Loader2 } from "lucide-react"

import  {useFetchTodos} from "@/hooks/useFetchTodos"
import { useDeleteTodo } from '@/hooks/useDeleteTodo'
import { cn } from '@/lib/utils'

export const LoadingSpinner = ({className}) => {
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
}

function TodoList() {
  const {todos,isLoading,setTodos,fetchTodos} = useFetchTodos()
  const {deleteTodo,isLoading:isLoadingDelete} = useDeleteTodo()

  const doDelete = async (todo:Todo)=>{
    console.log(todo)
    await deleteTodo(todo)
    // const all_todos = todos.filter(o => o.id!== todo.id)
    // setTodos(all_todos)
    await fetchTodos()
  }

  return (
    <>
      <h2>TodoList</h2>

      {(isLoading||isLoadingDelete) &&<Loader2 className="animate-spin" />}

      {! isLoading && !isLoadingDelete &&
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
    }
    </>
  )
}

export default TodoList