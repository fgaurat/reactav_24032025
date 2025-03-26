import { Todos } from '@/core/Todo'
import React, { useEffect, useState } from 'react'

import service from "../services/todoService"

const useFetchTodos = () => {
    const [todos, setTodos] = useState<Todos>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchTodos = async () => {
        setIsLoading(true)
        const todos: Todos = await service.getTodos()
        setIsLoading(false)
        setTodos(todos)
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return { todos,isLoading,setTodos ,fetchTodos}
}

export { useFetchTodos }