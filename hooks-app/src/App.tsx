import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './UseEffect'
import UseReducer from './UseReducer'
import UseMemo from './UseMemo'

function App() {
  const [show, setShow] = useState(false)
  console.log("render",show)
  return (
    <>
    <h1>Hooks</h1>
    <button onClick={()=>setShow(show_value => !show_value)}>
      {show?'Hide':'Show'}
    </button>
    
    {show &&
      <>
      Hello
      <UseEffect/>
      </>
    }

    <hr />
    <UseReducer/>
    <hr />
    <UseMemo/>

    </>
  )
}

export default App
