import { Todo, Todos } from '@/core/Todo'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import service from "@/services/todoService"

export interface TodoListState {
  todos: Todos
}

const initialState: TodoListState = {
    todos: [],
}

// export const fetchTodoList = createAsyncThunk(
//   'todos/fetch',
//   async () => {
//     const data = await service.getTodos()
//     return data
//   },
// )
export const fetchTodoList = createAsyncThunk(
  'todos/fetch',service.getTodos,
)

export const deleteTodo = createAsyncThunk(
  'todos/delete',async (todo:Todo,thunkAPI)=>{
      await service.deleteTodo(todo)
      thunkAPI.dispatch(fetchTodoList())
  }
)


export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchTodoList.fulfilled,(state,action)=>{
      console.log(action.payload)
      state.todos = action.payload
    })
  }
})

// Action creators are generated for each case reducer function
// export const {  } = todoListSlice.actions

export default todoListSlice.reducer