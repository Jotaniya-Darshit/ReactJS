import React, { useState } from 'react'
import Two from './Two'

export default function One() {
    const [num ,setNum] = useState(0)
  return (
    <>
    <h1>File One</h1>
    <button onClick={()=>{setNum(num+1)}} >+</button>&nbsp;
    <button onClick={()=>{setNum(num-1)}} >-</button>
    <Two num={num} />
    </>
  )
}
