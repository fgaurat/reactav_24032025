import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        const t = setInterval(() => {
            setCount(value => value+1)
            console.log("inc")
        }, 1000);


        return ()=>{
            clearInterval(t)
        }
    },[])

  return (
    <>
    <h2>UseEffect</h2>
    <strong>{count}</strong>
    </>
  )
}

export default UseEffect