import React, { useReducer } from 'react'
const initialstate = 0;
const reducer = (state,action)=>{
    switch(action)
    {
        case "increment1" :
            return state += 1;
        case "increment10" :
                return state += 10;
        case "increment100" :
                return state += 100;
        default:
                    return state
    }
}
export default function Reducer() {
    const [count, dispatch] = useReducer(reducer,initialstate)
  return (
    <div>        
        <h1>Reducer</h1>
        <h1>{count}</h1>
        <button onClick={() => dispatch("increment1")}>Increment 1</button>
        <button onClick={() => dispatch("increment10")}>Increment 10</button>
        <button onClick={() => dispatch("increment100")}>Increment 100</button>
    </div>
  )
}
