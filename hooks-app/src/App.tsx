import { useCallback, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './UseEffect'
import UseReducer from './UseReducer'
import UseMemo from './UseMemo'
import PureComponent01 from './PureComponent01'
import PureComponent02 from './PureComponent02'
import UseRef from './UseRef'

function App() {
  const [show, setShow] = useState(false)
  console.log("render",show)
  const name = "fred"

  // const onClickPureComponent02 = ()=>{
  //   console.log("onClickPureComponent02")
  // }

  // const onClickPureComponent02 = useMemo(()=>{
  //   return ()=>{
  //     console.log("onClickPureComponent02")
  //   }
  // },[])

  const onClickPureComponent02 =useCallback(()=>{
    console.log("onClickPureComponent02")
  },[])


  const showValue=()=>{
    console.log("showValue",inputRef.current?.value)
  }
  const showValueComponentRef=()=>{
    console.log("showValueComponentRef",componentRef.current?.getValue())
  }

  const inputRef = useRef<HTMLInputElement>(null)
  const componentRef = useRef(null)

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
    <hr />
    <PureComponent01 name={name}/>
    <hr />
    <PureComponent02 onClick={onClickPureComponent02}/>
    <hr />

    <input type="text" ref={inputRef}/>
    <br />
    <button onClick={()=>showValue()}>click Input</button>
    <hr />
    <UseRef ref={componentRef}/>
    <button onClick={()=>showValueComponentRef()}>click componentRef</button>
    </>
  )
}

export default App
