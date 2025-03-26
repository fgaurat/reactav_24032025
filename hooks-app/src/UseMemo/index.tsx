import React, { useState,useMemo } from 'react'

const longWork = (t=300)=>{
    console.log("start longWork")
    const end = Date.now()+t
    while(Date.now()<end){}
    console.log("end longWork")
}

const toUpper = (s:string)=>{
    longWork()
    return s.toUpperCase()
}

function UseMemo() {

    const [a, setA] = useState("")
    const [b, setB] = useState("")

    const upperB = useMemo(()=>toUpper(b),[b])
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