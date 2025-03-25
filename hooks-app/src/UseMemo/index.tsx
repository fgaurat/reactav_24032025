import React, { useState } from 'react'

const toUpper = (s:string)=>{
    return s.toUpperCase()
}

function UseMemo() {

    const [a, setA] = useState("")
    const [b, setB] = useState("")

    const upperB = toUpper(b)
  return (
    <>
    <h2>UseMemo</h2>
    <input type="text" placeholder='a' value={a} onChange={e=>setA(e.target.value)}/><br />
    <input type="text" placeholder='b' value={b} onChange={e=>setB(e.target.value)}/><br />
    
    a: {a}
    <br />
    b: {b}
    <br />
    upperB: {upperB}
    </>
  )
}

export default UseMemo