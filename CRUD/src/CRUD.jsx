import React, { useEffect, useState } from 'react'

export default function CRUD() 
{
    const[name,setName]=useState("")
    const[sub,setSub]=useState("")
    const[city,setCity]=useState("")
    const[record,setRecord]=useState([])
    const[editIndex,setEditIndex]=useState(null);

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("Students")) || [];
        setRecord(data);
    },[])

    const handleSubmit = () => {
        if(editIndex == null)
        {
            let obj = { id:Date.now(),name,sub,city}
            setRecord([...record,obj]);
            localStorage.setItem("Students",JSON.stringify([...record,obj]));
        }
        else
        {
            let singleData = record.find((item)=>item.id == editIndex);
            singleData.id = editIndex;
            singleData.name = name;
            singleData.sub = sub;
            singleData.city = city;
            localStorage.setItem("Students",JSON.stringify(record));
        }

        setName("")
        setSub("")
        setCity("")
        setEditIndex(null)
    }
    const handleEdit = (i) => {
        let singleData = record.find((item)=> item.id == i);

        setName(singleData.name)
        setSub(singleData.sub)
        setCity(singleData.city)
        setEditIndex(i)
    }
    const handleDelete = (i) => {
        let data = record.filter((item)=>item.id != i)
        setRecord(data)
        localStorage.setItem("Students", JSON.stringify(data))
    }
  return (
    <>
        <center>
            <h3>CRUD with LocalStorage</h3>

            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' /><br />
                <input type="text" value={sub} onChange={(e)=>setSub(e.target.value)} placeholder='Enter Your Subject' /><br />
                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter Your City' /><br /><br />
                <button onClick={(handleSubmit)}>{editIndex == null ? "ADD" : "UPDATE" }</button>
            </div>
            <br /><br /><br />
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th colSpan={2} >Actions</th>
                </thead>
                <tbody>
                    {
                        record &&
                        record.map((e,i)=>{
                            return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{e.name}</td>
                                <td>{e.sub}</td>
                                <td>{e.city}</td>
                                <td><button onClick={()=>handleEdit(e. id)}>Edit</button></td>
                                <td><button onClick={()=>handleDelete(e. id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </center>
    </>
  )
}
