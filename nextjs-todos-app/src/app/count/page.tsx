"use client"
import React, { useState } from 'react'

function page() {

    const [count, setCount] = useState(0)
  return (
    <>
    <h2>count</h2>
    count : {count}
    </>

  )
}

export default page