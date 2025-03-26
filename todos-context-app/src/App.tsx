import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function App() {

  return (
    <>
    <TodoForm/>
    <hr />
    <TodoList/>
    </>
  )
}

export default App
