import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addData, deleteData, updateData } from '../Features/TodoSlice'

export default function CRUD() {
    const [task, setTask] = useState("")
    const [prority, setPriority] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.TodoKey.data;
    })
    const handleAdd = () => {
        if (editIndex == null) {
            dispatch(addData({ id: Date.now(), task, prority }))
        }
        else {
            dispatch(updateData({ id: editIndex, task, prority}))
            setEditIndex(null)
        }
        setTask("");
        setPriority("");
        }
    
    const deleteRecord = (id) => {
            dispatch(deleteData(id))
        }
    
    const editRecord = (id) => {
            let singleData = data.data.find((item) => item.id == id);
            setname(singleData.task)
            setsub(singleData.prority)
            setEditIndex(id)
        }
  return (
    <div>
        <h1>Crud</h1>
        <input type="text" value={task} placeholder='Enter Your Task' onChange={(e)=>setTask(e.target.value)} />
        <input type="text" value={prority} placeholder='Enter Your Priority' onChange={(e)=>setPriority(e.target.value)} />
        <button onClick={handleAdd}>{editIndex ? "Update Data" : "Add Data"}</button>
        {
            data && 
            data.map((item, index) => {
                return (<div key={item.id}>
                        <h2>{item.task}</h2>
                        <h2>{item.prority}</h2>
                        <button onClick={deleteRecord} >Edit</button>
                        <button onClick={editRecord} >Delete</button>
                        </div>)
            })
        }
    </div>
  )
}
