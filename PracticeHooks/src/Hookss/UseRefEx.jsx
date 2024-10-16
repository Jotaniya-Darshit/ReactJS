import React, { useRef } from 'react'

export default function UseRefEx() {
    const inputRef = useRef();

    const handle = () =>{
        return console.log(inputRef.current.value);
    }
return (
    <>
        <h1>UseRefEx</h1>
            <input type="text" ref={inputRef} />
            <br />  
            <button onClick={handle}>Click me</button>
    </>
)
}
