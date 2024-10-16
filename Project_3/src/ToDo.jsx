import React, { useRef, useState } from 'react'

export default function ToDo() {
    const [task, setTask] = useState([]);
    const input = useRef();

    const addItem = () => {
        if (input.current.value == ""){
            alert("Please Enter a Task");
        }
        else
        {setTask([...task,input.current.value]);
        input.current.value = "";
        input.current.focus();}
    }

  return (
    <>
        <h1>To Do List</h1>
        <input type="text" ref={input} />&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={addItem}>Add</button>
        {
            task ? task.map((e,i)=>{
                return (
                    <ul key={i}>
                        <li>{e}</li>
                    </ul>
                )
            })
            :
            <h1>Please Enter Task</h1>
        }
    </>
  )
}
