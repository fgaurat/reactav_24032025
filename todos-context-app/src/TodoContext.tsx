import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { Todo, Todos } from "./core/Todo";
import service from './services/todoService'

interface TodoState {
    todos: Todos
}

interface TodoContextType {
    state: TodoState
    addTodo: (todo: Todo) => Promise<void>
    deleteTodo: (todo: Todo) => Promise<void>
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

const todoReducer = (state: TodoState, action: { type: string; payload?: any }): TodoState => {
    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.payload };
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'DELETE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id) };
        default:
            return state;
    }
};

const initialState: TodoState = {
    todos: []
}


export const TodoProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(todoReducer, initialState)

    useEffect(() => {
        (async () => {
            const todos = await service.getTodos()
            dispatch({type:"SET_TODOS",payload:todos})
        })()
    }, [])

    const addTodo = async (todo: Todo) => { 
        await service.saveTodo(todo)
        dispatch({type:"ADD_TODO",payload:todo})
    }
    const deleteTodo = async (todo: Todo) => { 
        await service.deleteTodo(todo)
        dispatch({type:"DELETE_TODO",payload:todo})
    }

    return (
        <TodoContext.Provider value={{ state, addTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}


export const useTodoContext = (): TodoContextType => {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error("useTodoContext must be in TodoProvider")
    }
    return context
}
