import React, { useEffect, useState } from 'react'
import service from "../services/todoService"
import { Todo } from '../core/Todo'



const useDeleteTodo = () =>{
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const deleteTodo = async (todo:Todo)=>{
        setIsLoading(true)
        await service.deleteTodo(todo)
        setIsLoading(false)
    }
    return {deleteTodo,isLoading}
}


export {useDeleteTodo}