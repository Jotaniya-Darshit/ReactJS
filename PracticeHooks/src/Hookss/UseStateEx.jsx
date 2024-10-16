import React from 'react'
import { useState } from 'react'

export default function UseStateEx() {
    const [count, setCount] = useState(0)

    const incre = () => {
      setCount(count+1)
    }
    const decre = () => {
      setCount(count-1)
    }

  return (
    <>
    <h1>UseStateEx</h1>
    <h1>{count}</h1>
    <button onClick={incre}>+</button>
    <button onClick={decre}>-</button>
    </>
  )
}
